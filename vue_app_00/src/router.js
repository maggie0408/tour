import Vue from 'vue'
import Router from 'vue-router'
import testContainer from './components/testContainer'

Vue.use(Router);

//组件访问的路径和名称
export default new Router({  
    routes:[
        {path:'/',redirect:'/home'},//http://127.0.0.1:8080/#/
        {path:'/test',component:testContainer}
    ]
})