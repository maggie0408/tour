<template>
  <div class="app-bottom-container">
    <router-view></router-view>
    <!--底部导航条-->
    <nav class="mui-bar mui-bar-tab">
      <router-link :to="goPath[index]" class="mui-tab-item navBotm" v-for="(value,index) in titleList">
		    <span class="mui-icon">
          <img :src="icons[index*2]" :class="{isHide:index==isSelected}">
          <img :src="icons[index*2+1]" :class="{isHide:index!=isSelected}">
        </span>
        <span class="mui-tab-label" :class="{selected:index==isSelected}">{{value}}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  //import mui from "../../lib/mui/js/mui.js"

  export default {
    data(){
      return {
        titleList:["首页","酒店","旅行商城","我的"],
        icons:[],
        goPath:["/home","/hotel","/shop","/user"],
        isActive:true
      }
    },

    computed:{
    },

    props:["isSelected"],

    methods:{
      getIconImg(){
        var url="/imagelist";
        this.$http.get("imagelist").then(result=>{
          var icons=result.body.icons;
          for(var i=0;i<icons.length;i++){
            this.icons.push(icons[i].img_url);
          };
        })
      }
    },

    created(){
      this.getIconImg();
    },

    components:{
    }
  }
</script>

<style>
  body{
    background-color:#FFFFFF;
  }
  .app-bottom-container{
    border-top:0 !important;
  }
  .app-bottom-container .mui-bar-tab{
    background-color:#F1F1F1;
  }
  .selected{
    color: #007aff;
  }
  .isHide{
    display:none;
  }
  .mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }
  .mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
    font-size:11px;
    display:block;
    overflow:hidden;
    text-overflow:ellipsis;
  }
</style>
