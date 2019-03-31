<style lang='less' scoped>
@import "./Swiper.less";
</style>

<template>
  <div>
    <van-swipe 
      indicator-color="#FF6739"
      :height=200>
      <van-swipe-item class="icon-container">
        <div v-for="item in swiper" class="icon" @click="handleClick" :key="item.img">
          <img :src="item.img"  alt="">
          <span>{{item.title}}</span>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div v-for="item in swiper" class="icon" @click="handleClick" :key="item.img">
          <img :src="item.img"  alt="">
          <span>{{item.title}}</span>
        </div>
      </van-swipe-item>
    </van-swipe>
    
  </div>
</template>

<script>
// import * as types from '@/store/types';
import { Swipe, SwipeItem, Icon } from 'vant';
import Vue from 'vue'
import food from '@/assets/swiper/food.png'
import wedding from '@/assets/swiper/wedding.png'
import eat from '@/assets/swiper/eat.png'
import fun from '@/assets/swiper/fun.png'
import hair from '@/assets/swiper/hair.png'
import hotel from '@/assets/swiper/hotel.png'
import travel from '@/assets/swiper/travel.png'
import shop from '@/assets/swiper/shop.png'
import movie from '@/assets/swiper/movie.png'
import life from '@/assets/swiper/life.png'

Vue.use(Swipe).use(SwipeItem).use(Icon);
export default {
  name: 'swiper',

  components:{},

  data () {
    return {
      swiper: [
        { img: food, title: '美食'},
        { img: movie, title: '电影'},
        { img: hotel, title: '酒店'},
        { img: fun, title: '休闲娱乐'},
        { img: eat, title: '外卖'},
        { img: wedding, title: '结婚'},
        { img: hair, title: '美发'},
        { img: travel, title: '景点'},
        { img: life, title: '生活服务'},
        { img: shop, title: '购物'},
      ]

      
    }
  },

  methods: {
    handleClick(){
    }
  },

  computed: {},

  mounted(){
    
  }
}
</script>

