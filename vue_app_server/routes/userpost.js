const express=require('express');
const router=express.Router();
const qs=require('qs');

const pool=require('../pool');

router.get('/',(req,res)=>{
    var sql="SELECT * FROM tourNotes";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
});

router.get('/notespics',(req,res)=>{
    var sql="SELECT * FROM tourNotes_pic";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
});

module.exports=router;