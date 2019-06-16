import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'

import Home from '../components/home/home'
import Recommend from '../components/home/childer/recommend'
import Activity from '../components/home/childer/activity'
import Phone from '../components/home/childer/phone'
import Intelligent from '../components/home/childer/intelligent'
import Television from '../components/home/childer/television'
import Notebook from '../components/home/childer/notebook'
import Appliance from '../components/home/childer/appliance'
import Lifearound from '../components/home/childer/lifearound'



import Category from '../components/category/category'
import Cart from '../components/Cart/Cart'
import User from '../components/User/User'

Vue.use(Router)


export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index,
			redirect: '/home',
			children: [
				{
					path: '/home',
					name: 'Home',
					component: Home,
					children: [{
						path: '/home/recommend',
						name: 'Recommend',
						component: Recommend
					}, {
						path: '/home/activity',
						name: 'Activity',
						component: Activity
					}, {
						path: '/home/phone',
						name: 'Phone',
						component: Phone
					}, {
						path: '/home/intelligent',
						name: 'Intelligent',
						component: Intelligent
					}, {
						path: '/home/television',
						name: 'Television',
						component: Television
					}, {
						path: '/home/notebook',
						name: 'Notebook',
						component: Notebook
					}, {
						path: '/home/appliance',
						name: 'Appliance',
						component: Appliance
					}, {
						path: '/home/lifearound',
						name: 'Lifearound',
						component: Lifearound
					}]
				},
				{
					path: '/category',
					name: 'Category',
					component: Category
				},
				{
					path: '/cart',
					name: 'Cart',
					component: Cart
				},
				{
					path: '/user',
					name: 'User',
					component: User
				}
			]
		},
	]
})