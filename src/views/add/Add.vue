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
            <van-uploader :after-read="onRead" class="upload-button">
              <van-icon name="photograph" size="25px"/>
            </van-uploader>
          </van-col>
        </van-row>
      </div>
      

    </van-popup>
  </div>
</template>

<script>
import hashiqi1 from '@/assets/test/hashiqi1.jpg'
import hashiqi2 from '@/assets/test/hashiqi2.jpg'
import hashiqi3 from '@/assets/test/hashiqi3.jpg'
import hashiqi4 from '@/assets/test/hashiqi4.jpg'
import hashiqi5 from '@/assets/test/hashiqi5.jpg'
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
    images: {
      type: Array,
      default: () => [
        hashiqi1,
        hashiqi2,
        hashiqi3,
        hashiqi4,
        hashiqi5,
      ]
    }
  },

  data () {
    return {
      show: false,
      comment: ""
    }
  },

  methods: {
    handlePublish(){

    },
    onRead(){

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

