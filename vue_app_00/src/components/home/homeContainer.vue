<template>
  <div class="app-homeContainer">
    <!--轮播图-->
    <div class="mui-card" :class="swiperBlock==true?'':'unDisplay'">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper-box :list="this.swiperImg"></swiper-box>
        </div>
      </div>
    </div>
    <!--搜索栏-->
    <div id="search" class="search" :class="searchBarFixed == true ? 'isFixed_searchBar' :'unFixed_searchBar'">
      <!--图标导航缩略图-->
      <div id="thumbnail" :class="thumbnail==true?'isActive_thumbnail':'disActive_thumbnail'" @click="clickThumbnail">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <!--搜索框及周围图标-->
      <div>
        <img src="http://127.0.0.1:8000/img/icons/search.png" />
        <input type="text" />
        <img src="http://127.0.0.1:8000/img/icons/info.png" />
      </div>
    </div>
    <!--图标导航-->
    <div class="navPics" :class="navIcon==true?'isShow_navIcon':'unShow_navIcon'">
      <v-touch id="nav" @panend="onPanEnd" @panleft="onPanLeft" @panright="onPanRight" tag="div">
        <div v-for="(value,index) in navImg">
          <img :src="value.img_url">
          <span>{{navName[index]}}</span>
        </div>
      </v-touch>
      <p class="point">
        <span id="leftPoint"></span>
        <span id="rightPoint"></span>
      </p>
    </div>
    <div class="divide" :class="changeMarBotm==true?'MarBotm':''"></div>
    <!--文字导航-->
    <textNav-box :class="textNav==true?'isFixed_textNav':''"></textNav-box>
    <!--底部导航条-->
    <bottom-box :isSelected="0"></bottom-box>
  </div>
</template>

<script>
  //引入轮播图子组件
  import swiper from "../sub/swiper.vue"
  import bottom from "../sub/bottom.vue"
  import textNav from "../sub/textNav.vue"
  //import {Toast} from "mint-ui"

  //引入mui.js,会有严格模式的限制，慎用！
  //import mui from "../../lib/mui/js/mui.js"
  export default{
    data(){
      return {
        swiperImg:[],
        navImg:[],
        navName:["攻略","酒店","火车飞机票","旅行商城","游记","旅行视频","问答"],
        //样式
        nav:document.getElementById("nav"),
        navWidth:document.body.clientWidth,
        x:"",
        leftLength:0,
        swiperBlock:true,
        searchBarFixed:false,
        thumbnail:false,
        navIcon:true,
        textNav:false,
        changeMarBotm:false
      }
    },
    computed:{
    },
    methods:{
      getSwiperImg(){
        var url="http://127.0.0.1:8000/imagelist";
        this.$http.get("imagelist").then(result=>{
          this.swiperImg=result.body.swiperImg;
        })
      },
      getnavImg(){
        var url="http://127.0.0.1:8000/imagelist";
        this.$http.get("imagelist").then(result=>{
          this.navImg=result.body.navIcon;
        })
      },
      onPanLeft(data){
        this.x=data.deltaX;
        if(this.leftLength == -this.navWidth) return;
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
      handleScroll(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //搜索栏距离顶部的高度
        var searchOffsetTop=document.querySelector("#search").offsetTop;
        //向上滑动：记录搜索栏顶部高度和滑动距离的差值
        var dis=searchOffsetTop-scrollTop;
        if(dis<=0){
          this.searchBarFixed=true;//搜索栏固定在顶部
          this.thumbnail=true;//图标导航缩略图显示
          this.navIcon=false;//图标导航隐藏
          this.textNav=true;//文字导航固定位置
          this.swiperBlock=false;//轮播图不显示
          this.changeMarBotm=true;//向下撑开子组件
        }
      },
      clickThumbnail(){
        this.searchBarFixed=false;//搜索栏恢复初始状态
        this.thumbnail=false;//图标导航缩略图隐藏
        this.navIcon=true;//图标导航显示
        this.textNav=false;//文字导航恢复初始样式
        this.swiperBlock=true;//轮播图显示
        this.changeMarBotm=false;//分隔栏下边距改变
      },
    },

    components:{//给子组件swiper注册
      "swiper-box":swiper,
      "bottom-box":bottom,
      "textNav-box":textNav
    },

    created(){
      this.getSwiperImg();
      this.getnavImg();
    },

    mounted(){
      window.addEventListener('scroll',this.handleScroll)
    },

    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
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
    margin-bottom:1%;
  }
  .unDisplay{
    display:none !important;
  }
  .MarBotm{
    margin-bottom:80px;
  }
  .app-homeContainer .mui-card{
    margin:0;height:125px;
  }
  .app-homeContainer .mui-card-content-inner{
    padding:0;
  }
  #thumbnail{
    width:10%;height:35px;
    margin-right:2%;margin-left:2%;
    padding-top:1.5%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
  }
  .isActive_thumbnail{
    visibility:visible;
  }
  .disActive_thumbnail{
    visibility:hidden;
  }
  #thumbnail div{
    width:8px;height:8px;
    border-radius:50%;
    margin-left:3px;margin-top:15%;
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
    margin-top:18%;
  }
  #search{
    display:flex;
  }
  .isFixed_searchBar{
    position:fixed;
    width:100%;
    background-color:#Fff;
    top:0;
    z-index:999;
  }
  .unFixed_searchBar{
    position:relative;
    margin-top:3%;
  }
  #search>div:last-child{
    width:80%;
    position:relative;
  }
  #search>div:last-child input{
    width:88%;height:35px;
    margin-top:2%;padding-left:10%;
    border:1px solid #E7E7E7;
    border-radius:20px;
  }
  #search>div:last-child>img:first-child{
    width:6%;
    position:absolute;
    left:2%;top:25%;
  }
  #search>div:last-child>img:last-child{
    width:5%;
    position:absolute;
    top:28%;right:1%;
  }
  .navPics{
    width:200%;
  }
  #nav{
    display:flex;
    margin-top:2%;
    width:100%;
    text-align:center;
  }
  .isShow_navIcon{
    display:block;
  }
  .unShow_navIcon{
    display:none;
  }
  #nav div{
    width:9%;
    margin-left:1%;
  }
  #nav div img{width:60%;}
  #nav div span{display:block;font-size:13px;color:#878787;text-align:center;}
  p.point{
    width:25px;height:10px;
    display:flex;justify-content:space-around;
    margin-left:24%;padding-top:1%;
  }
  .navPics>p:last-child span{
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
  .isFixed_textNav{
    position:fixed;
    top:7%;
    width:100%;height:50px;
  }
</style>
