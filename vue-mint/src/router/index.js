import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Switch from '@/components/mint-ui-switch'
import Radio from '@/components/mint-ui-radio'
import Checklist from '@/components/mint-ui-checklist'
import Tabbar from '@/components/mint-ui-tabbar'
import Navbar from '@/components/mint-ui-navbar'
import TabContainer from '@/components/mint-ui-tab-containe'
import Header from '@/components/mint-ui-header'
import Search from '@/components/mint-ui-search'
import Cell from '@/components/mint-ui-cell'
import CellSwipe from '@/components/mint-ui-cellSwipe'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/switch',
      children:[{
        path:'/switch',
        component:Switch
      },{
        path:'/radio',
        component:Radio
      },{
        path:'/checklist',
        component:Checklist
      },{
        path:'/tabbar',
        component:Tabbar
      },{
        path:'/navbar',
        component:Navbar
      },{
        path:'/tabContainer',
        component:TabContainer
      },{
        path:'/header',
        component:Header
      },{
        path:'/search',
        component:Search
      },{
        path:'/cell',
        component:Cell
      },{
        path:'/cellSwipe',
        component:CellSwipe
      }]
    }
  ]
})
