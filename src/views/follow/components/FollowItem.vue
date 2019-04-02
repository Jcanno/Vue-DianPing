<style lang='less' scoped>
@import './FollowItem.less';
</style>

<template>
  <div class="item">
    <UserInfo></UserInfo>
    <ImageBox class="image-box"></ImageBox>
    <div class="comment">
    <p>
      2015年10月8日，大众点评网与美团网联合发布声明，宣布达成战略合作并成立新公司美团大众点评。
    </p>
    <p>
      2016年1月，美团-大众点评旗下APP“大众点评”荣登“2015腾讯应用宝星APP榜”，
      喜获“年度十大最受欢迎APP”。同时，“大众点评”也是唯一一款获评该奖的美食健康类APP。
    </p>
    </div>
    <CommentItem></CommentItem>
    <CommentItem></CommentItem>
  </div>
</template>

<script>
import UserInfo from '_c/UserInfo/UserInfo'
import ImageBox from '_c/ImageBox'
import CommentItem from '_c/CommentItem'
export default {
  name: 'followitem',

  components:{
    UserInfo,
    ImageBox,
    CommentItem
  },

  data () {
    return {
    }
  },

  methods: {},

  computed: {},

  mounted(){

  }
}
</script>

