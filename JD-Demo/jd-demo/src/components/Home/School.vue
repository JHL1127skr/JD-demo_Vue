<template>
  <div class="school">
    <img class="topNav" src="../../assets/images/Home/school/top.webp" alt="" />
    <div class="content">
      <div class="box_1">
        <div class="b1_item" v-for="(item, index) in list_1" :key="index">
          <div class="title">
            <p>{{ item.title_b }}</p>
            <p>{{ item.title_s }}</p>
          </div>
          <div class="images">
            <img :src="item.img_1" alt="" />
            <img :src="item.img_2" alt="" />
          </div>
        </div>
      </div>
      <div class="box_2">
        <div class="b2_item" v-for="(item, index) in list_2" :key="index">
          <div class="title">
            <p>{{ item.title_b }}</p>
            <p>{{ item.title_s }}</p>
          </div>
          <div class="image">
            <img :src="item.img" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list_1: [
        {
          title_b: "京东校园",
          title_s: "乐园学生票低至4折",
          img_1: require("../../assets/images/Home/school/list_1-1.png"),
          img_2: require("../../assets/images/Home/school/list_1-2.png"),
        },
        {
          title_b: "同学都在买",
          title_s: "潮流购物风尚  本校排行",
          img_1: require("../../assets/images/Home/school/list_1-3.png"),
          img_2: require("../../assets/images/Home/school/list_1-4.png"),
        },
      ],
      list_2: [
        {
          title_b: "专属鞋柜",
          title_s: "随心选鞋",
          img: require("../../assets/images/Home/school/list_2-1.png"),
        },
        {
          title_b: "牛转乾坤",
          title_s: "迎新春好运",
          img: require("../../assets/images/Home/school/list_2-2.png"),
        },
        {
          title_b: "学生特权",
          title_s: "1分购好物",
          img: require("../../assets/images/Home/school/list_2-3.png"),
        },
        {
          title_b: "数码专区",
          title_s: "潮流看这里",
          img: require("../../assets/images/Home/school/list_2-4.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.topNav {
  width: 100%;
  display: block;
}
.content {
  margin: 0 0.1rem 0.1rem;
  background-color: #fff;
  .box_1 {
    overflow: hidden;
    .b1_item {
      background-color: #fff;
      width: 50%;
      height: 1.2rem;
      padding: 0.06rem 0 0.05rem;
      float: left;

      .images {
        padding: 0 0.14rem;
        img {
          width: 0.6rem;
          height: 0.6rem;
          float: left;
          margin: 0.05rem 0.07rem 0;
        }
      }
    }
  }
  .box_2 {
    display: flex;
    .b2_item {
      width: 25%;
      padding: 0.06rem 0 0.05rem 0.1rem;
      .image {
        width: 0.6rem;
        height: 0.6rem;
        margin: 0.05rem 0.04rem 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .title {
    height: 0.38rem;
    padding: 0 0 0 0.09rem;
    p {
      font-size: 0.12rem;
      &:nth-of-type(1) {
        font-size: 0.16rem;
        font-weight: 700;
      }
    }
  }
}
</style>