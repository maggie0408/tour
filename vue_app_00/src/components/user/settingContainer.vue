<template>
  <div class="setting-container">
    <p>
      <router-link to="/user"><img src="http://127.0.0.1:8000/img/icons/back_black.png"></router-link>
    </p>
    <div class="logout" @click="handleLogOut">退出当前账号</div>
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'

  export default{
    data(){
      return {}
    },

    methods:{
      handleLogOut(){
        var url="http://127.0.0.1:8000/user/logout";
        axios.post(url).then((result)=>{
          console.log(result);
          this.$router.push('/user');
          this.$router.go(0);
        });
      },
    }
  }
</script>

<style>
  .setting-container{position:absolute;left:0;top:0;background:#fff;width:100%;height:100%;}
  .setting-container>p:first-child{margin-top:3%;margin-left:3%;}
  .setting-container>p:first-child a img{width:8%;}
  div.logout{border-top:1px solid gray;border-bottom:1px solid gray;line-height:40px;text-align:center;color:red;}
</style>
