<template>
  <div class="Buyout">
    <div class="inner">
      <div class="item" v-for="(item, index) in list" :key="index">
        <img src="../../assets/images/Home/Byout/bg.png" alt="" />
        <div class="content">
          <div class="goods_img">
            <img :src="item.img" alt="" />
          </div>
          <span>{{ item.title }}</span>
          <span>{{ item.people }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          img: require("../../assets/images/Home/Byout/01.png"),
          title: "储物/收纳",
          people: "9.4万人买过",
        },
        {
          img: require("../../assets/images/Home/Byout/02.png"),
          title: "水具酒具榜",
          people: "8000+人买过",
        },
        {
          img: require("../../assets/images/Home/Byout/03.png"),
          title: "精选抄网榜",
          people: "7.3万人买过",
        },
        {
          img: require("../../assets/images/Home/Byout/04.png"),
          title: "只能坐便器",
          people: "7.4万人买过",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.Buyout {
  margin: 0 0.1rem 0.1rem;
  .inner {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    height: 30px;
    height: 1.2rem;
    .item {
      width: 24%;
      height: 1.2rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .goods_img {
        position: absolute;
        top: 0.1rem;
        left: 50%;
        width: 0.65rem;
        height: 0.65rem;
        border-radius: 0.08rem;
        transform: translateX(-50%);
      }
      span {
        position: absolute;
        bottom: 0.19rem;
        font-size: 0.12rem;
        left: 0;
        width: 100%;
        color: #fff;
        text-align: center;
        font-weight: 400;
        &:nth-of-type(2) {
          font-size: 0.1rem;
          bottom: 0.05rem;
        }
      }
    }
  }
}
</style>