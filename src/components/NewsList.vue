<template>
  <div id="scroller">
    <div class="spinner" v-if="loading">
      <spinner type="lines"></spinner>
    </div>
    <scroller 
      v-if="!loading"
      ref="dailyList" height="100%"
      @on-pulldown-loading="loadLatestNews" 
      :pulldown-config="pulldownConfig"
      @on-pullup-loading="loadMore" 
      :pullup-config="pullupConfig"
      lock-x use-pullup use-pulldown>
      <div>
        <div v-for="news in newsList">
          <div class="header">{{news.date | formatTime }}</div>
          <div v-for="story in news.stories" class="item" @click="loadDetail(story.id)">
            <div class="title">{{story.title}}</div>
            <div class="img">
              <img :src="story.images">
            </div>
          </div>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Group, Cell, Scroller, Spinner } from 'vux'
import { mapState } from 'vuex'

export default {
  components: {
    Group,
    Cell,
    Scroller,
    Spinner
  },
  data () {
    return {
      pulldownConfig:{
        content: '下拉刷新内容',
        height: 60,
        autoRefresh: false,
        downContent: '下拉刷新内容',
        upContent: '松开刷新',
        loadingContent: '内容加载中...'
      },
      pullupConfig:{
        content: '上拉加载更多',
        height: 60,
        autoRefresh: false,
        upContent: '上拉加载更多',
        downContent: '松开刷新',
        loadingContent: '内容加载中...'
      }
    }
  },
  created(){
    this.$store.dispatch('loadLatestNews',"init");
  },
  methods: {
    loadLatestNews: function () {
      this.$store.dispatch('loadLatestNews');
    },
    loadMore: function () {
      this.$store.dispatch('loadMore');
    },
    loadDetail: function (id) {
      this.$store.commit('updateNewsDetailId', id);
      this.$router.push({ path: '/newsdetail/' + id})
    }
  },
  computed: mapState({
    newsList: state => state.newsList.newsList,
    loading: state => state.common.loading,
    upDone: state => state.common.upDone,
    downDone: state => state.common.downDone
  }),
  watch: {
    loading: function (newValue) {
      if (!newValue){
        this.$nextTick(() => {
          this.$refs.dailyList.reset();
        });
      }
    },
    upDone: function (newValue) {
      this.$nextTick(() => {
          this.$refs.dailyList.donePullup();
          this.$refs.dailyList.reset();
      });
    },
    downDone: function (newValue) {
      this.$nextTick(() => {
          this.$refs.dailyList.donePulldown();
          this.$refs.dailyList.reset();
      });
    }
  }
}
</script>

<style scoped>
#scroller{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}

.spinner{
  text-align: center;
  margin-top: 100px;
}

.header{
  background-color:#469CE7;
  color: white;
  text-align: center;
  padding: 10px 0;
}

.title{
  display: inline-block;
  width: 60%;
  vertical-align: top;
  padding: 10px 0 0 10px;
}

.img{
  display: inline-block;
  width: 35%;
  text-align: right;
}

.img img{
  height: 70%;
  width: 70%;
  margin: 5px 5px 0 0;
}

.item{
  border-bottom: 1px solid lightgray;
}
</style>