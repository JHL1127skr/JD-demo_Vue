<template>
  <div class="order">
    <div class="container">
      <div class="order_type">
        <span>代付款</span>
      </div>
      <div class="order_type">
        <span>待收货</span>
      </div>
      <div class="order_type">
        <span>退换/售后</span>
      </div>
      <div class="order_type">
        <span>全部订单</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.order {
  background-color: #fff;
  border-radius: 12px;
  line-height: 44px;
  margin: 15px 0;
  position: relative;
  margin-top: -10px;
  padding-top: 8px;
  .container {
    height: 80px;
    display: flex;
    position: relative;
    flex-flow: row nowrap;
    padding: 0 14px;
    .order_type {
      position: relative;
      flex: 1;
      text-align: center;
      height: 0.51rem;
      &:nth-of-type(1) {
        background: url("../../assets/images/User/Order/01.png") no-repeat
          scroll 50%/26px;
      }
      &:nth-of-type(2) {
        background: url("../../assets/images/User/Order/02.png") no-repeat
          scroll 50%/26px;
      }
      &:nth-of-type(3) {
        background: url("../../assets/images/User/Order/03.png") no-repeat
          scroll 50%/26px;
      }
      &:nth-of-type(4) {
        background: url("../../assets/images/User/Order/04.png") no-repeat
          scroll 50%/26px;
        span {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 7px;
        }
        &::before {
          position: absolute;
          z-index: 1;
          top: 0;
          left: -5px;
          width: 10px;
          height: 72px;
          background: url("../../assets/images/User/Order/side.png");
          background-size: 10px;
          content: "";
        }
      }
      span {
        color: #262626;
        font-size: 11px;
        position: relative;
        top: 26px;
      }
    }
  }
}
</style>