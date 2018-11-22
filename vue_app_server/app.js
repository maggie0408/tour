const express=require("express");
const bodyParser=require("body-parser");
const pool=require("./pool");

var app=express();
app.use(express.static(__dirname+'/public'));
app.listen(6666,(req,res)=>{
    console.log('success');
});

//首页轮播图
app.get('/imagelist',(req,res)=>{
    var obj=[
        {id:1,img_url:'http://127.0.0.1:6666/img/swiper/swiper1.jpeg'},
        {id:2,img_url:'http://127.0.0.1:6666/img/swiper/swiper2.jpeg'},
        {id:3,img_url:'http://127.0.0.1:6666/img/swiper/swiper3.jpeg'},
        {id:4,img_url:'http://127.0.0.1:6666/img/swiper/swiper4.jpeg'}
    ];
    res.send(obj);
})