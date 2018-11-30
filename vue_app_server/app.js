const express=require("express");
const bodyParser=require("body-parser");
const pool=require("./pool");
const cors=require("cors");

var app=express();
app.use(express.static(__dirname+'/public'));
app.listen(8000,(req,res)=>{
    console.log('success');
});

app.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080","http://localhost:8000"],
    credentials:true  //允许
}))

//首页轮播图
app.get('/imagelist',(req,res)=>{
    var obj=[
        {id:1,img_url:'http://127.0.0.1:8000/img/swiper/swiper1.jpeg'},
        {id:2,img_url:'http://127.0.0.1:8000/img/swiper/swiper2.jpeg'},
        {id:3,img_url:'http://127.0.0.1:8000/img/swiper/swiper3.jpeg'},
        {id:4,img_url:'http://127.0.0.1:8000/img/swiper/swiper4.jpeg'}
    ];
    res.send(obj);
});
//图标导航图
app.get('/navimg',(req,res)=>{
    var obj=[
        {id:1,img_url:'http://127.0.0.1:8000/img/icons/preparation.png'},
        {id:2,img_url:'http://127.0.0.1:8000/img/icons/hotel.png'},
        {id:3,img_url:'http://127.0.0.1:8000/img/icons/train.png'},
        {id:4,img_url:'http://127.0.0.1:8000/img/icons/shop.png'},
        {id:5,img_url:'http://127.0.0.1:8000/img/icons/notes.png'},
        {id:6,img_url:'http://127.0.0.1:8000/img/icons/video.png'},
        {id:7,img_url:'http://127.0.0.1:8000/img/icons/QA.png'},
    ];
    res.send(obj);
})