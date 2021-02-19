<template>
  <div class="welfare">
    <div class="head">
      <div class="title">
        新用户福利
        <span></span>
        专属优惠礼包
      </div>
      <div class="get">一键领取</div>
    </div>
    <div class="area">
      <div class="box-1">
        <div class="info">
          <p class="type">东券</p>
          <div class="count">
            <span>¥</span>
            <span>6</span>
          </div>
          <div class="desc">全品类可用</div>
        </div>
        <div class="more">满30可用</div>
      </div>
      <div class="box-1">
        <div class="info">
          <p class="type">东券</p>
          <div class="count">
            <span>¥</span>
            <span>30</span>
          </div>
          <div class="desc">全品类可用</div>
        </div>
        <div class="more">满300可用</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.welfare {
  padding: 15px 10px;
  background: #fff;
  .head {
    display: flex;
    justify-content: space-between;
    .title {
      position: relative;
      padding: 0 15px;
      font-size: 16px;
      color: #333;
      line-height: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      span {
        position: relative;
        padding: 0 10px 0 7px;
        &::after {
          position: absolute;
          content: "";
          width: 3px;
          height: 3px;
          background: #333;
          border-radius: 50%;
          top: 50%;
          margin-top: -2px;
        }
      }
      &::before,
      &::after {
        position: absolute;
        content: "";
        width: 12px;
        height: 17px;
        background: url("../../assets/images/Shopcart/welfare/title.png")
          no-repeat;
        background-size: 12px;
      }
      &::before {
        left: 0;
        top: 5px;
        transform: rotate(180deg);
      }
      &::after {
        top: 6px;
        margin-left: 3px;
      }
    }
    .get {
      flex-shrink: 0;
      max-width: 150px;
      height: 30px;
      overflow: hidden;
      color: #fff;
      font-size: 14px;
      line-height: 30px;
      background-image: linear-gradient(-90deg, #f2270c, #ff9574);
      box-shadow: 0 5px 10px 0 rgba(233, 59, 61, 0.2);
      border-radius: 15px;
      padding: 0 15px;
    }
  }
  .area {
    height: 64px;
    margin-top: 12px;
    .box-1 {
      width: 33.33%;
      height: 64px;
      float: left;
      position: relative;
      margin-right: 1px;
      overflow: hidden;
      .info {
        height: 40px;
        padding: 0 8px;
        overflow: hidden;
        position: relative;
        display: flex;
        border-top: 1px solid #f7f7f7;
        .type {
          position: absolute;
          z-index: 0;
          width: 36px;
          height: 36px;
          border: 2px solid #eee;
          border-radius: 50%;
          top: -11px;
          left: -4px;
          color: #eee;
          line-height: 35px;
          text-align: center;
          font-size: 14px;
        }
        .count {
          position: relative;
          line-height: 1;
          color: #6ed1d3;
          flex-shrink: 0;
          max-width: 62px;
          vertical-align: bottom;
          overflow: hidden;
          span {
            &:nth-of-type(1) {
              position: absolute;
              left: 0;
              bottom: 5px;
              font-size: 12px;
              line-height: 1;
            }
            &:nth-of-type(2) {
              padding-left: 10px;
              font-weight: 700;
              font-size: 24px;
              position: relative;
              top: 14px;
              display: block;
              max-width: 52px;
            }
          }
        }
        .desc {
          position: relative;
          padding-left: 3px;
          line-height: 12px;
          height: 12px;
          margin-top: 23px;
          font-size: 10px;
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .more {
        background-image: linear-gradient(-179deg, #73d2d4 2%, #53c7ca 99%);
        padding: 0 10px;
        line-height: 24px;
        color: #fff;
        font-size: 0.12rem;
      }
      &::before,
      &::after {
        position: absolute;
        content: "";
        width: 3px;
        height: 64px;
        top: 0;
        z-index: 3;
      }
      &::before {
        right: 0;
        background: url("../../assets/images/Shopcart/welfare/right.png")
          no-repeat;
        background-size: 3px 64px;
      }
      &::after {
        left: 0;
        background: url("../../assets/images/Shopcart/welfare/left.png")
          no-repeat;
        background-size: 3px 64px;
      }
    }
  }
}
</style>