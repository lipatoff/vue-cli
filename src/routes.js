//default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Pages
import Home from '@/pages/Home'

//Routering
export default new Router({
	//mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '*',
			name: 'notFound',
			component: function () {
		        return import('@/pages/404')
			}
		},
		{
			path: '/example',
			name: 'example',
			component: function () {
		        return import('@/pages/Example')
			}
		},

	]
})