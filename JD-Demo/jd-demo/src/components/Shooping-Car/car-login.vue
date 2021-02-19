<template>
  <div class="carLogin">
    登录后可同步账户购物车中的商品
    <div class="login" @click="$router.push({ name: 'Register' })">登录</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.carLogin {
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  .login {
    display: inline-block;
    margin-left: 10px;
    width: 58px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    background-image: linear-gradient(270deg, #f2270c, #ff4b2b);
    box-shadow: 0 3px 6px 0 rgba(255, 65, 66, 0.2);
    border-radius: 15px;
  }
}
</style>