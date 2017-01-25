import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const moduleNewsList = {
	state: {
		newsList: [],
		date: 0
	},
	mutations: {
		updateNewsList(state, params) {
			if (params.isReload) {
				state.newsList = [];
			}
			state.newsList.push(params.list);
		}
	},
	actions: {
		loadLatestNews({
			commit
		}, type) {
			if (type == "init") {
				commit('loadingBegin');
			} else {
				commit('pullDownBegin');
			}

			Vue.http.get("http://lovestreet.leanapp.cn/zhihu/news/latest")
				.then(function(response) {
					console.log(response);
					if (response.ok) {
						commit('updateNewsList', {
							list: response.body,
							isReload: true
						});

						if (type == "init") {
							commit('loadingDone');
						} else {
							commit('pullDownDone');
						}
					}
				})
		},
		loadMore({
			commit,
			state
		}) {
			commit('pullUpBegin');
			if (state.date == 0) {
				var date = new Date();
				state.date = date.getTime();
			}

			state.date = state.date - 1000 * 3600 * 24;
			var queryDate = new Date(state.date);
			console.log(queryDate);
			var month = queryDate.getMonth() + 1;
			var day = queryDate.getDate() + 1;
			if (month < 10) {
				month = '0' + month;
			}
			if (day < 10) {
				day = '0' + day;
			}

			var queryStr = '' + queryDate.getFullYear() + month + day;
			var url = "http://lovestreet.leanapp.cn/zhihu/before/" + queryStr;
			console.log('url:' + url);
			Vue.http.get(url)
				.then(function(response) {
					console.log(response);
					if (response.ok) {
						commit('updateNewsList', {
							list: response.body,
							isReload: false
						});
					}

					commit('pullUpDone');
				})
		}
	},
	getters: {

	}
}

export default moduleNewsList