<template>
  <div class="ClassifyList">
    <ul class="list">
      <router-link
        exact
        tag="li"
        :to="{
          name: 'xq',
          query: { id: item.id },
        }"
        v-for="(item, index) in list"
        :key="index"
        >{{ item.title }}</router-link
      >
    </ul>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "热门推荐",
          id: 0,
        },
        {
          title: "手机数码",
          id: 1,
        },
        {
          title: "电脑办公",
          id: 2,
        },
        {
          title: "家用电器",
          id: 3,
        },
        {
          title: "计生情趣",
          id: 4,
        },
        {
          title: "美妆护肤",
          id: 5,
        },
        {
          title: "个护清洁",
          id: 6,
        },
        {
          title: "汽车生活",
          id: 7,
        },
        {
          title: "京东超市",
          id: 8,
        },
        {
          title: "男装",
          id: 9,
        },
        {
          title: "女装",
          id: 10,
        },
        {
          title: "女鞋",
          id: 11,
        },
        {
          title: "母婴童装",
          id: 12,
        },
        {
          title: "运动户外",
          id: 13,
        },
        {
          title: "内衣配饰",
          id: 14,
        },
        {
          title: "食品生鲜",
          id: 15,
        },
        {
          title: "酒水饮料",
          id: 16,
        },
        {
          title: "家具家装",
          id: 17,
        },
        {
          title: "家具厨具",
          id: 18,
        },

        {
          title: "箱包手袋",
          id: 19,
        },
        {
          title: "钟表珠宝",
          id: 20,
        },
        {
          title: "玩具乐器",
          id: 21,
        },
        {
          title: "医药保健",
          id: 22,
        },
        {
          title: "农资绿植",
          id: 23,
        },
        {
          title: "生活旅行",
          id: 24,
        },
        {
          title: "奢侈品",
          id: 25,
        },
        {
          title: "京东国际",
          id: 26,
        },
        {
          title: "艺术邮票",
          id: 27,
        },
        {
          title: "二手商品",
          id: 28,
        },
        {
          title: "特产馆",
          id: 29,
        },
        {
          title: "京东金融",
          id: 30,
        },
        {
          title: "国际名牌",
          id: 31,
        },
        {
          title: "拍卖",
          id: 32,
        },
        {
          title: "房产",
          id: 33,
        },
        {
          title: "工业品",
          id: 34,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.ClassifyList {
  margin-top: 44px;
  height: calc(100% - 44px);
  display: flex;
  .list {
    width: 27%;
    overflow-y: auto;
    li {
      height: 46px;
      text-align: center;
      line-height: 46px;
      background-color: #f8f8f8;
      color: #333;
      width: 100%;
      font-size: 0.14rem;
    }
    .router-hover {
      color: #e93b3d;
      background-color: #fff;
    }
  }
  .content {
    background-color: #fff;
    flex: 1;
    overflow-y: auto;
  }
}
</style>