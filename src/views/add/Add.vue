<style lang='less' scoped>
@import './Add.less';
</style>

<template>
  <div>
    <van-popup 
      v-model="show" 
      position="bottom" 
      :overlay="true"
    >
      <Nav 
        @onPublish="handlePublish"
      >
      </Nav>

      <van-field 
        v-model="title" 
        placeholder="输入标题..."
        class="title" 
      >
        <span slot="label" class="label">标题</span>
      </van-field>

      <van-field 
        v-model="comment" 
        placeholder="说说你此刻的感受吧..."
        class="comment" 
      />


      <div class="upload">
        <van-row guttar="10">
          <van-col span="6" v-for="item in images" :key="item" >
            <img :src="item" @click="onCheakPhoto(item)" alt="">
          </van-col>
          <van-col span="6">
            <van-uploader 
              :after-read="onRead" 
              class="upload-button"
              multiple
            >
              <van-icon name="photograph" size="30px"/>
            </van-uploader>
          </van-col>
        </van-row>
      </div>
      

    </van-popup>
  </div>
</template>

<script>
import { upload } from '@/api/upload'
import Nav from './components/Nav'
import { Popup, Field, Uploader, Row, Col, ImagePreview } from 'vant';
import Vue from 'vue';
Vue.use(Popup).use(Field).use(Uploader).use(Row).use(Col);
export default {
  name: 'add',

  components:{
    Nav
  },

  props:{
  },

  data () {
    return {
      show: false,
      comment: "",
      title: "",
      images: []
    }
  },

  methods: {
    handlePublish(){

    },
    onRead(file){
      let data = new FormData();
      if(Array.isArray(file)){
        for(let item of file){
          data.append('file', item.file);
        }
      }else{
        data.append('file', file);
      }
      
      upload(data).then(res => {
        this.images = [...this.images, ...res.data]
      })
      
    },
    onCheakPhoto(item){
      let current = this.images.indexOf(item)
      ImagePreview({
        images: this.images,
        startPosition: current,
      });
    },
  },

  computed: {},

  mounted(){
    this.show = true;
  }
}
</script>

