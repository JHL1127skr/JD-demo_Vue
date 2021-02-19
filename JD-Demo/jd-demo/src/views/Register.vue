<template>
  <div class="register">
    <transition name="hint">
      <Hint :hint="hint" v-show="hintFlag"></Hint>
    </transition>
    <div class="header">
      <span class="icon-back" @click="routerBack"></span>
      <span class="header-title">京东登录注册</span>
    </div>
    <div class="login" v-show="!RegFlag">
      <p class="input-container">
        <input
          type="text"
          id="username"
          placeholder="用户名/邮箱/手机号"
          @focus="delFocus(0)"
          @blur="delBlur(0)"
          @input="delFocus(0)"
          v-model="logValue[0]"
        />
        <i class="del" @mousedown.prevent="clearlogVal(0)" v-if="delFlag[0]"
          ></i
        >
      </p>
      <p class="input-container">
        <input
          :type="pwFlag ? 'password' : 'text'"
          id="password"
          placeholder="请输入密码"
          v-model="logValue[1]"
          @focus="delFocus(1)"
          @blur="delBlur(1)"
          @input="delFocus(1)"
        />
        <i
          class="del-code del-pw"
          @mousedown.prevent="clearlogVal(1)"
          v-if="delFlag[1]"
          ></i
        >
        <i class="look" @click="pwFlag = !pwFlag">{{ pwFlag ? "" : "" }}</i>
        <button @click="VerificationFlag = !VerificationFlag">忘记密码</button>
      </p>
    </div>
    <div class="reg" v-show="RegFlag">
      <p class="input-container">
        <label class="area-box">
          <span>+86</span>
          <i class="select-num"></i>
        </label>
        <input
          type="tel"
          placeholder="请输入手机号"
          @focus="delFocus(0)"
          @blur="delBlur(0)"
          @input="delFocus(0)"
          v-model="iptValue[0]"
        />
        <!-- 这里不用点击事件  是因为点击事件的优先性没有失焦事件的优先性高   -->
        <!-- 或者就是给失焦事件进行延迟 setTimeout -->
        <i class="del" @mousedown.prevent="clearVal(0)" v-if="delFlag[0]"></i>
      </p>
      <p class="input-container">
        <input
          type="tel"
          class="ipt2"
          placeholder="请输入收到的验证码"
          v-model="iptValue[1]"
          @focus="delFocus(1)"
          @blur="delBlur(1)"
          @input="delFocus(1)"
        />
        <i class="del-code" @mousedown.prevent="clearVal(1)" v-if="delFlag[1]"
          ></i
        >
        <button
          ref="time"
          @click="VerificationFlag = !VerificationFlag"
          :style="{
            color: Col ? 'red' : '#000',
          }"
        >
          {{ !verificationCode ? "获取验证码" : `重新获取(${this.num}s)` }}
        </button>
      </p>
    </div>
    <div class="notice">{{ btnNotice }}</div>
    <Verification
      v-show="VerificationFlag"
      @bodyBack="VerificationFlag = !VerificationFlag"
      @disNone="verificationWIN"
    />
    <a
      href="javascript:;"
      class="btn"
      @click="verSucceed"
      :style="{
        backgroundImage: Bgcolor
          ? 'linear-gradient(90deg,#f10000,#ff2000 73%,#ff4f18)'
          : '',
      }"
      >登 录</a
    >
    <a href="javascript:;" class="btn btn-onestep">一键登录</a>
    <p class="quick-btn">
      <span @click="RegFlag = !RegFlag">帐号密码登录</span>
      <span>手机快速注册</span>
    </p>
    <div class="quick-login">
      <h4>其他登录方式</h4>
      <div class="quick-type">
        <span>QQ</span>
        <span>微信</span>
        <span>苹果</span>
      </div>
    </div>
    <p class="policy_tip">
      未注册的手机号验证后将自动创建京东账号, 登录即代表您已同意<span
        >京东隐私政策</span
      >
    </p>
  </div>
</template>

