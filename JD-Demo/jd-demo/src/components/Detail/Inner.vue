<template>
  <div class="inner">
    <div class="images">
      <ul>
        <li>
          <img :src="goods.coverImg" alt="" />
        </li>
      </ul>
      <img
        class="newYear"
        src="../../assets/images/Detail/inner/newYear.webp"
        alt=""
      />
    </div>
    <div class="banner">
      <img src="../../assets/images/Detail/inner/newBanner.webp" alt="" />
    </div>
    <div class="content">
      <div class="price">
        <div class="original">
          <span>¥</span>
          <span>{{ goods.price / 100 }}</span>
          <span>.00</span>
        </div>
        <div class="plus">{{ "¥" + (goods.price / 100 - 17) + ".00" }}</div>
        <div class="plus_img"></div>
        <div class="depreciate span">
          <span>收藏</span>
        </div>
        <div class="collect span">
          <span>降价提醒</span>
        </div>
      </div>
      <div class="plus_reg">
        <span>开PLUS年卡再省<i>¥22.53</i>，还享肯德基65折起</span>
        <span>查看优惠</span>
      </div>
      <div class="desc">
        <p
          class="type"
          v-show="$route.query.ran == 2 || $route.query.ran == 3 ? true : false"
        >
          <img :src="type_img[$route.query.ran]" alt="" />
          {{ type_title[$route.query.ran] }}
        </p>
        <p class="name">
          <img
            src="../../assets/images/Shopcart/Guess/type/ziying.webp"
            alt=""
          />{{ goods.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["goods"],
  data() {
    return {
      type_img: [
        "",
        "",
        require("../../assets/images/Shopcart/Guess/type/jd_chaoshi.webp"),
        require("../../assets/images/Shopcart/Guess/type/jd_jingxuan.webp"),
      ],
      type_title: ["", "", "一站式囤生活好物", "品类好物指南"],
    };
  },
};
</script>

<style lang="scss" scoped>
.images {
  position: relative;
  ul {
    li {
      img {
        width: 100%;
        display: block;
      }
    }
  }
  .newYear {
    width: 1rem;
    height: 0.8rem;
    position: absolute;
    top: 15%;
    right: 0;
  }
}
.banner {
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
}
.content {
  background: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  overflow: hidden;
  .price {
    padding: 0 18px;
    line-height: 20px;
    margin-top: 12px;
    position: relative;
    font-size: 0.16rem;
    .original {
      line-height: 30px;
      color: #f2270c;
      display: inline-block;
      span {
        &:nth-of-type(2) {
          font-size: 0.3rem;
        }
        &:nth-of-type(3) {
          font-style: 0.18rem;
          font-weight: 700;
        }
      }
    }
    .plus {
      font-size: 0.16rem;
      margin-left: 5px;
      display: inline-block;
      color: #333;
      font-weight: 550;
    }
    .plus_img {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      margin: -2px 0 0 1px;
      width: 23px;
      height: 12px;
      background: #4e4d4c url("../../assets/images/Detail/inner/plus.png") 50%
        no-repeat;
      background-size: 20px;
    }
    .span {
      width: 40px;
      height: 32px;
      float: right;
      position: relative;
      span {
        position: absolute;
        bottom: 7px;
        height: 10px;
        width: 40px;
        font-size: 9px;
        color: #262626;
        text-align: center;
        &::after {
          background-size: 100%;
          border: none;
          content: "";
          position: absolute;
          top: -170%;
          width: 18px;
          height: 18px;
          left: 50%;
          -webkit-transform: translate(-50%);
          transform: translate(-50%);
        }
      }
    }
  }
  .depreciate {
    span {
      &::after {
        background: url("../../assets/images/Detail/inner/collect.png")
          no-repeat;
      }
    }
  }
  .collect {
    span {
      &::after {
        background: url("../../assets/images/Detail/inner/depreciate.png")
          no-repeat;
      }
    }
  }
  .plus_reg {
    margin: 10px 18px;
    background: #fcf9da;
    display: flex;
    align-items: center;
    position: relative;
    color: #262626;
    height: auto;
    padding: 9px 20px 9px 10px;
    line-height: 18px;
    overflow: hidden;
    border-radius: 6px;
    font-size: 0.12rem;
    i {
      color: #f2270c;
    }
    span {
      &:nth-of-type(2) {
        font-family: "icomoon";
        position: absolute;
        right: 0.1rem;
        top: calc(50% - 10px);
      }
    }
  }
  .desc {
    padding: 12px 18px;
    position: relative;
    .type {
      font-size: 13px;
      color: #262626;
      min-height: 18px;
      margin-bottom: 12px;
      img {
        height: 13px;
        vertical-align: middle;
      }
    }
    .name {
      font-weight: 700;
      line-height: 21px;
      img {
        height: 13px;
        vertical-align: middle;
        margin-right: 5px;
      }
    }
  }
}
</style>