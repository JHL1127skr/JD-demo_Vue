<template>
  <div class="TopNav">
    <div class="left-back" @click="routerBack"></div>
    <div class="title">{{ TopTitle }}</div>
    <div class="right-menu" @click="popupsFlag = !popupsFlag"></div>
    <div class="popups" v-show="popupsFlag">
      <div class="po-item type_index" @click="$router.push({ name: 'Home' })">
        首页
      </div>
      <div
        class="po-item type_search"
        @click="$router.push({ name: 'Classify' })"
      >
        分类搜索
      </div>
      <div class="po-item type_shopcart">购物车</div>
      <div class="po-item type_my" @click="$router.push({ name: 'User' })">
        我的京东
      </div>
      <div class="po-item type_recently">浏览记录</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["TopTitle"],
  data() {
    return {
      popupsFlag: false,
    };
  },
  mounted() {
    let parent = this.$parent.$el;
    parent.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let parent = this.$parent.$el;
      if (parent.scrollTop > 0) {
        this.popupsFlag = false;
      }
    },
    routerBack() {
      this.$router.back();
    },
  },
};
</script>

<style  lang="scss" scoped>
.TopNav {
  display: flex;
  width: 100%;
  height: 44px;
  background-color: #f6f6f6;
  .left-back,
  .right-menu {
    width: 0.44rem;
    height: 0.44rem;
    line-height: 0.44rem;
    text-align: center;
    font-family: "icomoon";
    font-size: 0.28rem;
  }
  .title {
    line-height: 0.44rem;
    text-align: center;
    font-size: 0.18rem;
    flex: 1;
  }
  .popups {
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 4px;
    width: 125px;
    position: absolute;
    right: 10px;
    top: 53px;
    z-index: 20;
    &::before {
      position: absolute;
      top: -5px;
      right: 7px;
      content: "";
      width: 0;
      height: 0;
      border-color: transparent transparent rgba(0, 0, 0, 0.9);
      border-style: solid;
      border-width: 0 5px 5px;
    }
    .po-item {
      display: block;
      color: #fff;
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      position: relative;
      padding-left: 40px;
      background: no-repeat 13px;
      background-size: 15px;
      &:nth-of-type(n + 1) {
        &::before {
          content: "";
          position: absolute;
          z-index: 1;
          pointer-events: none;
          background-color: hsla(0, 0%, 100%, 0.2);
          height: 1px;
          left: 40px;
          right: 0;
          top: 0;
        }
      }
    }
    .type_recently {
      background-image: url("../assets/images/Shopcart/hearnav/recently.png");
    }
    .type_my {
      background-image: url("../assets/images/Shopcart/hearnav/my.png");
    }
    .type_shopcart {
      background-image: url("../assets/images/Shopcart/hearnav/shopcart.png");
    }
    .type_index {
      background-image: url("../assets/images/Shopcart/hearnav/index.png");
    }
    .type_search {
      background-image: url("../assets/images/Shopcart/hearnav/search.png");
    }
  }
}
</style>