<template>
  <div class="accounts">
    <div class="title">管理我的账户</div>
    <div class="user">
      <div class="inner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div class="inner_tip">当前登录</div>
        <div class="user_info">
          <div class="portrait"></div>
          <div class="name">
            <div class="top_name">{{ user_details.nickName }}</div>
            <div class="bom_name">用户名: {{ user_details.nickName }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "../../utils/request";
export default {
  data() {
    return {
      user_details: "",
    };
  },
  async created() {
    const result = await get("/api/v1/users/info", {
      header: { authorization: "Bearer" + localStorage.getItem("token") },
    });
    if (result.status == "200") {
      this.user_details = result.data;
      console.log(this.user_details);
    }
  },
};
</script>

<style lang="scss" scoped>
.accounts {
  background: #fff;
  position: relative;
  padding: 12px 10px 0;
  margin-bottom: 15px;
  border-radius: 0 0 10px 10px;
  .title {
    color: #333;
    font-size: 16px;
  }
  .user {
    list-style: none;
    position: relative;
    margin: 0;
    padding: 2px 0 15px;
    .inner {
      background: #fff9f9;
      height: 90px;
      padding: 20px 15px 15px;
      border: 1px solid #ff414e;
      position: relative;
      border-radius: 10px;
      margin-top: 10px;
      overflow: hidden;
      font-size: 0.12rem;
      span {
        &:nth-of-type(1) {
          position: absolute;
          bottom: 0;
          left: 4px;
          width: 25px;
          height: 15px;
          background-image: url("../../assets/images/UserDetail/accounts/bg1.png");
          background-size: 25px 15px;
        }
        &:nth-of-type(2) {
          position: absolute;
          bottom: 14px;
          right: 45px;
          width: 27px;
          height: 22px;
          background-image: url("../../assets/images/UserDetail/accounts/bg2.png");
          background-size: 27px 22px;
        }
        &:nth-of-type(3) {
          position: absolute;
          bottom: 9px;
          right: 18px;
          width: 17px;
          height: 17px;
          background: transparent;
          border-radius: 100%;
          border: 2px solid #ffa9a9;
          opacity: 0.2;
        }
        &:nth-of-type(4) {
          position: absolute;
          width: 52px;
          height: 52px;
          bottom: -22px;
          right: -23px;
          border-radius: 100%;
          background-color: #ffa9a9;
          opacity: 0.2;
        }
      }
      .inner_tip {
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 10px;
        background-color: #ffe4e4;
        color: #e2231a;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
      }
      .user_info {
        display: flex;
        align-items: center;
        .portrait {
          position: relative;
          display: inline-block;
          width: 45px;
          height: 45px;
          vertical-align: middle;
          border-radius: 100%;
          overflow: hidden;
          margin-right: 10px;
          transform: translateZ(0);
          background: url("../../assets/images/UserDetail/accounts/tx.png")
            no-repeat;
          background-size: cover;
        }
        .top_name {
          padding: 4px 0 1px;
          margin-bottom: 1px;
        }
        .bom_name {
          opacity: 0.7;
        }
      }
    }
  }
}
</style>