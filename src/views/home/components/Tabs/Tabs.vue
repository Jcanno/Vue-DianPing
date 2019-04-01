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
      color="#FF6739">
      <van-tab v-for="item in tabs" :key="item.name" :title="item.name" class="masonry">
        <div class="item"> 
          <div class="item_content content-lar"> 
            <img :src="hashiqi1" alt="">
            <div class="desc">
              <p class="title">很有深夜食堂的感觉，图片里的很好吃哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
              <div class="info">
                <img class="avatar" :src="hashiqi1" alt="">
                <span class="username">韩国婶婶啦啦啦啦啦韩国婶婶啦啦啦啦啦</span>
                <div class="good">
                  <van-icon name="like-o" size="10px" style="display:inline-block"/>
                  <span class="count">900</span> 
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div class="item"> 
          <div class="item_content content-lar"> 
            <img :src="hashiqi2" alt="">
            <div class="desc">
              <p class="title">美食推荐：苏州必须打卡的网红农家乐</p>
              <div class="info">
                <img class="avatar" :src="hashiqi1" alt="">
                <span class="username">百万叔农家乐</span>
                <div class="good">
                  <van-icon name="like-o" size="10px" style="display:inline-block"/>
                  <span class="count">900</span> 
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div class="item"> 
          <div class="item_content content-lar"> 
            <img :src="hashiqi3" alt="">
            <div class="desc">
              <p class="title">私人聚会好地点--高档私家创意菜肴--梧田</p>
              <div class="info">
                <img class="avatar" :src="hashiqi1" alt="">
                <span class="username">叶璃156412</span>
                <div class="good">
                  <van-icon name="like-o" size="10px" style="display:inline-block"/>
                  <span class="count">900</span> 
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div class="item"> 
          <div class="item_content content-lar"> 
            <img :src="hashiqi4" alt="">
            <div class="desc">
              <p class="title">很有深夜食堂的感觉，图片里的很好吃哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
              <div class="info">
                <img class="avatar" :src="hashiqi1" alt="">
                <span class="username">韩国婶婶啦啦啦啦啦韩国婶婶啦啦啦啦啦</span>
                <div class="good">
                  <van-icon name="like-o" size="10px" style="display:inline-block"/>
                  <span class="count">900</span> 
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div class="item"> 
          <div class="item_content content-lar"> 
            <img :src="hashiqi5" alt="">
            <div class="desc">
              <p class="title">私人聚会好地点--高档私家创意菜肴--梧田</p>
              <div class="info">
                <img class="avatar" :src="hashiqi1" alt="">
                <span class="username">韩国婶婶啦啦啦啦啦韩国婶婶啦啦啦啦啦</span>
                <div class="good">
                  <van-icon name="like-o" size="10px" style="display:inline-block"/>
                  <span class="count">900</span> 
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div class="item"> 
          <div class="item_content content-lar"> 
            <img :src="hashiqi1" alt="">
            <div class="desc">
              <p class="title">很有深夜食堂的感觉，图片里的很好吃哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
              <div class="info">
                <img class="avatar" :src="hashiqi1" alt="">
                <span class="username">叶璃156412</span>
                <div class="good">
                  <van-icon name="like-o" size="10px" style="display:inline-block"/>
                  <span class="count">900</span> 
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div class="item"> 
          <div class="item_content content-lar"> 
            <img :src="hashiqi1" alt="">
            <div class="desc">
              <p class="title">很有深夜食堂的感觉，图片里的很好吃哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
              <div class="info">
                <img class="avatar" :src="hashiqi1" alt="">
                <span class="username">韩国婶婶啦啦啦啦啦韩国婶婶啦啦啦啦啦</span>
                <div class="good">
                  <van-icon name="like-o" size="10px" style="display:inline-block"/>
                  <span class="count">900</span> 
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div class="item"> 
          <div class="item_content content-lar"> 
            <img :src="hashiqi1" alt="">
            <div class="desc">
              <p class="title">私人聚会好地点--高档私家创意菜肴--梧田</p>
              <div class="info">
                <img class="avatar" :src="hashiqi1" alt="">
                <span class="username">叶璃156412</span>
                <div class="good">
                  <van-icon name="like-o" size="10px" style="display:inline-block"/>
                  <span class="count">900</span> 
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div class="item"> 
          <div class="item_content content-lar"> 
            <img :src="bizhi5" alt="">
            <div class="desc">
              <p class="title">私人聚会好地点--高档私家创意菜肴--梧田</p>
              <div class="info">
                <img class="avatar" :src="hashiqi1" alt="">
                <span class="username">叶璃156412</span>
                <div class="good">
                  <van-icon name="like-o" size="10px" style="display:inline-block"/>
                  <span class="count">900</span> 
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div class="item"> 
          <div class="item_content content-lar"> 
            <img :src="bizhi3" alt="">
            <div class="desc">
              <p class="title">很有深夜食堂的感觉，图片里的很好吃哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
              <div class="info">
                <img class="avatar" :src="hashiqi1" alt="">
                <span class="username">韩国婶婶啦啦啦啦啦韩国婶婶啦啦啦啦啦</span>
                <div class="good">
                  <van-icon name="like-o" size="10px" style="display:inline-block"/>
                  <span class="count">900</span> 
                </div>
              </div>
            </div>
          </div> 
        </div> 
        <div class="item"> 
            <div class="item_content content-lar"> 
              <img :src="bizhi4" alt="">
              <div class="desc">
                <p class="title">很有深夜食堂的感觉，图片里的很好吃哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
                <div class="info">
                  <img class="avatar" :src="hashiqi1" alt="">
                  <span class="username">韩国婶婶啦啦啦啦啦韩国婶婶啦啦啦啦啦</span>
                  <div class="good">
                    <van-icon name="like-o" size="10px" style="display:inline-block"/>
                    <span class="count">900</span> 
                  </div>
                </div>
              </div>
            </div> 
        </div> 
        <div class="item"> 
          <div class="item_content content-lar"> 
            <img :src="bizhi5" alt="">
            <div class="desc">
              <p class="title">很有深夜食堂的感觉，图片里的很好吃哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
              <div class="info">
                <img class="avatar" :src="hashiqi1" alt="">
                <span class="username">韩国婶婶啦啦啦啦啦韩国婶婶啦啦啦啦啦</span>
                <div class="good">
                  <van-icon name="like-o" size="10px" style="display:inline-block"/>
                  <span class="count">20</span> 
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

  methods: {},

  computed: {},

  mounted(){
    
  }
}
</script>