<script>
import { post } from "../utils/request";
import { randomName } from "../utils/randowName";
import { Notify } from "vant";
import Verification from "../components/Register/Verification";
import Hint from "../components/Register/hint";
export default {
  components: {
    Verification,
    Hint,
  },
  data() {
    return {
      RegFlag: true,
      pwFlag: true,
      num: 60,
      delFlag: [false, false],
      logValue: ["", ""],
      iptValue: ["", ""],
      hintFlag: false,
      btnNotice: "",
      hint: "验证码输入错误",
      verificationCode: false,
      VerificationFlag: false,
      reg: /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/,
    };
  },
  computed: {
    Col() {
      return this.reg.test(this.iptValue[0]);
    },
    Bgcolor() {
      return (
        (this.logValue[0] && this.logValue[1]) || (this.Col && this.iptValue[1])
      );
    },
  },
  methods: {
    verificationWIN() {
      this.VerificationFlag = !this.VerificationFlag;
      if (!this.reg.test(this.iptValue[0])) {
        this.btnNotice = "手机号格式错误";
      } else {
        this.btnNotice = "";
        this.verificationCode = true;
        this.$refs.time.style.color = "#ccc";
        let TIme = setInterval(() => {
          if (this.num == 0) {
            clearInterval(TIme);
            this.verificationCode = false;
            this.$refs.time.style.color = "#000";
            this.num = 60;
          }
          this.num--;
        }, 1000);
      }
    },
    routerBack() {
      this.$router.back();
    },
    clearlogVal(i) {
      this.logValue.splice(i, 1, "");
    },
    clearVal(i) {
      this.iptValue.splice(i, 1, "");
      this.delFlag.splice(i, 1, false);
    },
    delFocus(i) {
      this.delFlag.splice(i, 1, true);
    },
    delBlur(i) {
      this.delFlag.splice(i, 1, false);
    },
    async verSucceed() {
      if (this.Bgcolor) {
        if (this.RegFlag) {
          // ! 点击事件成功 注册
          if (this.verificationCode && this.iptValue[1] == "001127") {
            // ! 调用 注册接口
            const regRes = await post("/api/v1/auth/reg", {
              userName: this.iptValue[0].toString(),
              password: "123456",
              nickName: randomName().toString(),
            });
            // ! 注册成功 或者 用户名存在
            if (regRes.status == 200) {
              if (regRes.data.code == "success") {
                // ! 调用 登录接口
                const LoginRes = await post("/api/v1/auth/login", {
                  userName: this.iptValue[0].toString(),
                  password: "123456",
                });
                if (LoginRes.data.code == "success") {
                  localStorage.setItem("token", LoginRes.data.token, 7);
                  this.$router.back();
                }
              } else if (regRes.data.code == "error") {
                Notify({
                  type: "danger",
                  message: "该手机号已经注册过",
                });
              }
            }
          } else if (this.verificationCode && this.iptValue[1]) {
            this.hint = "验证码输入错误";
            this.hintFlag = true;
            setTimeout(() => {
              this.hintFlag = false;
            }, 2000);
          } else {
            this.hint = "请先获取验证码";
            this.hintFlag = true;
            setTimeout(() => {
              this.hintFlag = false;
            }, 2000);
          }
        } else {
          const LoginRes = await post("/api/v1/auth/login", {
            userName: this.logValue[0].toString(),
            password: this.logValue[1].toString(),
          });
          if (LoginRes.status == "200") {
            if (LoginRes.data.code == "success") {
              localStorage.setItem("token", LoginRes.data.token, 7);
              this.$router.back();
            } else if (LoginRes.data.code == "error") {
              Notify({
                type: "danger",
                message: "用户密码错误！",
              });
            }
          }
        }
      }
    },
  },
};
</script>

