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

Vue.use(Router);

//组件访问的路径和名称
export default new Router({  
    routes:[
        {path:'*',redirect:'/home'},
        {path:'/',redirect:'/home'},//http://127.0.0.1:8080/#/
        {path:'/home',component:homeContainer,redirect:'/travelling',children:[
            {path:'/care',component:careContainer},
            {path:'/travelling',component:travellingContainer},
            {path:'/recommend',component:recommendContainer},
            {path:'/holy',component:holyContainer},
            {path:'/nearby',component:nearbyContainer},
            {path:'/domestic',component:domesticContainer},
            {path:'/overseas',component:overseasContainer},
            {path:'/babygo',component:babygoContainer},
            {path:'/island',component:islandContainer},
            {path:'/couple',component:coupleContainer},
            {path:'/selfdriving',component:selfDrivingContainer}
        ]}
    ]
})