<template>
  <div>
    <van-search
      v-model="value"
      placeholder="输入商户名、地名或菜名"
      shape="round"
      input-align="center"
      show-action
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
  </div>
</template>

<script>
import { Search } from 'vant';
import Vue from 'vue'
Vue.use(Search);
export default {
  name: 'search',

  components:{},

  data () {
    return {
      value: ""
    }
  },

  methods: {
    onSearch(){
      
    }
  },

  computed: {},

  mounted(){
   
  }
}
</script>

