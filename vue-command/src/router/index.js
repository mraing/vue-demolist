import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Vue01 from '@/components/childer/vue-01'
import Vue02 from '@/components/childer/vue-02'



Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
			children:[
				{
					path: '/',
					component: Vue01,
				},
				{
					path: '/index/vue-01',
					component: Vue01,
				},
				{
					path: '/index/vue-02',
					component: Vue02,
				}
			]
    }
  ]
})
