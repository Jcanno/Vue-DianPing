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
      <van-tab 
        v-for="item in tabs" 
        :key="item.name" 
        :title="item.name" 
        class="masonry" 
      >
        <van-list          
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="reload"
          :offset=10
        >
          <div class="item" v-for="i in comments" :key="i.id" @click="onGoToTab(i.id)"> 
            <div class="item_content content-lar"> 
              <img :src="i.firstPic" alt="">
              <div class="desc">
                <p class="title">{{i.title}}</p>
                <div class="info">
                  <img class="avatar" :src="i.user.avatar" alt="">
                  <span class="username">{{i.user.nickname}}</span>
                  <div class="good" @click.stop="onThumbUp(i.id)">
                    <van-icon 
                      v-if="i.isThumbUp" 
                      name="like" 
                      size="10px"
                      color="#FF6739" 
                      style="display:inline-block"
                    />
                    <van-icon
                      v-if="!i.isThumbUp"
                      name="like-o" 
                      size="10px"
                      color="#000000" 
                      style="display:inline-block"                      
                    />
                    <span class="count">{{i.thumbsCount}}</span> 
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import {  postThumbsUp, deleteThumbsUp } from '@/api/thumbsUp'
import { Tab, Tabs, Icon, List } from 'vant';
import Vue from 'vue'
Vue.use(Tab).use(Tabs).use(Icon).use(List);
import * as types from '@/store/types'

export default {
  name: 'tabs',

  components:{},

  data () {
    return {
      active: 0,
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
      ],
      loading: false,
      page: {
        limit: 1,
        offset: 0
      },
      comments: [],
      finished: false,
    }
  },

  methods: {
    // 点赞
    onThumbUp(commentId){
      if(this.$store.getters.guserid){
        let comment = this.comments.find(item => item.id == commentId);
        if(comment.isThumbUp){
          deleteThumbsUp({commentId, userid: this.$store.getters.guserid}).then(() => {
            comment.isThumbUp = !comment.isThumbUp;
            comment.thumbsCount -= 1;
          });
        }else{
          postThumbsUp({commentId, userid: this.$store.getters.guserid}).then(() => {
            comment.isThumbUp = !comment.isThumbUp;
            comment.thumbsCount += 1;
          })
        }
      }else{
        this.$router.push('/loginPage');
      }
      
    },
    // 通过截取字符串获取pic里的第一张照片作为封面
    getFirstPic(obj){
      let pics = obj.pics;
      let index = pics.indexOf(',');
      if(index == -1){
        obj.firstPic = obj.pics;
      }else{
        obj.firstPic = obj.pics.substring(0, index);
      }
    },
    // 重载
    reload(){
      this.page.offset += 1;
      this.load();
    },
    // 跳转到详情页
    onGoToTab(commentId){
      this.$router.push({ name: 'tabDetail', params: { commentId }})
    },
    // 加载
    load(){
      let query = `?limit=${this.page.limit}&offset=${this.page.offset}`;
      this.$store.dispatch(types.AComments, query).then(res => {
        for(let i = 0; i<res.length;i++){
          this.getFirstPic(res[i])
          this.comments.push(res[i]);
        }
        this.loading = false;
      }).catch(() => {
        this.finished = true;
        this.loading = false;
      });
    }
  },

  computed: {
  },

  created(){
    this.load();
  },

  mounted(){
    
  }
}
</script>

