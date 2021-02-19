<template>
  <div class="swipe">
    <img id="banner-BG" src="../../assets/images/Home/banner-BG.jpg" alt="" />
    <div class="swiper">
      <van-swipe
        class="my-swipe"
        :autoplay="1500"
        indicator-color="white"
        height="140"
      >
        <van-swipe-item v-for="(item, index) in imgs" :key="index"
          ><img :src="item" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        require("../../assets/images/Home/swipe/01.png"),
        require("../../assets/images/Home/swipe/02.png"),
        require("../../assets/images/Home/swipe/03.png"),
        require("../../assets/images/Home/swipe/04.png"),
        require("../../assets/images/Home/swipe/05.png"),
        require("../../assets/images/Home/swipe/06.png"),
        require("../../assets/images/Home/swipe/07.png"),
        require("../../assets/images/Home/swipe/08.png"),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#banner-BG {
  width: 100%;
  height: 100%;
}
.van-swipe__indicators {
  position: absolute;
  bottom: 12px;
  left: 50%;
  display: flex;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.swipe {
  width: 100%;
  height: 187px;
  position: relative;

  .swiper {
    position: absolute;
    width: 100%;
    height: 187px;
    top: 0;
    left: 0;
    padding-top: 44px;
    overflow-x: auto;
  }
}
.my-swipe .van-swipe-item {
  padding: 0 0.15rem;
  height: 100%;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  float: left;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.1rem;
  }
}
</style>