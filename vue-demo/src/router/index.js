import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import HandleLight from '@/page/childer1/HandleLight'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/handleLight',
        name: 'HandleLight',
        component: HandleLight
      }]
    }
  ]
})
