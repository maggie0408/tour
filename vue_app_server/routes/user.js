const express=require('express');
const router=express.Router();
const qs=require('qs');

const pool=require('../pool');
var sessionId="";

router.get('/',(req,res)=>{
    var sql="SELECT * FROM users";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

//登录
router.post('/login',(req,res)=>{
    req.on("data",(buff)=>{
        var obj=qs.parse(buff.toString());
        var uname=obj.uname,upwd=obj.upwd;
        var sql="SELECT * FROM user WHERE uname=? and upwd=?";
        pool.query(sql,[uname,upwd],(err,result)=>{
            if(err) throw err;
            if(result.length>0){
                req.session.uid=result[0].id;
                sessionId=req.session.uid;
                res.write(JSON.stringify({ok:1}));
            }else{
                res.write(JSON.stringify({ok:0}));
            }
            res.end();
        })
    })
});

//注册
router.post('/signup',(req,res)=>{
    req.on('data',(buff)=>{
        var obj=qs.parse(buff.toString());
        var uname=obj.uname,upwd=obj.upwd;
        var avatar="http://127.0.0.1:8000/img/icons/defaultAvatar.png";

        var sql1="SELECT * FROM user WHERE uname=?";
        var sql2="INSERT INTO user VALUES(NULL,?,?,NULL,NULL,?,NULL,NULL)";
        pool.query(sql1,[uname],(err,result)=>{
            if(err) throw err;
            if(result.length>0){
                res.write(JSON.stringify({ok:0,msg:'用户名已存在！请重新注册'}));
                res.end();
            }else{
                pool.query(sql2,[uname,upwd,avatar],(err,result)=>{
                    if(err) throw err;
                    if(result.affectedRows>0){
                        res.write(JSON.stringify({ok:1,msg:'注册成功!请重新登录'}));
                    };
                    res.end();
                });
            }
        })
    })
})

router.post('/logout',(req,res)=>{
    sessionId="";
    res.send();
});

router.get('/islogin',(req,res)=>{
    var uid=sessionId;
    if(uid==""){
        res.write(JSON.stringify({ok:0}));
        res.end();
    }else{
        var sql="SELECT * FROM user WHERE id=?";
        pool.query(sql,[uid],(err,result)=>{
            res.write(JSON.stringify({
                ok:1,
                uname:result[0].uname,
                avatar:result[0].avatar
            }));
            res.end();
        })
    }
});

module.exports=router;