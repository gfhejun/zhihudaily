<template>
  <div>
    <scroller ref="dailyList">
      <div>
        <group>
          <cell title="title1" value="value1"></cell>
          <cell title="title2" value="value2"></cell>
          <cell title="title3" value="value3"></cell>
          <cell title="title4" value="value4"></cell>
          <cell title="title5" value="value5"></cell>
          <cell title="title6" value="value6"></cell>
          <cell title="title7" value="value7"></cell>
          <cell title="title8" value="value8"></cell>
          <cell title="title9" value="value9"></cell>
          <cell title="title10" value="value10"></cell>
        </group>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Group, Cell, Scroller } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Scroller
  },
  data () {
    return {
      
    }
  },
  created(){

  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>