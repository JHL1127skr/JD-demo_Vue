<template>
  <div class="settlement">
    <i
      :class="$store.getters.isCheckAll ? 'checked' : 'unchecked'"
      @click="$store.commit('CheckAll')"
    ></i>
    <span class="checkall">全选</span>
    <div class="jiesuan">
      去结算
      <span>({{ $store.getters.CheckNum }}件)</span>
    </div>
    <div class="money">
      总计:
      <span>¥{{ $store.getters.CheckMoney }}.00</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.settlement {
  height: 50px;
  width: 100%;
  background-color: rgba($color: #fff, $alpha: 0.95);
  position: absolute;
  z-index: 99999;
  bottom: 13vw;
  .checkall {
    float: left;
    font-size: 0.12rem;
    line-height: 50px;
    margin-left: 0.5rem;
  }
  .money {
    float: right;
    height: 100%;
    line-height: 50px;
  }
  .jiesuan {
    opacity: 0.3;
    float: right;
    margin: 6px 12px 0;
    font-weight: 700;
    display: block;
    width: 113px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    background-color: #f2270c;
    color: #fff;
    font-size: 0.14rem;
    background-image: linear-gradient(135deg, #f2140c, #f2270c 70%, #f24d0c);
    span {
      font-weight: 400;
      font-family: none;
    }
  }
}
.unchecked,
.checked {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.18rem;
  width: 31px;
  height: 31px;
  background-image: url(../../assets/images/Shopcart/Carlist/unchecked.png);
  background-size: 31px 31px;
}
.checked {
  background-image: url(../../assets/images/Shopcart/Carlist/checked.png);
}
</style>