import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/One'
import Details from '../components/details'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'One',
      component: One,
    },{
      path: '/details/:data',
      name: 'Details',
      component: Details
    }
  ]
})
