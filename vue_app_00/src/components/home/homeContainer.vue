<template>
  <div class="app-homeContainer">
    <!--轮播图-->
      <div class="mui-card">
		<div class="mui-card-content">
		  <div class="mui-card-content-inner">                
			<swiper-box :list="this.imageList"></swiper-box>
		  </div>
		</div>
	  </div>
    <!--搜索栏-->
      <div id="search">
        <img src="http://127.0.0.1:8000/img/icons/search.png" />
        <input type="text" /> 
        <img src="http://127.0.0.1:8000/img/icons/info.png" />
        </div>
    <!--导航-->
      <div id="nav">
        <div>
          <img src="http://127.0.0.1:8000/img/icons/preparation.png">
          <span>攻略</span>
        </div>
        <div>
          <img src="http://127.0.0.1:8000/img/icons/hotel.png">
          <span>酒店</span>
        </div>
        <div>
          <img src="http://127.0.0.1:8000/img/icons/train.png">
          <span>火车飞机票</span>
        </div>
        <div>
          <img src="http://127.0.0.1:8000/img/icons/shop.png">
          <span>旅行商城</span>
        </div>
        <div>
          <img src="http://127.0.0.1:8000/img/icons/notes.png">
          <span>游记</span>
        </div>
        <div>
          <img src="http://127.0.0.1:8000/img/icons/video.png">
          <span>旅行视频</span>
        </div>
        <div>
          <img src="http://127.0.0.1:8000/img/icons/communicate.png">
          <span>问答</span>
        </div>
        <p>
          <span class="leftPoint"></span>
          <span class="rightPoint"></span>
        </p>
      </div>
  </div>
</template>

<script>
    //引入轮播图子组件
    import swiper from "../sub/swiper.vue"
    import {Toast} from "mint-ui"
    //引入mui.js,会有严格模式的限制，慎用！
    //import mui from "../../lib/mui/js/mui.js"
    export default{
        data(){
            return {
                imageList:[],
                val:1,
                id:this.$route.params.id,
                info:{}
            }
        },        
        methods:{
            getImages(){
                var url="http://127.0.0.1:8000/imagelist";
                this.$http.get("imagelist").then(result=>{
                    this.imageList=result.body;                   
                })
            },
        },
        components:{//给子组件swiper注册
            "swiper-box":swiper
        },
        created(){
            this.getImages();
        }
    }
</script>
    
<style>
    body{
        background-color:#FFFFFF;
    }
    .app-homeContainer .mui-card{
        margin:0;
    }
    .app-homeContainer .mui-card-content-inner{
        padding:0;
    }
    #search{
        margin-top:3%;margin-left:8%;
        position:relative;
    }
    #search input{
        width:85%;height:35px;
        padding-left:10%;
        border:1px solid #E7E7E7;
        border-radius:20px;
    }
    #search>img:first-child{
        width:6%;
        position:absolute;
        left:3%;top:20%;
    }
    #search>img:last-child{
        width:5%;
        position:absolute;
        top:25%;right:5%;
    }
    #nav{
        display:flex;
        margin-top:2%;
        width:200%;
        text-align:center;
    }
    #nav div{
        width:9%;
        margin-left:1%;
    }
    #nav div img{width:60%;}
    #nav div span{display:block;font-size:13px;color:#878787;text-align:center;}
    #nav p{
        position:absolute;left:48%;top:40%;
        width:6%;height:10px;
        display:flex;justify-content:space-around;
    }
    #nav p span{
        display:block;
        height:2px;border-radius:50%;
        border:2px solid orange;
    }
    #nav p span.leftPoint{
        width:50%;
    }
</style>