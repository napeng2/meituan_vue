<!-- 页面底部 -->
<template>
  <div>
    <footer class="footer_guide">
      <router-link to='/msite' class="guide_item" :class="{on:this.$route.path==='/msite'}">
        <span class="item_icon">
          <i class="iconfont icon-waimai"></i>
        </span>
        <span>外卖</span>
      </router-link>

      <router-link to='/search' class="guide_item" :class="{on:this.$route.path==='/search'}">
        <span class="item_icon">
          <i class="iconfont icon-search"></i>
        </span>
        <span>搜索</span>
      </router-link>

      <router-link to='/order' class="guide_item" :class="{on:this.$route.path==='/order'}">
        <span class="item_icon">
          <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
      </router-link>

      <router-link to='/profile' class="guide_item" :class="{on:this.$route.path==='/profile'}">
        <span class="item_icon">
          <i class="iconfont icon-geren"></i>
        </span>
        <span>我的</span>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
}

</script>
<style lang='stylus' scoped>
@import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    left 0
    right 0
    bottom 0
    display flex
    width 100%
    height 50px
    background-color #fff
    .guide_item
      flex 1
      display flex
      flex-direction column
      align-items center
      margin auto
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>