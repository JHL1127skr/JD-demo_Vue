<template>
  <div class="EmptyWrap">
    <div class="icon"></div>
    <div class="text">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss" scoped>
.EmptyWrap {
  padding: 70px 0 65px;
  text-align: center;
  .icon {
    display: inline-block;
    width: 90px;
    height: 90px;
    background: url("../../assets/images/Shopcart/EmptyWrap/bg.png") no-repeat
      50%;
    background-size: 90px 90px;
  }
  .text {
    font-size: 16px;
    color: #333;
    line-height: 16px;
    margin-top: 15px;
  }
}
</style>