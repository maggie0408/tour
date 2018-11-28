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
      <v-touch id="textNav" @panend="onPanEnd2" @panleft="onPanLeft2" @panright="onPanRight2" tag="div">
        <div>关注<div class="newInfo"></div></div>
        <div>正在旅行<div class="selected"></div></div>
        <div>推荐</div>
        <div>圣地巡礼</div>
        <div>附近</div>
        <div>国内</div>
        <div>国外</div>
        <div>带娃旅行</div>
        <div>海岛游</div>
        <div>情侣出行</div>
        <div>自驾游</div>
      </v-touch>
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
                nav:document.getElementById("nav"),
                textNav:document.getElementById("textNav"),
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
                nav.style.marginLeft=this.x+"px";
            },
            onPanRight(data){
                this.x=data.deltaX;                
                nav.style.marginLeft=-this.navWidth+this.x+"px";
            },
            onPanEnd(){
                var bullet1=document.getElementById("leftPoint");         
                var bullet2=document.getElementById("rightPoint");
                if(this.x<0){
                    nav.style.marginLeft=-this.navWidth+"px";
                    bullet1.style.width=2+"px";
                    bullet2.style.width=12+"px";
                }else{
                    nav.style.marginLeft=0;
                    bullet1.style.width=12+"px";
                    bullet2.style.width=2+"px";
                }
            },
            onPanLeft2(data){           
                this.x=data.deltaX;                                        
                if(this.leftLength+this.x<(-this.navWidth)){
                    this.leftLength=-this.navWidth;
                    this.x=0;
                };
                textNav.style.marginLeft=this.x+this.leftLength+"px";
            },
            onPanRight2(data){
                this.x=data.deltaX;                    
                if(this.leftLength+this.x>=0){
                    this.leftLength=0;this.x=0;
                };
                textNav.style.marginLeft=this.leftLength+this.x+"px";
            },
            onPanEnd2(){                
                this.leftLength=this.x+this.leftLength;
            }
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
    .divide{
        height:8px;
        background-color:#F8F8F8;
    }
    .clearBoth{
        display:block;clear:both;content:"";
    }
    .newInfo{
        width:3px;height:3px;border:3px solid #F34C40;
        border-radius:50%;
        position:absolute;right:-5px;top:0;
    }
    .selected{
        position:absolute;top:10%;left:20%;
        width:60%;height:8px;
        border:4px solid #F5D64B;
        border-radius:0 0 50% 50%/0 0 100% 100%;
        border-top:none;
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
        left:3%;top:15%;
    }
    #search>img:last-child{
        width:5%;
        position:absolute;
        top:20%;right:5%;
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
    #nav p.point{
        position:absolute;left:48%;top:40%;
        width:6%;height:10px;
        display:flex;justify-content:space-around;
    }
    #nav p span{
        display:block;
        height:2px;border-radius:50px;
        border:2px solid orange;
    }
    #leftPoint{
        width:12px;
    }
    div.divide{
        margin-top:20px;
    }
    #textNav{
        display:flex;
        margin-left:1%;margin-top:2%;
        width:200%;
    }
    #textNav div{
        position:relative;
        margin-left:3%;
        font-size:14px;
        color:#6D6D6D;
    }
    #textNav>div:nth-child(2){
        position:relative;
        margin-left:2%;
        font-size:17px;font-weight:bold;
        color:#000;
    }
</style>