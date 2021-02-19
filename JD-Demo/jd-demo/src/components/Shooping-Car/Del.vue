<template>
  <div class="del">
    <div class="content">
      <i></i>
      <p>确认要删除此商品？</p>
      <div class="btns">
        <span @click="$store.commit('GoodsDelFlagF')">取消</span>
        <span @click="delect">删除</span>
      </div>
    </div>
  </div>
</template>

<script>
import { del } from "../../utils/request";
export default {
  methods: {
    async delect() {
      const result = await del(
        `/api/v1/shop_carts/${this.$store.state.GoodsDelID}`
      );
      if (result.status == 200) {
        this.$store.commit("GoodsDelFlagF");
        //删除 Goods 列表
        let index = this.$store.state.CartGoods.findIndex((v) => {
          return v._id == this.$store.state.GoodsDelID;
        });
        this.$store.state.CartGoods.splice(index, 1);
        //删除 单选多选的 数组
        let idx = this.$store.state.CarListCheckbox.findIndex((v) => {
          return v == this.$store.state.GoodsDelID;
        });
        this.$store.state.CarListCheckbox.splice(idx, 1);

        //如果购物车为空
        if (this.$store.state.CartGoods.length == 0) {
          this.$store.commit("CarlistFlagT");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.del {
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.3);
  .content {
    width: 70%;
    height: 25vh;
    background-color: #fff;
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    padding: 20px 15px 15px;
    text-align: center;
    border-radius: 10px;
    i {
      display: block;
      width: 50px;
      height: 50px;
      margin: 5px auto 10px;
      background-image: url(../../assets/images/Shopcart/Carlist/del.png);
      background-size: 164px 144px;
      background-repeat: no-repeat;
      background-position: -5px -5px;
    }
    p {
      font-size: 0.16rem;
    }
    .btns {
      margin: 20px 0 0;
      display: flex;
      span {
        position: relative;
        width: 100px;
        height: 30px;
        box-sizing: border-box;
        line-height: 30px;
        background: #fff;
        color: #333;
        font-size: 14px;
        border: 1px solid #ccc;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);
        border-radius: 20px;
        flex: 1;
        &:nth-of-type(2) {
          margin-left: 10px;
          color: #fff;
          border: none;
          background: #f2270c;
        }
      }
    }
  }
}
</style>