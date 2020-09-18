<!--  -->
<template>
  <header-top :title="'北京'">
    <router-link slot="left" to="/search" class="header_search">
        <i class="iconfont icon-sousuo"></i>
    </router-link>
    <router-link slot="right" to="#" class="header_login">登陆|注册</router-link>
  </header-top>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
export default {
  data() {
    return {};
  },

  components: {
    HeaderTop,
  },
};
</script>
<style lang='stylus' scoped>

</style>