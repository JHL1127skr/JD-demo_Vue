<template>
  <div class="Footer_Nav">
    <div class="footernav">
      <div class="item">
        <img src="../../assets/images/UserDetail/FooterNav/item-1.png" alt="" />
        <span>意见反馈</span>
      </div>
      <div class="item">
        <img src="../../assets/images/UserDetail/FooterNav/item-2.png" alt="" />
        <span>京东客户端</span>
      </div>
      <div class="item" @click="quit">
        <img src="../../assets/images/UserDetail/FooterNav/item-3.png" alt="" />
        <span>退出登录</span>
      </div>
    </div>
    <div class="footer">
      <div class="img"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    quit() {
      localStorage.removeItem("token");
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.footernav {
  display: flex;
  margin: 10px 0 0;
  .item {
    display: block;
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
    margin-left: 10px;
    padding: 6px 0;
    position: relative;
    img {
      width: 18px;
      height: 18px;
      padding-right: 3px;
      display: inline-block;
      vertical-align: top;
      box-sizing: content-box;
    }
  }
}
.footer {
  margin: 25px 0 75px;
  .img {
    display: block;
    width: 100px;
    height: 20px;
    margin: 0 auto;
    background: url("../../assets/images/UserDetail/FooterNav/footer.png")
      no-repeat;
    background-size: 100%;
  }
}
</style>