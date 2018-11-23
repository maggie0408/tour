<template>
 <div class="app-container">
    <!--中间不同的容器-->
    <router-view></router-view>
    <!--底部导航条-->
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<router-link to="/home/login" class="mui-tab-item">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">酒店</span>
			</router-link>
			<router-link to="/shop" class="mui-tab-item" href="#">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                <span class="mui-badge">3</span></span></span>
				<span class="mui-tab-label">旅行商城</span>
			</router-link>
			<a class="mui-tab-item" href="#">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">我的</span>
			</a>
		</nav>
 </div>
</template>

<style>
   .app-container{
     padding-bottom:50px;
     overflow-x:hidden;
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
