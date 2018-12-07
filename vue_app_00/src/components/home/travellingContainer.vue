<template>
  <div class="travelling-container">
    <div v-for="item in totalList">
      <!--用户名一栏-->
      <div class="user">
        <div><img :src="item.avatar"></div>
        <div>{{item.uname}}</div>
      </div>

      <div>
        <!--1张图-->
        <div class="pics pics1">
          <img :src="item.pic">
          <p>1图</p>
        </div>
        <!--2张图
        <div class="pics pics2">
          <div><img :src="imgItem.pic"></div>
          <div><img :src="imgItem.pic"></div>
          <p>2图</p>
        </div>
-->
        <!--3张图
        <div class="pics pics3">
          <div><img src="http://127.0.0.1:8000/img/shares/8.jpeg"></div>
          <div>
            <img src="http://127.0.0.1:8000/img/shares/9.jpeg">
            <img src="http://127.0.0.1:8000/img/shares/10.jpeg">
          </div>
          <p>3图</p>
        </div>
-->
        <!--4图
        <div class="pics pics4">
          <div>
            <img src="http://127.0.0.1:8000/img/shares/13.jpeg">
          </div>
          <div>
            <div>
              <img src="http://127.0.0.1:8000/img/shares/14.jpeg">
            </div>
            <div>
              <img src="http://127.0.0.1:8000/img/shares/15.jpeg">
            </div>
            <div>
              <img src="http://127.0.0.1:8000/img/shares/16.jpeg">
            </div>
          </div>
          <p>4图</p>
        </div>
        -->
        <!--5图
        <div class="pics pics5">
          <div>
            <div><img src="http://127.0.0.1:8000/img/shares/18.jpeg"></div>
            <div><img src="http://127.0.0.1:8000/img/shares/19.jpeg"></div>
          </div>
          <div>
            <div><img src="http://127.0.0.1:8000/img/shares/20.jpeg"></div>
            <div><img src="http://127.0.0.1:8000/img/shares/21.jpeg"></div>
            <div><img src="http://127.0.0.1:8000/img/shares/22.jpeg"></div>
          </div>
          <p>5图</p>
        </div>
        -->
      </div>
      <!--描述-->
      <div class="description">{{item.description}}</div>
      <!--赞+评论
      <div class="likesAndComments">
        <div>
          <div>
            <img src="http://127.0.0.1:8000/img/icons/like.png">
            <img src="http://127.0.0.1:8000/img/icons/liked.png" style="display:none">
          </div>
          <div>
            <span>88</span>
          </div>
        </div>
        <div>
          <div>
            <img src="http://127.0.0.1:8000/img/icons/comment.png">
          </div>
          <div>
            <span>10</span>
          </div>
        </div>
      </div>
      -->
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        postList:[],
        userList:[],
        imgList:[],
        totalList:[]
      }
    },
    methods:{
      started(){
        var obj={};
        const userPost = new Promise((resolve,reject)=>{
          var url1 = "http://127.0.0.1:8000/userpost";
          var url2 = "http://127.0.0.1:8000/user";
          var url3 = "http://127.0.0.1:8000/userpost/notespics";
          this.$http.get(url1).then((result)=>{
            this.postList=this.postList.concat(result.body);
            obj['postList']=this.postList;
          });
          this.$http.get(url2).then((result)=>{
            this.userList=this.userList.concat(result.body);
            obj['userList']=this.userList;
          });
          this.$http.get(url3).then((result)=>{
            this.imgList=this.imgList.concat(result.body);
            obj['imgList']=this.imgList;
          });
          resolve(obj);
        });
        return userPost;
      }
    },

    created(){
      this.started().then((obj)=>{
        console.log('后：'+obj['postList']);
      });
    }
  }
</script>

<style>
  .divide{height:10px;background-color:gray;}
  .show{display:block;}  .unshow{display:none;}
  .travelling-container{width:94%;margin-left:3%;margin-top:1%;}
  .user{display:flex;width:50%;}
  .user>div:first-child{width:25%;}
  .user>div:first-child img{width:100%;border-radius:50%;}
  .user>div:last-child{margin-left:5%;}

  .pics{width:100%;margin-top:1%;position:relative;z-index:-1;border:1px solid transparent;border-radius:5px;}
  .pics>p:last-child{position:absolute;right:5%;bottom:2%;color:white;}
  .pics1 img{width:100%;border-radius:5px;}

  .pics2{display:flex;justify-content:space-between;height:175px;overflow:hidden;}
  .pics2>div:first-child{margin-right:1%;width:69%;} .pics2>div:first-child img{border-radius:5px 0 0 5px;}
  .pics2>div:nth-child(2){width:30%;} .pics2>div:nth-child(2) img{border-radius:0 5px 5px 0;}
  .pics2 div img{width:100%;}

  .pics3{display:flex;justify-content:space-between;height:175px;overflow:hidden;}
  .pics3>div:first-child{margin-right:1%;width:69%;} .pics3>div:first-child img{border-radius:5px 0 0 5px;}
  .pics3>div:nth-child(2){width:30%;display:flex;flex-flow:column;justify-content:space-between;}
  .pics3>div:nth-child(2) img{height:49%;}
  .pics3>div:nth-child(2)>img:first-child{border-radius:0 5px 0 0;} .pics3>div:nth-child(2)>img:last-child{border-radius:0 0 5px 0;}
  .pics3 div img{width:100%;}

  .pics4>div:first-child{height:175px;width:100%;overflow:hidden;}
  .pics4>div:nth-child(2){width:100%;margin-top:1%;display:flex;justify-content:space-between;}
  .pics4>div:nth-child(2) div{width:32.6%;}
  .pics4>div:first-child img{border-radius:5px 5px 0 0;}
  .pics4>div:nth-child(2)>div:first-child img{border-radius:0 0 0 5px;}
  .pics4>div:nth-child(2)>div:last-child img{border-radius:0 0 5px 0;}
  .pics4 div img{width:100%;}

  .pics5>div:first-child{height:175px;width:100%;overflow:hidden;display:flex;}
  .pics5>div:first-child>div:first-child{margin-right:1%;width:69%;}
  .pics5>div:first-child>div:last-child{width:30%;}
  .pics5>div:nth-child(2){display:flex;justify-content:space-between;margin-top:1%;height:87px;overflow:hidden;}
  .pics5>div:nth-child(2) div{width:32.6%;}
  .pics5 div img{width:100%;}

  .description{margin-top:1%;font-size:15px;}

  .likesAndComments{width:50%;margin-left:50%;display:flex;padding-left:10%;}
  .likesAndComments>div{width:50%;display:flex;}
  .likesAndComments>div>div{width:50%;}
  .likesAndComments>div>div:first-child img{width:55%;margin-left:50%;}
  .likesAndComments>div>div:last-child span{font-size:14px;padding-left:10%;}
</style>
