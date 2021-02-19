<template>
  <div class="detail">
    <Topnav class="top"></Topnav>
    <Addcar :goods="goods"></Addcar>
    <Inner :goods="goods"></Inner>
    <Discounts></Discounts>
    <Comment></Comment>
    <Youlike></Youlike>
    <Productdetail :content="goods.content"></Productdetail>
    <Footer></Footer>
    <AddcarV></AddcarV>
  </div>
</template>

<script>
import { get } from "../utils/request";
import AddcarV from "../components/Addcar/Addcar_v";
import Topnav from "../components/Detail/Topnav";
import Inner from "../components/Detail/Inner";
import Discounts from "../components/Detail/Discounts";
import Productdetail from "../components/Detail/Product_detail";
import Youlike from "../components/Detail/Youlike";
import Comment from "../components/Detail/Comment";
import Footer from "../components/Detail/Footer";
import Addcar from "../components/Addcar/Addcar";
export default {
  data() {
    return {
      goods: "",
    };
  },
  async beforeRouteUpdate(to, from, next) {
    console.log(from);
    const result2 = await get(`/api/v1/products/${to.query.id}`);
    if (result2.status == 200) {
      this.goods = result2.data;
      next();
      location.reload();
    }
  },
  async created() {
    const result2 = await get(`/api/v1/products/${this.$route.query.id}`);
    if (result2.status == 200) {
      this.goods = result2.data;
    }
  },
  components: {
    Topnav,
    Inner,
    Discounts,
    Productdetail,
    Youlike,
    Comment,
    Footer,
    Addcar,
    AddcarV,
  },
};
</script>

<style lang="scss" scoped>
.top {
  position: absolute;
}
</style>