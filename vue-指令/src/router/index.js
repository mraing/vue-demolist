import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Vue01 from '@/components/childer/vue-01'
import Vue02 from '@/components/childer/vue-02'
import Vue03 from '@/components/childer/vue-03'
import Vue04 from '@/components/childer/vue-04'
import Vue05 from '@/components/childer/vue-05'
import Vue06 from '@/components/childer/vue-06'
import Vue07 from '@/components/childer/vue-07'
import Vue08 from '@/components/childer/vue-08'
import Vue09 from '@/components/childer/vue-09'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
			component: Index,
			redirect:'/index/vue-01',
			children:[
				{
					path: '/index/vue-01',
					component: Vue01,
				},
				{
					path: '/index/vue-02',
					component: Vue02,
				},
				{
					path: '/index/vue-03',
					component: Vue03,
				},
				{
					path: '/index/vue-04',
					component: Vue04,
				},
				{
					path: '/index/vue-05',
					component: Vue05,
				},
				{
					path: '/index/vue-06',
					component: Vue06,
				},
				{
					path: '/index/vue-07',
					component: Vue07,
				},
				{
					path: '/index/vue-08',
					component: Vue08,
				},
				{
					path: '/index/vue-09',
					component: Vue09,
				}
			]
    }
  ]
})
