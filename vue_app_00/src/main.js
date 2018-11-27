//加载根组件
import Vue from 'vue'
import App from './App.vue'
import router from './router'


import'mint-ui/lib/style.css'

Vue.config.productionTip = false

//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";

//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;

// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标,还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
//滑动屏幕
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {

  threshold: 100 //手指左右滑动距离

}
/*
//一、引入组件mintui库的Header
//step1：引入指定的组件
import {Header,Swipe,SwipeItem,Button,Lazyload} from "mint-ui";
//step2：注册（vue.component)到当前项目中<mt-header>
Vue.component(Header.name,Header);//左边是标签名，右边是对象
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);
Vue.use(Lazyload);//该注册方法不是vue.component，需要注意
*/
//完整引入，代替上述方式
import MintUI from "mint-ui"
Vue.use(MintUI);

//二、引入vue-resource发送ajax
//先引入vue-resource库所有的组件
import VueResource from "vue-resource";
//再注册所有vue-resource库的组件
Vue.use(VueResource);

//三、创建过滤器（日期格式）
//1、先创建过滤器，返回日期格式的对象
Vue.filter("datetimeFilter",function(val){//val是参数，给{{日期字符串 | 过滤器}} 调用，val给左侧日期字符串调用
  var date=new Date(val);
  var y=date.getFullYear(), 
      m=date.getMonth()+1, 
      d=date.getDate(), 
      h=date.getHours(), 
      min=date.getMinutes(), 
      s=date.getSeconds();
  m < 10 && (m = "0" + m);
  d < 10 && (d = "0" + d);
  return `${y}-${m}-${d} ${h}:${min}:${s}`;
})
//统一配置服务器根目录
Vue.http.options.root="http://127.0.0.1:8000/";
//修改请求头（改成post格式）
//Vue.http.options.emulateJSON=true;

//四、创建Vuex实例对象
//1、下载安装Vuex npm i vuex -D（已下载好）
//2、引入Vuex
import Vuex from "vuex"
//3、注册Vuex实例
Vue.use(Vuex)
//4、创建Vuex实例对象


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
