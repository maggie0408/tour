<template>
    <div class="app-homeContainer">1
        <!--轮播图-->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">                
					<swiper-box :list="this.imageList"></swiper-box>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
    //引入轮播图子组件
    import swiper from "../sub/swiper.vue"
    import {Toast} from "mint-ui"
    //引入mui.js,会有严格模式的限制，慎用！
    //import mui from "../../lib/mui/js/mui.js"
    export default{
        data(){
            return {
                imageList:[],
                val:1,
                id:this.$route.params.id,
                info:{}
            }
        },        
        methods:{
            getImages(){
                this.$http.get("imagelist").then(result=>{
                    this.imageList=result.body;                   
                })
            },
        },
        components:{//给子组件swiper注册
            "swiper-box":swiper
        },
        created(){
            this.getImages();
        }
    }
</script>

<style>
    
</style>