<template>
  <transition>
    <div class="content" v-show="this.$store.state.AddCarFlag_v">
      <div class="ico"></div>
      <div class="title">加入购物车成功</div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      s: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.content {
  width: 138px;
  height: 115px;
  border-radius: 18px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 15px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .ico {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #fff;
    font-family: "icomoon";
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 0.35rem;
    font-weight: 200;
  }
  .title {
    color: #fff;
  }
}
</style>