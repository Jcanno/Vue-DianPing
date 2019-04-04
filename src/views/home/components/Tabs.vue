<style lang='less' scoped>
@import "./Tabs.less";
</style>

<template>
  <div>
    <van-tabs 
      v-model="active" 
      swipeable
      sticky
      animated
      color="#FF6739"
      >
      <van-tab v-for="item in tabs" :key="item.name" :title="item.name" class="masonry" >
        <div class="item" @click="onTurnToTab" v-for="i in homeData" :key="i.key"> 
          <div class="item_content content-lar"> 
            <img :src="i.pic" alt="">
            <div class="desc">
              <p class="title">{{i.title}}</p>
              <div class="info">
                <img class="avatar" :src="i.avatar" alt="">
                <span class="username">{{i.username}}</span>
                <div class="good">
                  <van-icon name="like-o" size="10px" style="display:inline-block"/>
                  <span class="count">{{i.zans}}</span> 
                </div>
              </div>
            </div>
          </div> 
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs, Icon } from 'vant';
import Vue from 'vue'
Vue.use(Tab).use(Tabs).use(Icon);
import hashiqi1 from '@/assets/test/hashiqi1.jpg'
import hashiqi2 from '@/assets/test/hashiqi2.jpg'
import hashiqi3 from '@/assets/test/hashiqi3.jpg'
import hashiqi4 from '@/assets/test/hashiqi4.jpg'
import hashiqi5 from '@/assets/test/hashiqi5.jpg'
import bizhi3 from '@/assets/test/bizhi3.jpg'
import bizhi4 from '@/assets/test/bizhi4.jpg'
import bizhi5 from '@/assets/test/bizhi5.jpg'

export default {
  name: 'tabs',

  components:{},

  data () {
    return {
      homeData: [
        { pic: hashiqi1, title: "很有深夜食堂的感觉，图片里的很好吃哈哈哈哈哈哈哈哈哈哈哈哈哈", avatar:hashiqi1, username: "韩国婶婶啦啦啦啦啦韩国婶婶啦啦啦啦啦", zans: 15, key:1 },
        { pic: bizhi3, title: "私人聚会好地点--高档私家创意菜肴--梧田", avatar:hashiqi5, username: "叶璃156412", zans: 280 , key:2},
        { pic: hashiqi2, title: "很有深夜食堂的感觉，图片里的很好吃哈哈哈哈哈哈哈哈哈哈哈哈哈", avatar:hashiqi2, username: "韩国婶婶啦啦啦啦啦韩国婶婶啦啦啦啦啦", zans: 65, key:3 },
        { pic: bizhi5, title: "美食推荐：苏州必须打卡的网红农家乐", avatar:bizhi4, username: "叶璃156412", zans: 15, key:4 },
        { pic: hashiqi5, title: "很有深夜食堂的感觉，图片里的很好吃哈哈哈哈哈哈哈哈哈哈哈哈哈", avatar:hashiqi3, username: "韩国婶婶啦啦啦啦啦韩国婶婶啦啦啦啦啦", zans: 20, key:5 },
        { pic: bizhi4, title: "私人聚会好地点--高档私家创意菜肴--梧田", avatar:hashiqi1, username: "叶璃156412", zans: 15, key:6 },
        { pic: hashiqi4, title: "美食推荐：苏州必须打卡的网红农家乐", avatar:bizhi3, username: "韩国婶婶啦啦啦啦啦韩国婶婶啦啦啦啦啦", zans: 2, key:7 },
        { pic: bizhi3, title: "很有深夜食堂的感觉，图片里的很好吃哈哈哈哈哈哈哈哈哈哈哈哈哈", avatar:hashiqi5, username: "韩国婶婶啦啦啦啦啦韩国婶婶啦啦啦啦啦", zans: 84, key:8 },
        { pic: hashiqi2, title: "私人聚会好地点--高档私家创意菜肴--梧田", avatar:hashiqi5, username: "叶璃156412", zans: 800, key:9 },
        { pic: bizhi5, title: "很有深夜食堂的感觉，图片里的很好吃哈哈哈哈哈哈哈哈哈哈哈哈哈", avatar:hashiqi2, username: "韩国婶婶啦啦啦啦啦韩国婶婶啦啦啦啦啦", zans: 20, key:10 },

      ],
      active: 0,
      hashiqi1,
      hashiqi2,
      hashiqi3,
      hashiqi4,
      hashiqi5,
      bizhi3,
      bizhi4,
      bizhi5,
      tabs:[
        {name: "推荐"},
        {name: "附近"},
        {name: "视频"},
        {name: "美食"},
        {name: "旅行"},
        {name: "玩乐"},
        {name: "丽人"},
        {name: "电影"},
        {name: "结婚"},
      ]
    }
  },

  methods: {
    onTurnToTab(){
      this.$router.push('tabDetail')
    }
  },

  computed: {},

  mounted(){
    
  }
}
</script>

