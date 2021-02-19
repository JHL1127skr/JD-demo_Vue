<template>
  <div class="User">
    <TopNav :TopTitle="'我的京东'"></TopNav>
    <User-Header :name="user_details.nickName"></User-Header>
    <Order></Order>
    <Property></Property>
    <Service></Service>
    <Banner></Banner>
    <Title :title="'为您推荐'"></Title>
    <Guess></Guess>
    <BackTop></BackTop>
  </div>
</template>

<script>
import TopNav from "../components/TopNav";
import UserHeader from "../components/User/User-header";
import Order from "../components/User/Order";
import Property from "../components/User/Property";
import Service from "../components/User/Service";
import Banner from "../components/User/Banner";
import Title from "../components/Title";
import BackTop from "../components/BackTop";
import Guess from "../components/Shooping-Car/Guess";
import { get } from "../utils/request";
import { Notify } from "vant";
export default {
  data() {
    return {
      user_details: "",
    };
  },
  async created() {
    const result = await get("/api/v1/users/info", {
      header: { authorization: "Bearer" + localStorage.getItem("token") },
    });
    if (result.status == "200") {
      this.user_details = result.data;
    } else if (result.status == "401") {
      Notify({
        type: "danger",
        message: "Token失效或者不存在",
      });
      localStorage.removeItem("token");
      this.$router.go(0);
    }
  },
  components: {
    TopNav,
    UserHeader,
    Order,
    Property,
    Service,
    Title,
    Banner,
    Guess,
    BackTop,
  },
};
</script>

<style>
</style>