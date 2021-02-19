<template>
  <div class="Home" ref="Home">
    <topsearch :bgcFlag="bgcFlag"></topsearch>
    <swipe></swipe>
    <banner></banner>
    <BackTop></BackTop>
    <Nav></Nav>
    <Miaosha></Miaosha>
    <School></School>
    <Buyout></Buyout>
    <Tab></Tab>
    <Guess></Guess>
  </div>
</template>

<script>
import Topsearch from "../components/Home/Topsearch";
import Swipe from "../components/Home/Swipe";
import Banner from "../components/Home/Banner";
import BackTop from "../components/BackTop";
import Guess from "../components/Shooping-Car/Guess";
import Nav from "../components/Home/Nav";
import Miaosha from "../components/Home/Jd-Miaosha";
import School from "../components/Home/School";
import Tab from "../components/Home/Tab";
import Buyout from "../components/Home/Buyout";
// import { get } from "../utils/request";
export default {
  data() {
    return {
      bgcFlag: true,
    };
  },
  mounted() {
    let Home = this.$refs.Home;
    Home.addEventListener("scroll", this.handleScroll);
  },
  components: {
    Topsearch,
    Swipe,
    BackTop,
    Banner,
    Nav,
    Miaosha,
    School,
    Guess,
    Tab,
    Buyout,
  },
  methods: {
    handleScroll() {
      let Home = this.$refs.Home;
      let scrollTop = Home.scrollTop;
      if (scrollTop > 0) {
        this.bgcFlag = false;
      } else {
        this.bgcFlag = true;
      }
    },
  },
  // async created() {
  //   const list = await get("/api/v1/products");
  //   console.log(list);
  // },
};
</script>

<style lang="scss" scoped>
</style>