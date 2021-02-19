<template>
  <div class="product_detail">
    <div class="top">
      <span>商品详情</span>
      <span>规格参数</span>
      <span>售后保障</span>
    </div>
    <div class="inner" v-html="content"></div>
  </div>
</template>

<script>
export default {
  props: ["content"],
};
</script>

<style lang="scss" scoped>
.product_detail {
  margin-top: 12px;
}
.top {
  border-radius: 12px 12px 0 0;
  position: relative;
  font-weight: 700;
  color: #262626;
  height: 61px;
  line-height: 13px;
  padding-top: 24px;
  border: none;
  font-size: 13px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
}
.inner {
  ::v-deep img {
    width: 100%;
  }
}
</style>