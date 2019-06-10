import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Switch from '@/components/mint-ui-switch'
import Radio from '@/components/mint-ui-radio'
import Checklist from '@/components/mint-ui-checklist'
import Tabbar from '@/components/mint-ui-tabbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
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
      }]
    }
  ]
})
