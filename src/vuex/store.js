import Vue from 'vue'
import Vuex from 'vuex'
import moduleCommon from './module_common'
import moduleNewsList from './module_news_list'
import moduleNewsDetail from './module_news_detail'

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		common: moduleCommon,
		newsList: moduleNewsList,
		newsDetail: moduleNewsDetail
	}
})

export default store;