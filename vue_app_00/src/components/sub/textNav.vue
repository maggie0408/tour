<template>
  <div class="textNav-container">
    <!--文字导航-->
    <v-touch id="textNav" @panend="onPanEnd2" @panleft="onPanLeft2" @panright="onPanRight2" tag="div">
      <div v-for="value,index of nameList">
        <router-link :to="goPath[index]" @click.native="select(index)" :class="{selectedW:index==isActive}">{{value}}</router-link>
        <div :class="{selectedP:index==isShow}"></div>
        <div></div>
      </div>
    </v-touch>
  </div>
</template>

<script>
  //引入文件

  //引入mui.js,会有严格模式的限制，慎用！
  //import mui from "../../lib/mui/js/mui.js"
  export default{
    data(){
      return {
        nameList:["关注","正在旅行","推荐","圣地巡礼","附近","国内","国外","带娃旅行","海岛游","情侣出行","自驾游"],
        goPath:["/home/care","/home/travelling","/home/recommend","/home/holy","/home/nearby","/home/domestic","/home/overseas","/home/babygo","/home/island","/home/couple","/home/selfdriving"],
        //样式
        x2:"",
        leftLength2:0,
        textNav:document.getElementById("textNav"),
        navWidth:document.body.clientWidth,
        isActive:1,
        isShow:1
      }
    },
    computed:{},
    methods:{
      onPanLeft2(data){
        this.x2=data.deltaX;
        if(this.leftLength2+this.x2<(-this.navWidth)){
          this.leftLength2=-this.navWidth;
          this.x2=0;
        };
        textNav.style.marginLeft=this.x2+this.leftLength2+"px";
      },
      onPanRight2(data){
        this.x2=data.deltaX;
        if(this.leftLength2+this.x2>=0){
          this.leftLength2=0;this.x2=0;
        };
        textNav.style.marginLeft=this.leftLength2+this.x2+"px";
      },
      onPanEnd2(){
        this.leftLength2=this.x2+this.leftLength2;
      },
      select(index){
        this.isActive=index;
        this.isShow=index;
      }
    },
    components:{
    },
    created(){
    }
  }
</script>

<style>
  .newInfo{
    width:3px;height:3px;border:3px solid #F34C40;
    border-radius:50%;
    position:absolute;right:-100%;top:-70%;
  }
  .selectedW{
    display:block;
    width:100%;
    position:relative;
    margin-left:2%;
    font-size:17px;font-weight:bold;
    color:#000 !important;
  }
  .selectedP{
    position:absolute;top:55%;left:20%;
    width:60%;height:8px;
    border:4px solid #F5D64B;
    border-radius:0 0 50% 50%/0 0 100% 100%;
    border-top:none;
  }
  .textNav-container{
    background-color:#fff;width:100%;
  }
  #textNav{
    display:flex;
    margin-left:1%;margin-top:2%;
    width:200%;height:40px;
  }
  #textNav>div{
    position:relative;
    margin-left:3%;
    font-size:14px;
  }
  #textNav>div>a{
    color:#8A8A8A;
  }
</style>
