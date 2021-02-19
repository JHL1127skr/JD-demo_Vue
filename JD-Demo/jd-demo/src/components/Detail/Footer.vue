<template>
  <div class="footer">
    <van-goods-action>
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :badge="$store.state.CarListNum > 0 ? $store.state.CarListNum : ''"
        @click="$router.push({ name: 'Shopping-car' })"
      />
      <van-goods-action-button type="warning" text="加入购物车" @click="add" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
export default {
  data() {
    return {};
  },
  async created() {
    if (localStorage.getItem("token")) {
      this.$store.commit("changeCarListNum");
    }
  },
  computed: {},
  methods: {
    async add() {
      this.$store.commit("changeAddCarFlag");
    },
  },
};
</script>

<style>
</style>