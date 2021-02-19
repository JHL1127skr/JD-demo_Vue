<template>
  <div
    class="topSearch"
    :style="{ backgroundColor: bgcFlag ? 'transparent' : '#e43130' }"
  >
    <div class="classify" @click="classify"></div>
    <div class="search-input">
      <i id="search-jd"></i>
      <i id="search-ico"></i>
      <input type="text" placeholder="牛仔裤" />
    </div>
    <div class="login" @click="login">登录</div>
  </div>
</template>

<script>
export default {
  props: ["bgcFlag"],
  data() {
    return {};
  },
  methods: {
    classify() {
      this.$router.push({ name: "Classify" });
    },
    login() {
      this.$router.push({ name: "User" });
    },
  },
};
</script>

<style lang="scss" scoped>
#search-ico {
  font-family: "icomoon";
  font-size: 0.18rem;
  position: absolute;
  top: 0;
  left: 0.47rem;
  color: #ccc;
}
#search-jd {
  width: 20px;
  height: 15px;
  background: url("../../assets/images/Home/JD-logo.png") no-repeat;
  background-size: 20px 15px;
  margin: 8px 8px 0 15px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  float: left;
  &::after {
    content: "";
    position: absolute;
    border-right: 1px solid #ddd;
    top: 0;
    left: 26px;
    height: 16px;
  }
}
input {
  width: calc(100% - 60px);
  position: absolute;
  top: 2px;
  left: 72px;
  border: none;
  outline: none;
}
.topSearch {
  width: 100%;
  height: 44px;
  background-color: #e43130;
  background-color: transparent;
  position: fixed;
  z-index: 9999;
}
.classify {
  width: 50px;
  height: 44px;
  float: left;
  font-family: "icomoon";
  text-align: center;
  line-height: 44px;
  color: #fff;
  font-size: 0.25rem;
  font-weight: 100;
}
.login {
  width: 50px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  color: #fff;
  float: left;
  font-size: 0.14rem;
}
.search-input {
  position: relative;
  margin-top: 7px;
  float: left;
  width: calc(100% - 100px);
  padding: 0 50px;
  border: none;
  border-radius: 15px;
  height: 30px;
  overflow: hidden;
  background: #f7f7f7;
  font-size: 12px;
  line-height: 30px;
  padding-left: 35px;
  padding-right: 10px;
  box-sizing: border-box;
}
</style>