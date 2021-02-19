<template>
  <div class="Shooping-car">
    <TopNav :TopTitle="'购物车'"></TopNav>
    <carLogin v-if="needLogF"></carLogin>
    <EmptyWrap
      :title="
        !needLogF ? '购物车空空如也，去逛逛吧~' : '登录后可同步购物车中商品'
      "
      v-show="$store.state.CarlistFlag"
    ></EmptyWrap>
    <Carlist v-show="!$store.state.CarlistFlag"></Carlist>
    <Title :title="'京东秒杀'" v-show="$store.state.CarlistFlag"></Title>
    <JdMiaosha v-show="$store.state.CarlistFlag"></JdMiaosha>
    <Welfare v-if="$store.state.needlog"></Welfare>
    <Title :title="'可能你还想要'"></Title>
    <Guess></Guess>
    <BackTop></BackTop>
    <Del v-if="$store.state.GoodsDelFlag"></Del>
    <Settlement></Settlement>
  </div>
</template>

<script>
import TopNav from "../components/TopNav";
import { Notify } from "vant";
import carLogin from "../components/Shooping-Car/car-login";
import EmptyWrap from "../components/Shooping-Car/EmptyWrap";
import JdMiaosha from "../components/Shooping-Car/Jd-Miaosha";
import Welfare from "../components/Shooping-Car/Welfare";
import Carlist from "../components/Shooping-Car/Car_list";
import Guess from "../components/Shooping-Car/Guess";
import Title from "../components/Title";
import BackTop from "../components/BackTop";
import Del from "../components/Shooping-Car/Del";
import Settlement from "../components/Shooping-Car/Settlement";
import { get } from "../utils/request";
export default {
  async created() {
    if (localStorage.getItem("token")) {
      try {
        const result = await get("/api/v1/shop_carts");
        if (result.status == "200") {
          this.$store.commit("needLogF");
          if (result.data.length > 0) {
            this.$store.commit("CarlistFlagF");
          }
        }
      } catch (error) {
        Notify({
          type: "danger",
          message: "Token失效或者不存在",
        });
        localStorage.removeItem("token");
        window.location.reload();
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    needLogF() {
      return this.$store.state.needLog;
    },
  },
  components: {
    TopNav,
    carLogin,
    EmptyWrap,
    JdMiaosha,
    Welfare,
    Guess,
    Title,
    BackTop,
    Carlist,
    Del,
    Settlement,
  },
};
</script>

<style>
</style>