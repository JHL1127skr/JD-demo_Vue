<template>
  <div class="Guess" ref="Guess">
    <div class="goodsList">
      <ul>
        <router-link
          :to="{
            name: 'Detail',
            query: {
              id: item._id,
              ran: item.randomNum,
            },
          }"
          tag="li"
          v-for="item in list"
          :key="item._id"
        >
          <div class="cover">
            <img :src="item.coverImg" alt="" />
            <div class="goodsDecoration" v-if="!item.type_msgFlag">抢购中</div>
          </div>
          <div class="info">
            <div class="name">
              <i>
                <img :src="type_img[item.randomNum]" alt="" />
              </i>
              {{ item.name }}
            </div>
            <div class="price-w">
              <div class="price_info">
                <div class="price">
                  ¥
                  <em>{{ item.price / 100 }}</em>
                </div>
                <div class="price_type" v-if="item.type_msgFlag">
                  <span>{{ type_msg[item.randomNum] }}</span>
                </div>
              </div>
              <div class="buyCart"></div>
            </div>
          </div>
        </router-link>
      </ul>
    </div>

    <div class="loading" v-show="$store.state.LoadingFlag">
      <van-loading size="24px">加载中...</van-loading>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Loading } from "vant";
Vue.use(Loading);
import { get } from "../../utils/request";
export default {
  data() {
    return {
      type_img: [
        require("../../assets/images/Shopcart/Guess/type/ziying.webp"),
        require("../../assets/images/Shopcart/Guess/type/jd_wuliu.webp"),
        require("../../assets/images/Shopcart/Guess/type/jd_chaoshi.webp"),
        require("../../assets/images/Shopcart/Guess/type/jd_jingxuan.webp"),
        "",
      ],
      type_msg: ["秒杀", "闪购", "", "满减", "券"],
      list: [],
      page: 1,
    };
  },
  async created() {
    const result = await get("/api/v1/products", {
      page: this.page,
    });
    if (result.status == 200) {
      // console.log(result);
      this.list = result.data.products;
      this.list.forEach((v) => {
        v.randomNum = Math.floor(Math.random() * 5);
        v.type_msgFlag = true;
        if (v.randomNum == "2") {
          v.type_msgFlag = false;
        }
      });
    }
  },
  mounted() {
    let parent = this.$parent.$el;
    parent.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // 获取最外层的dom元素
      let parent = this.$parent.$el;
      //判断有没有滚到底部
      let judge =
        parent.scrollHeight - Math.ceil(parent.scrollTop) ==
        parent.clientHeight;
      let scroll_times;

      if (judge) {
        this.$store.commit("changeLoadingFlagT");
        clearTimeout(scroll_times);
        scroll_times = setTimeout(() => {
          this.page++;
          this.onLoad();
        }, 1000);
      }
    },
    async onLoad() {
      const resultadd = await get("/api/v1/products", { page: this.page });
      if (resultadd.status == 200) {
        this.$store.commit("changeLoadingFlagF");
        resultadd.data.products.forEach((v) => {
          this.list.push(v);
        });
        this.list.forEach((v) => {
          v.randomNum = Math.floor(Math.random() * 5);
          v.type_msgFlag = true;
          if (v.randomNum == "2") {
            v.type_msgFlag = false;
          }
        });
        // console.log(this.list);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  background-color: #f6f6f6;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.goodsList {
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 50%;
      background-color: #fff;
      margin-bottom: 1px;
      padding: 15px 15px 0;
      position: relative;
      border-radius: 10px;
      .cover {
        position: relative;
        overflow: hidden;
        padding-top: 100%;
        height: 0;
        img {
          position: absolute;
          max-width: 100%;
          max-height: 100%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .goodsDecoration {
          text-align: center;
          background: rgba(233, 59, 61, 0.7);
          color: #fff;
          line-height: 0.21rem;
          font-size: 12px;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
      }
      .info {
        .name {
          margin: 12px 0 4px;
          font-size: 12px;
          color: #333;
          line-height: 18px;
          height: 36px;
          overflow: hidden;
          text-overflow: ellipsis;
          line-clamp: 2;
          box-orient: vertical;
          i {
            display: inline-block;
            vertical-align: middle;
            height: 14px;
            margin-right: 3px;
            margin-top: -2px;
            img {
              display: block;
              height: 100%;
            }
          }
        }
        .price-w {
          display: flex;
          .price_info {
            flex: 1;
            .price {
              display: inline-block;
              font-size: 0.12rem;
              color: #e93b3d;
              margin-right: 3px;
              line-height: 20px;
              em {
                font-size: 0.16rem;
                font-style: normal;
              }
            }
          }
          .price_type {
            display: inline-block;
            color: #e4393c;
            position: relative;
            border-radius: 2px;
            min-width: 16px;
            font-size: 10px;
            line-height: 15px;
            vertical-align: middle;
            margin-top: -2px;
            margin-right: 5px;
            margin-left: 3px;
            text-align: center;
            span {
              display: inline-block;
              background: #fff;
              padding: 0 3px;
            }
            &::after {
              content: "";
              display: block;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              pointer-events: none;
              border-radius: 2px;
              border: 1px solid #e4393c;
            }
          }
          .buyCart {
            width: 30px;
            height: 24px;
            background: url("../../assets/images/Shopcart/Guess/buy.png")
              no-repeat 50%;
            background-size: 15px;
          }
        }
      }
    }
  }
}
</style>