<style lang='less' scoped>
@import './Setting.less';
</style>

<template>
  <div>
    <van-popup v-model="show">
      <van-icon 
        name="cross"
        size="20px"
        @click="onGoBack"
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
        <van-cell title="昵称" >
          <van-field
            v-model="nickname"
            placeholder="请输入昵称"
          >
            <van-button 
              slot="button" 
              size="small" 
              type="primary"
              @click="onSave"
            >保存
            </van-button>
          </van-field>
        </van-cell>
        <van-cell >
          <van-button 
            slot="title" 
            size="small" 
            class="logout-button"
            @click="onLogout"
          >退出登录</van-button>
        </van-cell>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
import * as types from '@/store/types';
import { uploadSingle } from '@/api/upload'
import { patchUserInfo } from '@/api/user'
import Avatar from '_c/UserInfo/Avatar'
import Vue from 'vue';
import { 
  Cell, 
  CellGroup, 
  Popup, 
  Uploader, 
  Toast, 
  Field 
} from 'vant';
Vue.use(Cell)
   .use(CellGroup)
   .use(Popup)
   .use(Uploader)
   .use(Toast)
   .use(Field);
export default {
  name: 'setting',

  components:{
    Avatar
  },

  data () {
    return {
      show: false,
      nickname: ""
    }
  },

  methods: {
    // 退出登录
    onLogout(){
      this.$store.commit(types.MLoginState, false);
      this.$store.commit(types.MUserInfo, {});
      this.$router.go(-1);
    },
    // 保存昵称
    onSave(){
      if(this.nickname == ""){
        Toast('请输入昵称');
      }else{
        patchUserInfo({
          nickname: this.nickname,
          id: this.$store.getters.guserid
        }).then(() => {
          Toast('更新成功!');
          this.reload();  
        })
      }
    },
    // 读取文件
    onRead(file){
      let data = new FormData();
      data.append('file', file.file);
      uploadSingle(data).then(res => {        
        let data = {
          id: this.$store.getters.guserid,
          avatar: res.data.url
        }
        patchUserInfo(data).then(() => {
          Toast('更新成功!');
          this.reload();       
        })
      })
    },
    // 重载
    reload(){
      this.$store.dispatch(types.AUserInfo);
    },
    // 回退页面
    onGoBack(){
      this.$router.go(-1)
    },
  },

  computed: {
    user(){
      return this.$store.state.user.user;
    },
  },

  mounted(){
    this.show = true;
  }
}
</script>

