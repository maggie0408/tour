const express=require("express");
const pool=require("./pool");
const cors=require("cors");
const qs=require("qs");
const session = require('express-session')

const user=require('./routes/user');
const userpost=require('./routes/userpost');

var app=express();
app.use(express.static(__dirname+'/public'));
app.listen(8000,(req,res)=>{
    console.log('success');
});

app.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080","http://localhost:8000"],
    credentials:true  //允许
}))

app.use(session({
    secret:'随机字符串',
    cookie:{maxAge:60*1000*60*24*30},
    resave:false,
    saveUninitialized:true
}));


//首页轮播图
app.get('/imagelist',(req,res)=>{
    var result= {
        swiperImg:[
            {id: 1, img_url: 'http://127.0.0.1:8000/img/swiper/swiper1.jpeg'},
            {id: 2, img_url: 'http://127.0.0.1:8000/img/swiper/swiper2.jpeg'},
            {id: 3, img_url: 'http://127.0.0.1:8000/img/swiper/swiper3.jpeg'},
            {id: 4, img_url: 'http://127.0.0.1:8000/img/swiper/swiper4.jpeg'}
        ],
        navIcon:[
            {id: 1, img_url: 'http://127.0.0.1:8000/img/icons/preparation.png'},
            {id: 2, img_url: 'http://127.0.0.1:8000/img/icons/hotel.png'},
            {id: 3, img_url: 'http://127.0.0.1:8000/img/icons/train.png'},
            {id: 4, img_url: 'http://127.0.0.1:8000/img/icons/shop.png'},
            {id: 5, img_url: 'http://127.0.0.1:8000/img/icons/notes.png'},
            {id: 6, img_url: 'http://127.0.0.1:8000/img/icons/video.png'},
            {id: 7, img_url: 'http://127.0.0.1:8000/img/icons/QA.png'}
        ],
        icons:[
            {id: 1, img_url: 'http://127.0.0.1:8000/img/icons/home.png'},
            {id: 2, img_url: 'http://127.0.0.1:8000/img/icons/home_active.png'},
            {id: 3, img_url: 'http://127.0.0.1:8000/img/icons/hotel2.png'},
            {id: 4, img_url: 'http://127.0.0.1:8000/img/icons/hotel2_active.png'},
            {id: 5, img_url: 'http://127.0.0.1:8000/img/icons/shop2.png'},
            {id: 6, img_url: 'http://127.0.0.1:8000/img/icons/shop2_active.png'},
            {id: 7, img_url: 'http://127.0.0.1:8000/img/icons/me.png'},
            {id: 8, img_url: 'http://127.0.0.1:8000/img/icons/me_active.png'},
        ]
   };
    res.send(result);
});

app.use("/user",user);
app.use("/userpost",userpost);