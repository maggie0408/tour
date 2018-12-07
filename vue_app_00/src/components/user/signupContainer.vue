<template>
  <div class="app-signup-container">
    <!--背景视频-->
    <div class="video-container">
      <video :src="video" autoplay loop muted></video>
    </div>
    <!--注册界面内容-->
    <div class="signContent-container">
      <p>
        <router-link to="/user"><img src="http://127.0.0.1:8000/img/icons/back.png"></router-link>
      </p>
      <span>喵小社</span>
      <span>愿每一个旅行愿望得以达成</span>
      <div class="input">
        <div>
          <input placeholder="请输入用户名(6-12位)" ref="uname">
        </div>
        <div>
          <input placeholder="请输入密码(6-12位)" ref="upwd1">
        </div>
        <div>
          <input placeholder="请再输入密码(6-12位)" ref="upwd2">
        </div>
        <div>
          <router-link to=""><button @click="handleSignup">注册</button></router-link>
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
        upwd1:'',
        upwd2:''
      }
    },

    methods: {
      handleSignup() {
        var uname = this.$refs.uname.value;
        var upwd1 = this.$refs.upwd1.value;
        var upwd2 = this.$refs.upwd2.value;
        this.uname = uname;
        this.upwd1 = upwd1;
        this.upwd2 = upwd2;
        if (this.uname == "") Toast("用户名不能为空");
        else if (this.upwd1 == "" || this.upwd2=="") Toast("密码不能为空");
        else if(this.upwd1 !== this.upwd2) Toast("密码不一致，请重新输入");
        else {
          axios.post(
            'http://127.0.0.1:8000/user/signup',
            Qs.stringify({
              uname:this.uname,upwd:this.upwd2
            })
          ).then((result)=>{
            if(result.data.ok==1){
              Toast(result.data.msg);
              this.$router.push('/login');
            }else{
              Toast(result.data.msg);
            };
          });
        };
      },
    },

    components:{

    }
  }
</script>

<style>
  .app-signup-container{position:relative;}
  .video-container{
    position:relative;
    width:100%;height:100vh;
    overflow:hidden;
  }
  .video-container video{
    width:450%;
    position:absolute;left:-100px;
  }
  .signContent-container{position:absolute;left:0;top:0;width:100%;}
  .signContent-container>p:first-child{margin-top:3%;margin-left:3%;}
  .signContent-container>p:first-child a img{width:8%;}
  .signContent-container>span:nth-child(2){display:block;font-size:40px;color:white;margin-top:40px;margin-left:30px;}
  .signContent-container>span:nth-child(3){display:block;font-size:18px;color:white;margin-top:20px;margin-left:30px;}
  div.input{margin-top:120px;}
  div.input>div{width:80%;margin:10px 10% 10px;}
  div.input>div input, div.input>div a button {width:100%;background:white;opacity:.4;border-radius:30px;border:0;height:50px;}
  div.input>div input{padding-left:20px;}
  div.input>div a button{opacity:.8;font-size:16px;color:gray;}
  div.input>div a button:active{background:gray;}
</style>
