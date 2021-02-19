<template>
  <div class="banner">
    <div class="left">
      <img class="bg" src="../../assets/images/Home/banner/left.png" alt="" />
      <div class="banner-l-show">
        <img src="../../assets/images/Home/banner/commodity/sp-l.png" alt="" />
      </div>
      <span>抢五折家电</span>
    </div>
    <div class="center">
      <div class="center-l">
        <img
          src="../../assets/images/Home/banner/commodity/center-l.png"
          alt=""
        />
      </div>
      <div class="center-r">
        <img
          src="../../assets/images/Home/banner/commodity/center-r.png"
          alt=""
        />
      </div>
      <img class="bg" src="../../assets/images/Home/banner/center.gif" alt="" />
    </div>
    <div class="right">
      <div class="banner-r-show">
        <img src="../../assets/images/Home/banner/commodity/sp-r.png" alt="" />
      </div>
      <img class="bg" src="../../assets/images/Home/banner/right.png" alt="" />
      <span>新年甄选</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 1rem;
}
.bg {
  position: relative;
  z-index: 3;
}
img {
  width: 100%;
  height: 100%;
}
.left {
  width: 25%;
  height: 100%;
  float: left;
  position: relative;
  .banner-l-show {
    position: absolute;
    width: 0.65rem;
    height: 0.63rem;
    top: 0.14rem;
    left: 0.17rem;
  }
  span {
    position: absolute;
    left: 0;
    bottom: 0.05rem;
    font-size: 0.12rem;
    width: 100%;
    text-align: center;
    z-index: 3;
    color: #fff;
  }
}

.center {
  width: 50%;
  height: 100%;
  float: left;
  position: relative;
  .center-l {
    position: absolute;
    width: 0.65rem;
    height: 0.63rem;
    top: 0.14rem;
    left: 0.17rem;
  }
  .center-r {
    position: absolute;
    width: 0.65rem;
    height: 0.63rem;
    top: 0.14rem;
    right: 0.17rem;
  }
}
.right {
  width: 25%;
  height: 100%;
  float: left;
  position: relative;
  .banner-r-show {
    position: absolute;
    width: 0.65rem;
    height: 0.63rem;
    top: 0.14rem;
    right: 0.17rem;
  }
  span {
    position: absolute;
    right: 0;
    bottom: 0.05rem;
    font-size: 0.12rem;
    width: 100%;
    text-align: center;
    z-index: 3;
    color: #fff;
  }
}
</style>