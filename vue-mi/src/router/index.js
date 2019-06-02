import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Home from '../components/home/home'
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
			children: [
				{
					path: '/',
					component: Home
				},
				{
					path: '/Home',
					name: 'Home',
					component: Home
				},
				{
					path: '/category',
					name: 'Category',
					component: Category
				},
				{
					path: '/cart',
					name: 'cart',
					component: Cart
				},
				{
					path: '/user',
					name: 'user',
					component: User
				}
			]
		},
	]
})