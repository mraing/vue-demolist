import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'


import Home from '../components/home/home'
import Category from '../components/category/category'
import Cart from '../components/cart/cart'
import User from '../components/user/user'

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