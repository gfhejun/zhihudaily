import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const moduleNewsDetail = {
	state: {
		id: '',
		detail: {}
	},
	mutations: {
		updateNewsDetailId: function(state, id) {
			state.id = id;
		},
		updateNewsDetail: function(state, detail) {
			state.detail = detail;
		}
	},
	actions: {
		getNewsDetail({
			commit,
			state
		}, id) {
			Vue.http.get("http://lovestreet.leanapp.cn/zhihu/news/" + id)
				.then(function(response) {
					console.log(response);
					if (response.ok) {
						commit('updateNewsDetail', response.body);
					}
				})
		}
	},
	getters: {}
}

export default moduleNewsDetail