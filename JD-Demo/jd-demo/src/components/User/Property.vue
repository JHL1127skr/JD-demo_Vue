<template>
  <div class="property">
    <ul>
      <li>
        <span>0</span>
        <span>优惠券</span>
      </li>
      <li>
        <span>3,000.00</span>
        <span>白条额度</span>
      </li>
      <li>
        <span>0</span>
        <span>京豆</span>
      </li>
      <li>
        <span>0</span>
        <span>红包</span>
      </li>
      <li>
        <span class="money"></span>
        <span>我的资产</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.property {
  height: 80px;
  padding: 0 14px;
  border-radius: 12px;
  background-color: #fff;
  position: relative;
  margin: 15px 0;
  ul {
    width: 100%;
    height: 100%;
    padding: 17px 0 10px;
    display: flex;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      &:nth-of-type(5) {
        &::before {
          position: absolute;
          z-index: 1;
          top: -17px;
          left: -5px;
          width: 10px;
          height: 72px;
          background: url("../../assets/images/User/Property/side.png");
          background-size: 10px;
          content: "";
        }
        .money {
          width: 100%;
          background: url("../../assets/images/User/Property/money.png")
            no-repeat 50% scroll;
          background-size: 25px auto;
        }
      }
      span {
        &:nth-of-type(1) {
          font-size: 0.19rem;
          height: 20px;
          line-height: 20px;
          color: #262626;
          font-weight: 750;
          font-family: JDZhengHT-Regular;
        }
        &:nth-of-type(2) {
          display: block;
          margin-top: 16px;
          font-size: 11px;
          color: #262626;
          line-height: 1.2;
        }
      }
    }
  }
}
</style>