<template>
  <div class="footernav">
    <router-link
      exact
      :to="{ name: item.name }"
      v-for="(item, index) in list"
      :key="index"
    >
      <img :src="item.srcSelect" alt="" />
      <img :src="item.src" alt="" />
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: "Home",
          src: require("../assets/images/FooterNav/Home.png"),
          srcSelect: require("../assets/images/FooterNav/Home-select.png"),
        },
        {
          name: "Classify",
          src: require("../assets/images/FooterNav/Classify.png"),
          srcSelect: require("../assets/images/FooterNav/Classify-select.png"),
        },
        {
          name: "Jd-surprise",
          src: require("../assets/images/FooterNav/Jd-surprise.png"),
        },
        {
          name: "Shopping-car",
          src: require("../assets/images/FooterNav/Shopping-car.png"),
          srcSelect: require("../assets/images/FooterNav/Shopping-car-select.png"),
        },
        {
          name: "User",
          src: this.UserFlag
            ? require("../assets/images/FooterNav/User.png")
            : require("../assets/images/FooterNav/User2.png"),
          srcSelect: require("../assets/images/FooterNav/User-select.png"),
        },
      ],
      UserFlag: true,
    };
  },
  created() {
    if (localStorage.getItem("token")) {
      this.UserFlag = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.footernav {
  background-color: #fff;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
  z-index: 9999999;
  a {
    position: relative;
    width: 20%;
    height: 13.33333vw;
    box-sizing: border-box;
    float: left;
    font-size: 16px;
    background-color: transparent;
    text-align: center;
    img {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      &:nth-of-type(1) {
        display: none;
      }
    }
  }
  .router-hover {
    img {
      &:nth-of-type(1) {
        display: block;
      }
      &:nth-of-type(2) {
        display: none;
      }
    }
  }
}
</style>