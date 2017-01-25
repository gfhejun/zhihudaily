const moduleCommon = {
	state: {
		loading: false,
		upDone: true,
		downDone: true
	},
	mutations: {
		loadingBegin(state) {
			state.loading = true;
		},
		loadingDone(state) {
			state.loading = false;
		},
		pullDownBegin(state) {
			state.downDone = false;
		},
		pullDownDone(state) {
			state.downDone = true;
		},
		pullUpBegin(state) {
			state.upDone = false;
		},
		pullUpDone(state) {
			state.upDone = true;
		}
	},
	actions: {},
	getters: {}
}

export default moduleCommon