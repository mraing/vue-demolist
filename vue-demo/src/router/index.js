import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index.vue'
import Hi1 from '@/components/children/hi1.vue'
import Hi2 from '@/components/children/hi2.vue'
import Clicli from '@/components/clicli.vue'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Index',
		component: Index,
		children: [
			{
				path: '/',
				component: Hi2
			},
			{
				path: '/index/hi1',
				component: Hi1
			},
			{
				path: '/index/hi2',
				component: Hi2
			}
		]
	}, {
		path: '/clicli',
		name: 'Clicli',
		component: Clicli
	}, {
		path: '/hi1',
		name: 'Hi1',
		component: Hi1
	}]
})
