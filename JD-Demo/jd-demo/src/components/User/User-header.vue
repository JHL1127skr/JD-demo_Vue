<template>
  <div class="UserHeader">
    <div class="user_info">
      <div class="portrait">
        <div class="head_portrait">
          <img src="" alt="" />
        </div>
      </div>
      <div class="user_message">
        <div class="user_name">{{ name }}</div>
        <div class="hor_tips">
          <div class="notice">京享值</div>
          <div class="notice arrow">查看小白信用</div>
        </div>
      </div>
      <div class="setting" @click="UserDetail"></div>
    </div>
    <div class="shop">
      <div class="assets_item">
        <span>0</span>
        <span>商品收藏</span>
      </div>
      <div class="assets_item">
        <span>2</span>
        <span>店铺收藏</span>
      </div>
      <div class="assets_item">
        <span>1</span>
        <span>我的收藏</span>
      </div>
    </div>
    <div class="plus">
      <div class="inner">
        <div class="title">
          <div class="plus_title">免费试用 立领1张运费券</div>
          <div class="plus_subtitle">0元试用</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name"],
  methods: {
    UserDetail() {
      this.$router.push({ name: "UserDetail" });
    },
  },
};
</script>

<style lang="scss" scpoed>
.UserHeader {
  position: relative;
  overflow: hidden;
  width: 100%;
  background: url("../../assets/images/User/UserHeader/bg.png") no-repeat scroll
    0 0 / cover;
  box-sizing: border-box;
  padding-top: 12px;
  padding-bottom: 10px;
  color: #fff;
  .user_info {
    padding: 0 0 18px 18px;
    display: flex;
    align-items: center;
    position: relative;
    .portrait {
      width: 52px;
      height: 52px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
      border: 1px solid #fff;
      border-radius: 60px;
      transform: translateZ(0);

      .head_portrait {
        width: 100%;
        height: 100%;
        background: url("../../assets/images/User/UserHeader/head_portrait.png");
        background-size: cover;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .user_message {
      flex: 1;
      padding: 0 0 0 15px;
      position: relative;
      .user_name {
        font-size: 18px;
        color: #fff;
        line-height: 1.2;
      }
      .hor_tips {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 10px;
        .notice {
          max-width: 150px;
          height: 16px;
          line-height: 16px;
          padding: 0 8px;
          margin: 0 8px 0 0;
          border-radius: 10px;
          font-size: 0.1rem;
          background: rgba(0, 0, 0, 0.16);
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .arrow {
          position: relative;
          padding-right: 14px !important;
          &::after {
            display: block;
            content: "";
            width: 4px;
            height: 4px;
            transform-origin: 50%;
            transform: rotate(135deg);
            position: absolute;
            right: 6px;
            top: 6px;
            border-top: 1px solid hsla(0, 0%, 100%, 0.7);
            border-left: 1px solid hsla(0, 0%, 100%, 0.7);
          }
        }
      }
    }
    .setting {
      position: absolute;
      width: 0.2rem;
      height: 0.2rem;
      top: 0.05rem;
      right: 0.17rem;
      background: url("../../assets/images/User/UserHeader/setting.png");
      background-size: cover;
    }
  }
  .shop {
    display: flex;
    padding: 0 14px;
    .assets_item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        &:nth-of-type(1) {
          font-size: 0.16rem;
          font-weight: 700;
        }
        &:nth-of-type(2) {
          font-size: 0.12rem;
          line-height: 0.34rem;
          display: block;
        }
      }
    }
  }
  .plus {
    width: calc(100% - 0.4rem);
    height: 42px;
    margin: 6px 0.2rem 0;
    box-sizing: border-box;
    color: #ffe678;
    font-size: 12px;
    .inner {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 0 10px;
      background: url("../../assets/images/User/UserHeader/plus_bg.png")
        no-repeat 0 0;
      background-size: cover;
      .title {
        display: flex;
        justify-content: space-between;
        flex: 1 0 auto;
        .plus_title {
          position: relative;
          padding-left: 78px;
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 7rem;
          &::after {
            position: absolute;
            content: "";
            width: 57px;
            height: 12px;
            left: 0;
            top: 3px;
            background: url("../../assets/images/User/UserHeader/plus.png")
              no-repeat 50%;
            background-size: 100% 100%;
          }
          &::before {
            position: absolute;
            content: "";
            width: 0.5px;
            height: 7px;
            background: #ffe678;
            left: 67px;
            top: 5px;
          }
        }
        .plus_subtitle {
          position: relative;
          border-radius: 9px;
          background-image: linear-gradient(-50deg, #ffe36f, #f6d44e);
          color: #262626;
          font-size: 11px;
          line-height: 18px;
          text-align: center;
          padding: 0 10px;
          flex-shrink: 0;
          height: 18px;
          &::after {
            content: "";
            display: inline-block;
            vertical-align: middle;
            border-left: 3px solid #262626;
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            margin-left: 4px;
            margin-bottom: 2px;
          }
        }
      }
    }
  }
}
</style>