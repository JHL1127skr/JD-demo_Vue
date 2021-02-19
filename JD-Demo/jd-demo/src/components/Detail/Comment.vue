<template>
  <div class="comment">
    <div class="top">
      <span>评价</span>
      <span><strong>100</strong>万+</span>
      <span></span>
      <span>好评率<strong>98%</strong></span>
    </div>
    <div class="list">
      <span>精致美观(725)</span>
      <span>极其好用(437)</span>
      <span> 用着舒服(339)</span>
      <span>安全可靠(18)</span>
      <span>没有失望(15)</span>
      <span>质感极佳(7)</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.comment {
  margin-top: 12px;
  padding: 0 18px;
  border-radius: 12px;
  background-color: #fff;
  overflow: hidden;
  .top {
    position: relative;
    height: 45px;
    line-height: 45px;
    color: #262626;
    padding-left: 8px;
    margin-top: 3px;
    padding: 0 10px;
    display: block;
    font-size: 12px;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 15px;
      background-image: linear-gradient(180deg, #f5503a, #fad1cb);
    }
    span {
      &:nth-of-type(1) {
        color: #262626;
        font-weight: 700;
        font-size: 15px;
      }
      &:nth-of-type(2) {
        margin-left: 5px;
      }
      &:nth-of-type(4) {
        color: #8c8c8c;
        font-size: 0.12rem;
        float: right;
      }
      &:nth-of-type(3) {
        float: right;
        font-family: "icomoon";
        color: #262626;
        font-size: 0.2rem;
        line-height: 0.44rem;
      }
    }
  }
  .list {
    position: relative;
    padding: 3px 3px 0 0;
    max-height: 80px;
    margin: 0;
    span {
      display: inline-block;
      padding: 0 10px;
      height: 30px;
      line-height: 30px;
      font-size: 11px;
      color: #262626;
      background: #fcedeb;
      margin: 0 12px 12px 0;
      border-radius: 15px;
    }
  }
}
</style>