<style   lang="scss" scoped >
.register {
  .hint-leave-to {
    opacity: 0;
  }
  .hint-leave-active {
    transition: all 0.8s;
  }
  background-color: #fff;
  padding: 0 0.25rem 0.25rem;
  .header {
    display: block;
    position: relative;
    height: 44px;
    line-height: 44px;
    background: #fff;
    font-size: 0.17rem;
    text-align: center;
    span {
      &:nth-of-type(1) {
        top: 7px;
        left: -7px;
        overflow: hidden;
        display: block;
        position: absolute;
        background-repeat: no-repeat;
        background-size: 100% auto;
        font-size: 0.28rem;
      }
    }
  }
  .input-container {
    margin-top: 0.2rem;
    position: relative;
    box-sizing: border-box;
    height: 0.5rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    overflow: hidden;
    background: #fff;
    border-bottom: 0.01rem solid #efefef;
  }
  input {
    line-height: normal;
    border-radius: 0;
    border: 0;
    height: 100%;
    font-size: 0.16rem;
    outline: none;
    &::placeholder {
      color: #ccc;
    }
  }
  .reg,
  .login {
    button {
      width: 1.1rem;
      border: none;
      border-left: 1px solid #ccc;
      background: #fff;
      border-radius: 0;
      padding: 0;
      position: absolute;
      color: #000;
      right: 0;
      top: 0.125rem;
      height: 0.23rem;
      line-height: 0.23rem;
      text-align: center;
      outline: 0;
      font-size: 0.14rem;
    }
    .del {
      font-family: "icomoon";
      position: absolute;
      top: 0.15rem;
      right: 0.09rem;
      font-style: normal;
      font-size: 0.2rem;
      color: #ccc;
    }
    .del-code {
      font-family: "icomoon";
      position: absolute;
      top: 0.15rem;
      right: 1.2rem;
      font-style: normal;
      font-size: 0.2rem;
      color: #ccc;
      z-index: 2;
    }
  }
  .reg {
    .area-box {
      position: absolute;
      width: 0.72rem;
      height: 0.5rem;
      top: 0;
      left: 0;
      line-height: 0.5rem;
      span {
        font-family: PingFangSC-Semibold;
        display: inline-block;
        text-align: center;
        width: 0.5rem;
      }
      .select-num {
        font-family: "icomoon";
        font-style: normal;
        font-size: 0.2rem;
        position: absolute;
        left: 0.45rem;
      }
    }
    input {
      width: 100%;
      height: 100%;
      padding-left: 0.7rem;
    }
    .ipt2 {
      padding-left: 0rem;
      padding-right: 0.3rem;
      height: 100%;
      width: 100%;
      padding: 0;
      margin: 0;
    }
  }
  .login {
    input {
      padding-left: 0;
    }
    #password {
      padding-right: 1.8rem;
    }
    .del-pw {
      right: 1.65rem;
    }
    .look {
      position: absolute;
      top: 0.15rem;
      right: 1.3rem;

      color: #ccc;
      font-family: "icomoon";
      font-size: 0.18rem;
    }
  }
  .notice {
    font-size: 0.14rem;
    line-height: 0.3rem;
    color: #f23030;
    min-height: 0.15rem;
    text-align: left;
  }
  .verification {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: 0.5);
    z-index: 999;
  }
  .btn {
    text-align: center;
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    display: block;
    background-color: #efefef;
    border-radius: 0.25rem;
    font-size: 0.16rem;
    color: #fff;
    background-image: linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba);
  }
  .btn-onestep {
    border: 1px solid #ff2000;
    color: #f10000;
    background: #fff;
    margin-top: 0.1rem;
  }
  .quick-btn {
    color: rgba(0, 0, 0, 0.4);
    font-size: 0.14rem;
    margin-top: 0.2rem;
    overflow: hidden;
    span {
      &:nth-of-type(1) {
        float: left;
      }
      &:nth-of-type(2) {
        float: right;
      }
    }
  }
  .quick-login {
    margin-top: 0.88rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 0.12rem;
    h4 {
      color: rgba(0, 0, 0, 0.2);
      width: 1.4rem;
      margin: -0.11rem auto 0;
      background: #fff;
      text-align: center;
    }
    .quick-type {
      text-align: center;
      margin: 0.25rem 0 0.12rem;
      span {
        display: inline-block;
        width: 0.48rem;
        color: rgba(0, 0, 0, 0.4);
        margin: 0 0.17rem;
        background-size: 100% auto;
        padding-top: 0.53rem;
        background-repeat: no-repeat;
        &:nth-of-type(1) {
          background-image: url(../assets/images/Register/quick-type/QQ.png);
        }
        &:nth-of-type(2) {
          background-image: url(../assets/images/Register/quick-type/VX.png);
        }
        &:nth-of-type(3) {
          background-image: url(../assets/images/Register/quick-type/Apple.png);
        }
      }
    }
  }
  .policy_tip {
    text-align: center;
    font-size: 0.13rem;
    color: rgba(0, 0, 0, 0.3);
    margin-top: 0.15rem;
    span {
      color: #4a90e2;
    }
  }
}
</style>