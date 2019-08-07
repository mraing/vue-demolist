import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import HandleLight from '@/page/childer1/HandleLight'
import HandleList from '@/page/childer2/HandleList'
import HandleIncident from '@/page/childer3/HandleIncident'

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
      }, {
        path: '/handleList',
        name: 'HandleList',
        component: HandleList
      }, {
        path: '/handleIncident',
        name: 'HandleIncident',
        component: HandleIncident
      }]
    }
  ]
})
