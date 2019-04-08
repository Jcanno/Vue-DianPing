<style lang='less' scoped>
@import './Setting.less';
</style>

<template>
  <div>
    <van-popup v-model="show">
      <van-icon 
        name="cross"
        size="20px"
        @click="closePop"
        class="close"
      />
      <van-cell-group class="group">
        <van-cell title="头像"  >
          <van-uploader
            :after-read="onRead"
          >
            <Avatar
              :size=50 
              class="avatar"
              :image="user.avatar"
            />
          </van-uploader>
        </van-cell>
        <van-cell title="单元格" value="内容" label="描述信息" />
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
import * as types from '@/store/types';
import { uploadSingle } from '@/api/upload'
import { userInfo } from '@/api/user'
import Avatar from '_c/UserInfo/Avatar'
import { Cell, CellGroup, Popup, Uploader, Toast } from 'vant';
import Vue from 'vue';
Vue.use(Cell).use(CellGroup).use(Popup).use(Uploader).use(Toast);
export default {
  name: 'setting',

  components:{
    Avatar
  },

  data () {
    return {
      show: false
    }
  },

  methods: {
    onRead(file){
      let id = this.$store.state.user.user.userid;
      let data = new FormData();
      data.append('file', file.file);
      uploadSingle(data).then(res => {        
        let data = {
          id,
          avatar: res.data.url
        }
        userInfo(data).then(() => {
          Toast('更新成功!');
          this.$store.dispatch(types.AUserInfo, id)
        })
      })
    },
    closePop(){
      this.$router.go(-1)
    },
  },

  computed: {
    user(){
      return this.$store.state.user.user;
    }
  },

  mounted(){
    this.show = true;
  }
}
</script>

