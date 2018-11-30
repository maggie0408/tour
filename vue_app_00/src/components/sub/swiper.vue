<template>
  <div class="app-swipe-container">
    <div class="app-subswipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.id"><img :src="item.img_url"></mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
    export default{
        data(){
            return {}
        },
        props:["list"]//当子组件接收父组件数据的时候需要用到props 
    }
</script>

<style>
    .app-swipe-container{height:200px;}
    .app-subswipe .mint-swipe{
        height:125px;
    }
    .app-subswipe .mint-swipe img{
        width:100%;
    }
    .app-subswipe .mint-swipe-indicators{
        bottom:0;
    }
</style>
