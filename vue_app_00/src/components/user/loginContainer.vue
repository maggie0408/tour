<template>
  <div class="app-login-container">
    <!--背景视频-->
    <div class="video-container">
      <video :src="video" autoplay loop muted></video>
    </div>
    <!--登录界面内容-->
    <div class="logContent-container">
      <p>
        <router-link to="/user"><img src="http://127.0.0.1:8000/img/icons/back.png"></router-link>
      </p>
      <span>喵小社</span>
      <span>愿每一个旅行愿望得以达成</span>
      <div class="input">
        <div>
          <input placeholder="请输入用户名" v-model="uname" ref="uname">
        </div>
        <div>
          <input placeholder="请输入密码" v-model="upwd" ref="upwd">
        </div>
        <div>
          <router-link to=""><button @click="handleLog">登录</button></router-link>
        </div>
      </div>
      <!--注册/忘记密码-->
      <div>
        <div>
          <span>没有账号？</span>
          <router-link to="/signup">注册</router-link>
        </div>
        <div>
          <router-link to="">忘记密码？</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  import axios from 'axios'
  import Qs from 'qs'

  export default{
    data(){
      return {
        video:"http://127.0.0.1:8000/video/logBG.mp4",
        uname:'',
        upwd:''
      }
    },

    methods: {
      handleLog() {
        var uname = this.$refs.uname.value;
        var upwd = this.$refs.upwd.value;
        this.uname = uname;
        this.upwd = upwd;
        if (this.uname == "") Toast("手机号或邮箱不能为空");
        else if (this.upwd == "") Toast("密码不能为空");
        else {
          axios.post(
            'http://127.0.0.1:8000/user/login',
            Qs.stringify({
            uname:this.uname,upwd:this.upwd
            })
          ).then((result)=>{
            if(result.data.ok==1){
              Toast("登录成功！");
              this.$router.push("/user");
            }else{
              Toast("用户名或密码有误");
            }
          })
        };
      },
    },

    components:{

    }
  }
</script>

<style>
  .app-login-container{position:relative;}
  .video-container{
    position:relative;
    width:100%;height:100vh;
    overflow:hidden;
  }
  .video-container video{
    width:450%;
    position:absolute;left:-100px;
  }
  .logContent-container{
    position:absolute;left:0;top:0;
    width:100%;
  }
  .logContent-container>p:first-child{margin-top:3%;margin-left:3%;}
  .logContent-container>p:first-child a img{width:8%;}
  .logContent-container>span:nth-child(2){display:block;font-size:40px;color:white;margin-top:40px;margin-left:30px;}
  .logContent-container>span:nth-child(3){display:block;font-size:18px;color:white;margin-top:20px;margin-left:30px;}
  .logContent-container div.input{margin-top:120px;}
  .logContent-container div.input>div{width:80%;margin:10px 10% 10px;}
  .logContent-container div.input>div input,.logContent-container div.input>div a button {
    width:100%;background:white;opacity:.4;border-radius:30px;border:0;height:50px;
  }
  .logContent-container div.input>div input{padding-left:20px;}
  .logContent-container div.input>div a button{opacity:.8;font-size:16px;color:gray;}
  .logContent-container div.input>div a button:active{background:gray;}
  .logContent-container>div:last-child{width:80%;margin-left:10%;display:flex;justify-content:space-between;}
  .logContent-container>div:last-child div span{color:white;font-size:14px;}
  .logContent-container>div:last-child div a{color:white;font-size:14px;text-decoration:underline;}

</style>
