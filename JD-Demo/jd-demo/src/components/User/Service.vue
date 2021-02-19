<template>
  <div class="service">
    <div class="header">工具与服务</div>
    <div class="body">
      <div class="tools_item">
        <div class="bg"></div>
        <span>客服服务</span>
      </div>
      <div class="tools_item">
        <div class="bg"></div>
        <span>我的预约</span>
      </div>
      <div class="tools_item">
        <div class="bg"></div>
        <span>我的回答</span>
      </div>
      <div class="tools_item">
        <div class="bg"></div>
        <span>高价回收</span>
      </div>
      <div class="tools_item">
        <div class="bg"></div>
        <span>闲置换钱</span>
      </div>
      <div class="tools_item">
        <div class="bg"></div>
        <span>定期购</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.service {
  background: #fff;
  margin: 15px 0;
  border-radius: 15px;
  .header {
    position: relative;
    font-size: 14px;
    color: #2e2d2d;
    height: 38px;
    line-height: 38px;
    padding-left: 18px;
    font-weight: 700;
    &::before {
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      background: #f2f2f2;
      bottom: 0;
      content: "";
      transform: scaleY(0.5);
    }
  }
  .body {
    overflow: hidden;
    position: relative;
    padding-bottom: 10px;
    height: 158px;
    .tools_item {
      text-align: center;
      box-sizing: border-box;
      float: left;
      width: 25%;
      position: relative;
      padding-top: 12px;
      &:nth-of-type(1) {
        .bg {
          background: url("../../assets/images/User/Service/01.webp") 0px 0px /
            100% 100% no-repeat;
        }
      }
      &:nth-of-type(2) {
        .bg {
          background: url("../../assets/images/User/Service/02.webp") 0px 0px /
            100% 100% no-repeat;
        }
      }
      &:nth-of-type(3) {
        .bg {
          background: url("../../assets/images/User/Service/03.webp") 0px 0px /
            100% 100% no-repeat;
        }
      }
      &:nth-of-type(4) {
        .bg {
          background: url("../../assets/images/User/Service/04.webp") 0px 0px /
            100% 100% no-repeat;
        }
      }
      &:nth-of-type(5) {
        .bg {
          background: url("../../assets/images/User/Service/05.webp") 0px 0px /
            100% 100% no-repeat;
        }
      }
      &:nth-of-type(6) {
        .bg {
          background: url("../../assets/images/User/Service/06.webp") 0px 0px /
            100% 100% no-repeat;
        }
      }
      .bg {
        display: block;
        margin: 0 auto 6px;
        width: 35px;
        height: 35px;
      }
      span {
        font-size: 0.12rem;
        color: #262626;
        line-height: 1.2;
      }
    }
  }
}
</style>