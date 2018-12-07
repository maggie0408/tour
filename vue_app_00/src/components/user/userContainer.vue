<template>
  <div class="app-user-container">
    <!--未登录页面-->
    <div class="header" :class="{loginStatus:disLogin}">
      <!--设置和消息-->
      <div>
        <span @click="handleSetting">
          <img src="http://127.0.0.1:8000/img/icons/setting.png">
        </span>
        <span>
          <img src="http://127.0.0.1:8000/img/icons/info.png">
        </span>
      </div>
      <!--欢迎-->
      <div>
        <p>Hi~欢迎光临喵小社</p>
        <p>愿每一个旅行愿望得以达成</p>
      </div>
      <!--登录注册-->
      <div class="logAndReg">
        <router-link to="/login">登录/注册</router-link>
      </div>
    </div>
    <!--已登录页面-->
    <div class="header header2" :class="{loginStatus:login}">
      <!--设置和消息-->
      <div>
        <span @click="handleSetting">
          <img src="http://127.0.0.1:8000/img/icons/setting.png">
        </span>
        <span>
          <img src="http://127.0.0.1:8000/img/icons/info.png">
        </span>
      </div>
      <!--个人信息-->
      <div class="userInfo">
        <div>
          <img :src="avatar">
        </div>
        <div>
          <span>{{uname}}</span>
          <span>
            <img src="http://127.0.0.1:8000/img/icons/edit.png">
          </span>
        </div>
        <div>
          <span>个人主页</span>
          <span>
            <img src="http://127.0.0.1:8000/img/icons/next.png">
          </span>
        </div>
      </div>
    </div>
    <!--收藏|订单|历史记录-->
    <div class="content">
      <div>
        <img src="http://127.0.0.1:8000/img/icons/collection.png">
        <p>我的收藏</p>
      </div>
      <div>
        <img src="http://127.0.0.1:8000/img/icons/order.png">
        <p>我的订单</p>
      </div>
      <div>
        <img src="http://127.0.0.1:8000/img/icons/history.png">
        <p>历史记录</p>
      </div>
    </div>
    <!--我的旅行-->
    <div class="my_trip">
      <p>我的旅行</p>
      <div>
        <img src="http://127.0.0.1:8000/img/icons/camera.png">
        <span>记录你的旅行</span>
      </div>
      <div>去看看有趣的世界吧~</div>
    </div>
    <!--更多服务-->
    <div class="services">
      <p>更多服务</p>
      <div>
        <div>
          <img src="http://127.0.0.1:8000/img/icons/wallet.png">
          <span>我的钱包</span>
        </div>
        <div>
          <img src="http://127.0.0.1:8000/img/icons/coupon.png">
          <span>优惠券</span>
        </div>
        <div>
          <img src="http://127.0.0.1:8000/img/icons/activity.png">
          <span>我的活动</span>
        </div>
        <div>
          <img src="http://127.0.0.1:8000/img/icons/team.png">
          <span>我的小组</span>
        </div>
        <div>
          <img src="http://127.0.0.1:8000/img/icons/vip.png">
          <span>我的会员</span>
        </div>
        <div>
          <img src="http://127.0.0.1:8000/img/icons/share.png">
          <span>转发有礼</span>
        </div>
        <div>
          <img src="http://127.0.0.1:8000/img/icons/tripItems.png">
          <span>旅行装备</span>
        </div>
        <div>
          <img src="http://127.0.0.1:8000/img/icons/more.png">
          <span>其它更多</span>
        </div>
      </div>
    </div>
    <bottom-box :isSelected="3"></bottom-box>
  </div>
</template>

<script>
  import bottom from "../sub/bottom.vue"
  export default{
    data(){
      return{
        disLogin:false,
        login:true,
        avatar:"",
        uname:""
      }
    },
    methods:{
      isLogin(){
        var url="http://127.0.0.1:8000/user/islogin";
        this.$http.get(url).then((result)=>{
          if(result.body.ok==1){
            console.log(result.body);
            this.disLogin=true;
            this.login=false;
            this.avatar=result.body.avatar;
            this.uname=result.body.uname;
          }else{
            this.disLogin=false;
            this.login=true;
          }
        })
      },
      handleSetting(){
        this.$router.push('/user/setting');
      }
    },

    created(){
      this.isLogin();
    },

    components:{
      "bottom-box":bottom
    }
  }
