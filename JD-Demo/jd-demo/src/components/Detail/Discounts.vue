<template>
  <div class="discounts">
    <div class="inner">
      <span class="title">优惠</span>
      <div class="content">
        <div class="dicount_coupon">
          <span class="coupon">满300减50</span>
          <span class="coupon bg_red">新用户专享</span>
        </div>
        <div class="detail_prom">
          <div class="de_tag">
            <em>满减</em>
          </div>
          <div class="de_span">每满300元，可减40元现金</div>
        </div>
      </div>
    </div>
    <div class="white">
      <span class="title">白条</span>
      <div class="desc_list">6期内免息</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.discounts {
  margin-top: 12px;
  padding: 0 18px;
  border-radius: 12px;
  background-color: #fff;
  overflow: hidden;

  .inner {
    position: relative;
    padding: 18px 20px 5px 38px;
    font-size: 0;
    color: #333;
    word-break: break-word;
    overflow: hidden;
    font-size: 13px;
    line-height: 18px;
    .title {
      position: absolute;
      left: 0;
      top: 18px;
      color: #262626;
      font-weight: 700;
    }
    &::after {
      position: absolute;
      display: inline-block;
      width: 20px;
      height: 20px;
      background-image: url("../../assets/images/Detail/more.png");
      background-repeat: no-repeat;
      background-size: 20px;
      top: 12px;
      right: 0;
      content: "";
    }
    .content {
      .dicount_coupon {
        height: 18px;
        line-height: 0;
        overflow: hidden;
        word-break: break-word;
        margin-bottom: 12px;
        .coupon {
          box-sizing: border-box;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: normal;
          margin-right: 6px;
          padding: 0 6px;
          border: 1px solid #ff8373;
          border-radius: 2.5px;
          height: 15px;
          color: #f2270c;
          font-size: 10px;
          &::before {
            box-sizing: border-box;
            content: "";
            position: absolute;
            right: -1px;
            top: 50%;
            transform: translateY(-50%);
            width: 3px;
            height: 6px;
            background-color: #fff;
            border-radius: 3px 0 0 3px;
            border: 1px solid #ff8373;
            border-right: none;
          }
          &::after {
            content: "";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            box-sizing: border-box;
            left: -1px;
            width: 3px;
            height: 6px;
            background-color: #fff;
            border-radius: 0 3px 3px 0;
            border: 1px solid #ff8373;
            border-left: none;
          }
        }
        .bg_red {
          color: #fff;
          background-color: #f2270c;
          border-color: #f2270c;
        }
      }
      .detail_prom {
        margin: 12px 0;
        margin-top: 0;
        display: flex;
        .de_tag {
          margin-right: 5px;
          em {
            position: relative;
            padding: 0 3px;
            margin-right: 0;
            height: 12px;
            line-height: 12px;
            font-size: 9px;
            color: #e4393c;
            background: #fff;
            font-style: normal;
            border: 1px solid #f38688;
          }
        }
        .de_span {
          flex: 1;
          line-height: 20px;
        }
      }
    }
  }
  .white {
    position: relative;
    padding: 0 0 0 38px;
    font-size: 13px;
    .title {
      position: absolute;
      left: 0;
      top: 11px;
      color: #262626;
      font-weight: 700;
    }
    .desc_list {
      position: relative;
      color: #333;
      padding: 12px 0;
      padding-right: 35px;
      &::after {
        content: "";
        right: 0;
        position: absolute;
        display: inline-block;
        width: 20px;
        height: 20px;
        background-image: url("../../assets/images/Detail/more.png");
        background-repeat: no-repeat;
        background-size: 20px;
      }
    }
  }
}
</style>