// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import App from './App'
import NewsList from './components/NewsList'
import NewsDetail from './components/NewsDetail'
import store from './vuex/store'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);

const routes = [{
	path: '/newslist',
	name: 'NewsList',
	component: NewsList
}, {
	path: '/newsdetail/:id',
	name: 'NewsDetail',
	component: NewsDetail
}, {
	path: '*',
	redirect: 'NewsList'
}]

const router = new VueRouter({
	routes
})

FastClick.attach(document.body)

//自定义过滤器
Vue.filter("formatTime", function(dateStr) {
	return dateStr[4] + dateStr[5] + "月" + dateStr[6] + dateStr[7] + "日";
})


/* eslint-disable no-new */
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')