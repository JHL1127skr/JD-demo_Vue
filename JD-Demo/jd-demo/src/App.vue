<template>
  <div id="app">
    <router-view class="content" ref="vivw" />
    <FooterNav class="FooterNav" v-show="!isFooterNavFlag"></FooterNav>
  </div>
</template>
<script>
import FooterNav from "./components/FooterNav";
export default {
  created() {
    if (this.$route.meta.FooterNavFlag) {
      this.isFooterNavFlag = true;
    }
  },
  watch: {
    $route() {
      if (this.$route.meta.FooterNavFlag) {
        this.isFooterNavFlag = true;
      } else {
        this.isFooterNavFlag = false;
      }
    },
  },
  data() {
    return {
      isFooterNavFlag: false,
    };
  },
  components: {
    FooterNav,
  },
};
</script>
<style lang="scss" scoped>
@import url(./assets/css/reset.scss);
#app {
  display: flex;
  height: 100vh;
  flex-direction: column;
  font-size: 0.16rem;
}
.content {
  flex: 1;
  overflow-y: auto;
}
</style>
