import Vue from 'vue'
import Router from 'vue-router'
import homeContainer from './components/home/homeContainer'
import travellingContainer from './components/home/travellingContainer'
import recommendContainer from './components/home/recommendContainer'
import careContainer from './components/home/careContainer'
import holyContainer from './components/home/holyContainer'
import nearbyContainer from './components/home/nearbyContainer'
import domesticContainer from './components/home/domesticContainer'
import overseasContainer from './components/home/overseasContainer'
import babygoContainer from './components/home/babygoContainer'
import islandContainer from './components/home/islandContainer'
import coupleContainer from './components/home/coupleContainer'
import selfDrivingContainer from './components/home/selfDrivingContainer'
import userContainer from './components/user/userContainer'
import loginContainer from './components/user/loginContainer'
import settingContainer from "./components/user/settingContainer";
import signupContainer from "./components/user/signupContainer";

Vue.use(Router);

//组件访问的路径和名称
export default new Router({
  routes:[
    {path:'*',redirect:'/home'},
    {path:'/',redirect:'/home'},//http://127.0.0.1:8080/#/
    {path:'/home',component:homeContainer,redirect:'/home/travelling',children:[
        {path:'/home/care',component:careContainer},
        {path:'/home/travelling',component:travellingContainer},
        {path:'/home/recommend',component:recommendContainer},
        {path:'/home/holy',component:holyContainer},
        {path:'/home/nearby',component:nearbyContainer},
        {path:'/home/domestic',component:domesticContainer},
        {path:'/home/overseas',component:overseasContainer},
        {path:'/home/babygo',component:babygoContainer},
        {path:'/home/island',component:islandContainer},
        {path:'/home/couple',component:coupleContainer},
        {path:'/home/selfdriving',component:selfDrivingContainer}
      ]
    },
    {path:'/user',component:userContainer,children:[
        {path:'/user/setting',component:settingContainer}
      ]},
    {path:'/login',component:loginContainer},
    {path:'/signup',component:signupContainer}
  ]
})
