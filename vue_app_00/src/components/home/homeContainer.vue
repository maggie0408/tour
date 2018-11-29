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
      <!--图标导航缩略图-->
      <div id="thumbnail">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <img src="http://127.0.0.1:8000/img/icons/search.png" />
        <input type="text" /> 
        <img src="http://127.0.0.1:8000/img/icons/info.png" />
      </div>      
    </div>
    <!--图标导航-->
      <v-touch id="nav" @panend="onPanEnd" @panleft="onPanLeft" @panright="onPanRight" tag="div">
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
          <img src="http://127.0.0.1:8000/img/icons/QA.png">
          <span>问答</span>
        </div>
        <p class="point">
          <span id="leftPoint"></span>
          <span id="rightPoint"></span>
        </p>
      </v-touch>
      <div class="divide"></div>
      <!--文字导航-->
      <textNav-box></textNav-box>
      <!--底部导航条-->
      <bottom-box></bottom-box>
  </div>
</template>

<script>
    //引入轮播图子组件
    import swiper from "../sub/swiper.vue"
    import bottom from "../sub/bottom.vue"
    import textNav from "../sub/textNav.vue"
    import {Toast} from "mint-ui"
    
    //引入mui.js,会有严格模式的限制，慎用！
    //import mui from "../../lib/mui/js/mui.js"
    export default{
        data(){
            return {
                imageList:[],
                nav:document.getElementById("nav"),
                navWidth:document.body.clientWidth,
                x:"",
                leftLength:0               
            }
        },  
        computed:{

        },      
        methods:{
            getImages(){
                var url="http://127.0.0.1:8000/imagelist";
                this.$http.get("imagelist").then(result=>{
                    this.imageList=result.body;                   
                })
            },
            onPanLeft(data){           
                this.x=data.deltaX;  
                if(this.leftLength+this.x<(-this.navWidth)){
                    this.leftLength=-this.navWidth;
                    this.x=0;
                };      
                nav.style.marginLeft=this.x+this.leftLength+"px";
            },
            onPanRight(data){
                this.x=data.deltaX;   
                if(this.leftLength+this.x>=0){
                    this.leftLength=0;this.x=0;
                };             
                nav.style.marginLeft=this.x+this.leftLength+"px";
            },
            onPanEnd(){
                var bullet1=document.getElementById("leftPoint");         
                var bullet2=document.getElementById("rightPoint");
                if(this.x<0){
                    nav.style.marginLeft=-this.navWidth+"px";
                    bullet1.style.width=2+"px";
                    bullet1.style.borderColor="#E4E1E2";
                    bullet2.style.width=12+"px";
                    bullet2.style.borderColor="orange";
                    this.leftLength=-this.navWidth;
                }else{
                    nav.style.marginLeft=0;
                    bullet1.style.width=12+"px";
                    bullet1.style.borderColor="orange";
                    bullet2.style.width=2+"px";
                    bullet2.style.borderColor="#E4E1E2";
                    this.leftLength=0;
                };                
            },
        },
        components:{//给子组件swiper注册
            "swiper-box":swiper,
            "bottom-box":bottom,
            "textNav-box":textNav
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
    .divide{
        height:8px;
        background-color:#F8F8F8;
    }
    .clearBoth{
        display:block;clear:both;content:"";
    }
    .app-homeContainer .mui-card{
        margin:0;
    }
    .app-homeContainer .mui-card-content-inner{
        padding:0;
    }
    #search{
        display:flex;
        margin-top:3%;
        position:relative;
    }
    #thumbnail{
        visibility:hidden;
        width:10%;height:35px;
        margin-right:2%;margin-left:2%;
        padding-top:1.5%;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
    }
    #thumbnail div{
        width:8px;height:8px;
        border:4px solid red;
        border-radius:50%;
        margin-left:3px;
    }
    #thumbnail>div:first-child{
        border:4px solid orange;
    }
    #thumbnail>div:nth-child(2){
        border:4px solid red;
    }
    #thumbnail>div:nth-child(3){
        border:4px solid purple;
    }
    #thumbnail>div:nth-child(4){
        border:4px solid green;
    }
    #thumbnail>div:nth-child(5){
        border:4px solid blue;
    }
    #thumbnail>div:last-child{
        border-radius:0;
        border-top:6px solid black;
        border-left:4px solid transparent;
        border-right:4px solid transparent;
        border-bottom:0px solid transparent;
        margin-top:3%;
    }
    #search>div:last-child{
        width:80%;
        position:relative;
    }
    #search>div:last-child input{
        width:88%;height:35px;
        padding-left:10%;
        border:1px solid #E7E7E7;
        border-radius:20px;
    }
    #search>div:last-child>img:first-child{
        width:6%;
        position:absolute;
        left:2%;top:15%;
    }
    #search>div:last-child>img:last-child{
        width:5%;
        position:absolute;
        top:20%;right:1%;
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
    #nav p.point{position:absolute;left:48%;top:40%;width:6%;height:10px;display:flex;justify-content:space-around;
    }
    #nav p span{
        display:block;
        height:2px;border-radius:50px;        
    }
    #leftPoint{
        width:12px;border:2px solid orange;
    }
    #rightPoint{
        border:2px solid #E4E1E2;
    }
    div.divide{
        margin-top:20px;
    }
</style>