<template>
  <div
    class="TopNav"
    :style="{
      backgroundColor: TopFlag ? '#fff' : 'transparent',
      borderColor: TopFlag ? '#e5e5e5' : 'transparent',
    }"
  >
    <div class="left-back" @click="routerBack">
      <span :class="TopFlag ? '' : 'zero'"></span>
    </div>
    <div class="title">
      <div class="content" v-show="TopFlag" ref="span">
        <span @click="clickFlag ? backScroll(0, $event) : ''" class="select"
          >商品</span
        >
        <span @click="clickFlag ? backScroll(666, $event) : ''">评价</span>
        <span @click="clickFlag ? backScroll(804, $event) : ''">推荐</span>
        <span @click="clickFlag ? backScroll(1213, $event) : ''">详情</span>
      </div>
    </div>
    <div class="right-menu" @click="popupsFlag = !popupsFlag">
      <span :class="TopFlag ? '' : 'zero'"></span>
    </div>
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
      <div class="po-item type_share">分享</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TopFlag: false,
      popupsFlag: false,
      clickFlag: true,
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
        this.TopFlag = true;
        // console.log(this.$refs.span.children);
      } else {
        this.TopFlag = false;
      }
    },
    backScroll(v, e) {
      let parent = this.$parent.$el;
      [...e.path[1].children].map((v) => v.classList.remove("select"));
      e.target.classList.add("select");
      this.clickFlag = false;
      let time = setInterval(() => {
        let sped = (v - parseInt(parent.scrollTop)) / 10;
        //目标值  减去元素大小
        sped = sped > 0 ? Math.ceil(sped) : Math.floor(sped);
        //判断 正负值 向上向下取整
        parent.scrollTop = parent.scrollTop + sped;
        if (parseInt(parent.scrollTop) == v) {
          clearInterval(time);
          this.clickFlag = true;
        }
      }, 30);
    },
    routerBack() {
      this.$router.back();
    },
  },
};
</script>

<style  lang="scss" scoped>
.select {
  font-weight: 700;
  position: relative;
  &::after {
    display: block;
    position: absolute;
    content: "";
    width: 28px;
    height: 3px;
    left: 50%;
    transform: translateX(-50%);
    background-image: linear-gradient(90deg, #f5503a, #fad1cb);
    bottom: 6px;
  }
}
.TopNav {
  z-index: 999;
  display: flex;
  width: 100%;
  height: 44px;
  border-bottom: 1px solid transparent;
  transition: all 0.5s;
  .zero {
    width: 0.33rem;
    height: 0.33rem;
    border-radius: 50%;
    line-height: 0.33rem;
    background-color: #666666;
    font-family: "icomoon";
    font-size: 0.28rem;
    text-align: center;
    color: #fff;
    transition: background 0.5s;
  }
  .left-back,
  .right-menu {
    transition: all 0.5s;
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
    .content {
      width: 100%;
      padding: 0 0.22rem;
      height: 100%;
      display: flex;
      span {
        flex: 1;
        font-size: 0.14rem;
      }
    }
  }
  .popups {
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 4px;
    width: 125px;
    position: absolute;
    right: 10px;
    top: 53px;
    z-index: 999;
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
      background-image: url("../../assets/images/Shopcart/hearnav/recently.png");
    }
    .type_my {
      background-image: url("../../assets/images/Shopcart/hearnav/my.png");
    }
    .type_shopcart {
      background-image: url("../../assets/images/Shopcart/hearnav/shopcart.png");
    }
    .type_index {
      background-image: url("../../assets/images/Shopcart/hearnav/index.png");
    }
    .type_search {
      background-image: url("../../assets/images/Shopcart/hearnav/search.png");
    }
    .type_share {
      background-image: url("../../assets/images/Shopcart/hearnav/share.png");
    }
  }
}
</style>