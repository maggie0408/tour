<template>
  <div class="app-bottom">
    <router-view></router-view>
    <!--底部导航条-->
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#">
		    <span class="mui-icon">
          <img src="http://127.0.0.1:8000/img/icons/home.png" style="display:none">
          <img src="http://127.0.0.1:8000/img/icons/home_active.png">
        </span>
        <span class="mui-tab-label">首页</span>
      </a>
      <router-link to="/home/login" class="mui-tab-item">
		<span class="mui-icon">
          <img src="http://127.0.0.1:8000/img/icons/hotel2.png">
          <img src="http://127.0.0.1:8000/img/icons/hotel2_active.png" style="display:none">
        </span>
        <span class="mui-tab-label">酒店</span>
      </router-link>
      <router-link to="/shop" class="mui-tab-item" href="#">
		<span class="mui-icon mui-icon-extra">
          <img src="http://127.0.0.1:8000/img/icons/shop2.png">
          <img src="http://127.0.0.1:8000/img/icons/shop2_active.png" style="display:none">
        </span>
        <span class="mui-tab-label">旅行商城</span>
      </router-link>
      <a class="mui-tab-item" href="#">
	    <span class="mui-icon">
          <img src="http://127.0.0.1:8000/img/icons/me.png">
          <img src="http://127.0.0.1:8000/img/icons/me_active.png" style="display:none">
        </span>
        <span class="mui-tab-label">我的</span>
      </a>
    </nav>
  </div>
</template>

<script>
  //import mui from "../../lib/mui/js/mui.js"
  export default{
    data(){
      return {
        titleList:["首页","酒店","旅行商城","我的"],
        goPath:[]
      }
    },
    computed:{
    },
    methods:{
    },
    components:{
    },
    created(){

    }
  }
</script>

<style>
  body{
    background-color:#FFFFFF;
  }
  .app-bottom{
    border-top:0 !important;
  }
  .app-bottom .mui-bar-tab{
    background-color:#F1F1F1;
  }
  .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
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