</script>

<style>
  .loginStatus{display:none;}
  .app-user-container{
    background-color:#f3f8fb;position:relative;
  }
  .app-user-container .header{
    width:100%;height:215px;
    background:url("http://127.0.0.1:8000/img/background/user_bg.jpeg") no-repeat;
    background-size:100% 100%;
  }
  .header>div:first-child{display:flex;justify-content:space-between;width:90%;margin-left:5%;padding-top:10px;}
  .header>div:first-child span{
    display:block;width:7%;
  }
  .header>div:first-child span img{width:100%;}
  .header>div:nth-child(2){margin-top:20px;padding-left:20px;}
  .header>div:nth-child(2)>p:first-child{font-size:20px;color:black;font-weight:bold;}
  .logAndReg{background:black;width:130px;height:40px;margin-left:40px;margin-top:20px;border-radius:30px;text-align:center;vertical-align:middle;}
  .logAndReg a{color:#f3d739;line-height:40px;}
  .header2 div.userInfo{display:flex;width:95%;height:80px;margin:20px auto;padding:0;}
  .header2 div.userInfo>div:first-child{width:20%;}
  .header2 div.userInfo>div:first-child img{width:100%;border-radius:50%;}
  .header2 div.userInfo>div:nth-child(2){width:55%;margin-left:5px;display:flex;justify-content:space-between;}
  .header2 div.userInfo>div:nth-child(2) span,.header2 div.userInfo>div:last-child span{display:inline-block;}
  .header2 div.userInfo>div:nth-child(2)>span:first-child{margin-top:5px;font-size:40px;font-weight:bold;width:90%;}
  .header2 div.userInfo>div:nth-child(2)>span:last-child{width:10%;}
  .header2 div.userInfo>div:nth-child(2)>span:last-child img{width:100%;}
  .header2 div.userInfo>div:last-child{width:22%;margin-top:10px;margin-left:5px;display:flex;}
  .header2 div.userInfo>div:last-child>span:first-child{width:68%;font-size:14px;margin-top:2px;}
  .header2 div.userInfo>div:last-child>span:last-child{width:30%;}
  .header2 div.userInfo>div:last-child>span:last-child img{width:100%;}
  .content,.my_trip,.services{
    width:90%;
    background-color:white;
    margin:10px auto;
    border-radius:10px;
  }
  .content{
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding-left:20px;
    padding-right:20px;
    height:100px;
  }
  .content div{text-align:center;}
  .content div img{
    width:60%;
  }
  .content div p{margin-bottom:0;margin-top:3px;color:black;}
  .my_trip{
    height:140px;
  }
  .my_trip>p:first-child,.services>p:first-child{padding-top:5px;padding-left:5px;color:black;font-size:16px;font-weight:bold;}
  .my_trip>div:nth-child(2){width:50%;height:50px;margin:20px auto;border-radius:25px;background-color:#fcee7a;text-align:center;vertical-align:middle;}
  .my_trip>div:nth-child(2) img{width:20%;vertical-align:middle;}
  .my_trip>div:nth-child(2) span{height:100%;vertical-align:middle;display:inline-block;line-height:50px;}
  .my_trip>div:last-child{margin-top:-16px;text-align:center;font-size:13px;color:#7b9cd0;}
  .services{height:180px;}
  .services>div:last-child{
    width:100%;
    display:flex;justify-content:space-between;
    flex-wrap:wrap;
  }
  .services>div:last-child div{width:25%;text-align:center;padding-top:20px;}
  .services>div:last-child div img{width:30%;}
  .services>div:last-child div span{display:block;font-size:12px;}
</style>
