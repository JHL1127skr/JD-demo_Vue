<template>
  <div class="nav">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <img :src="item.img" alt="" />
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "京东超市",
          img: require("../../assets/images/Home/Nav/01.webp"),
        },
        {
          title: "数码电器",
          img: require("../../assets/images/Home/Nav/02.webp"),
        },
        {
          title: "京东服饰",
          img: require("../../assets/images/Home/Nav/03.webp"),
        },
        {
          title: "京东生鲜",
          img: require("../../assets/images/Home/Nav/04.webp"),
        },
        {
          title: "京东到家",
          img: require("../../assets/images/Home/Nav/05.webp"),
        },
        {
          title: "充值缴费",
          img: require("../../assets/images/Home/Nav/06.webp"),
        },
        {
          title: "9.9元拼",
          img: require("../../assets/images/Home/Nav/07.webp"),
        },
        {
          title: "领券",
          img: require("../../assets/images/Home/Nav/08.webp"),
        },
        {
          title: "借钱",
          img: require("../../assets/images/Home/Nav/09.webp"),
        },
        {
          title: "PLUS会员",
          img: require("../../assets/images/Home/Nav/10.webp"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        margin-top: 0.1rem;
        width: 0.4rem;
        height: 0.4rem;
        border: 0;
        vertical-align: top;
      }
      span {
        display: block;
        margin-top: 0.06rem;
        font-size: 0.12rem;
        color: #666;
      }
    }
  }
}
</style>