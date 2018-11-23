<template>
<div class="app-subswipe">
    <mt-swipe :auto="4000">        <!--:key表示当前属性值，应该填唯一的-->
        <mt-swipe-item v-for="item in list" :key="item.id"><img :src="item.img_url"></mt-swipe-item>
    </mt-swipe>
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