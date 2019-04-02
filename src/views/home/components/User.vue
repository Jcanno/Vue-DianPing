<style lang='less' scoped>
@import "./User.less";
</style>

<template>
  <div>
    <UserInfo></UserInfo>
    <div class="comment">
      <p>
        大众点评网于2003年4月成立于上海。
        大众点评是中国领先的本地生活信息及交易平台，
        也是全球最早建立的独立第三方消费点评网站。
        大众点评不仅为用户提供商户信息、消费点评及消费优惠等信息服务，
        同时亦提供团购、餐厅预订、外卖及电子会员卡等O2O（Online To Offline）交易服务。
      </p>
      <p>
        2015年10月8日，大众点评网与美团网联合发布声明，宣布达成战略合作并成立新公司美团大众点评。
      </p>
      <p>
        2016年1月，美团-大众点评旗下APP“大众点评”荣登“2015腾讯应用宝星APP榜”，
        喜获“年度十大最受欢迎APP”。同时，“大众点评”也是唯一一款获评该奖的美食健康类APP。
      </p>
    </div>
    <Rate />
    <Comment></Comment>
  </div>
</template>

<script>
import hashiqi1 from '@/assets/test/hashiqi1.jpg'
import Comment from './Comment'
import Rate from '_c/Rate'
import UserInfo from '_c/UserInfo/UserInfo'
import { Button } from 'vant';
import Vue from 'vue'
Vue.use(Button);
export default {
  name: 'user',

  props:{
    avatar: {
      type: String,
      default: hashiqi1,
    },
    rate: {
      type: Number,
      default: 4
    }
  },

  components:{
    Comment,
    UserInfo,
    Rate
  },

  data () {
    return {
      hashiqi1
    }
  },

  methods: {},

  computed: {},

  mounted(){
    
  }
}
</script>

