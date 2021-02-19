<template>
  <div class="carList">
    <div class="header">
      <span
        :class="$store.getters.isCheckAll ? 'checked' : 'unchecked'"
        @click="$store.commit('CheckAll')"
      ></span>
      <i></i>
      <div class="title">京东自营</div>
    </div>
    <div
      class="item"
      v-for="(item, index) in $store.state.CartGoods"
      :key="index"
    >
      <div class="goods">
        <span
          :class="
            $store.state.CarListCheckbox.includes(item._id)
              ? 'checked'
              : 'unchecked'
          "
          @click="$store.commit('Check', item._id)"
        ></span>
        <router-link
          :to="{
            name: 'Detail',
            query: {
              id: item.product._id,
            },
          }"
          tag="div"
          class="image"
        >
          <img :src="item.product.coverImg" alt="" />
        </router-link>
        <div class="content">
          <div class="name">
            {{ item.product.name }}
          </div>
          <div class="id">
            <div class="id_inner">ID:{{ item.product._id }}</div>
          </div>
          <div class="price_line">
            <div class="price">
              ¥<span>{{ item.product.price / 100 }}</span
              >.00
            </div>
            <div class="num">
              <span
                @click="item.quantity >= 2 ? item.quantity-- : ''"
                :class="item.quantity == 1 ? 'sub_0' : 'sub_1'"
              ></span>
              <input type="tel" :value="item.quantity" />
              <span
                @click="
                  add(item.product._id);
                  item.quantity++;
                "
                class="add"
              ></span>
            </div>
          </div>
          <div class="del">
            <span>移入关注</span>
            <span @click="$store.commit('GoodsDelFlagT', item._id)">删除</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { post } from "../../utils/request";
export default {
  data() {
    return {
      checkedFlag: true,
    };
  },
  methods: {
    add(id) {
      post("/api/v1/shop_carts", {
        product: id,
        quantity: 1,
      });
    },
  },

  async created() {
    if (localStorage.getItem("token")) {
      this.$store.commit("changeCarList");
    }
  },
};
</script>

<style lang='scss' scoped>
.carList {
  position: relative;
  padding: 0.12rem 0 1px;
  border-radius: 0.1rem;
  background: #fff;
  color: #262626;
  margin-top: 0.12rem;
  .unchecked,
  .checked {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.18rem;
    width: 31px;
    height: 31px;
    background-image: url(../../assets/images/Shopcart/Carlist/unchecked.png);
    background-size: 31px 31px;
  }
  .checked {
    background-image: url(../../assets/images/Shopcart/Carlist/checked.png);
  }
  .header {
    padding: 0.06rem 0.18rem 0.06rem 0.5rem;
    margin-bottom: 0.12rem;
    display: flex;
    position: relative;
    i {
      margin-right: 6px;
      width: 14px;
      height: 14px;
      background: url(../../assets/images/Shopcart/Carlist/jd_icon.png) 0 0/14px
        14px no-repeat;
    }
    .title {
      color: #333;
      font-size: 0.12rem;
      font-weight: 600;
    }
  }
  .item {
    margin: 0.12rem 0 0.18rem;
    .goods {
      z-index: 1;
      position: relative;
      padding: 0 0.18rem 0 1.62rem;
      background: #fff;
      .image {
        position: absolute;
        left: 0.5rem;
        top: 0;
        width: 1rem;
        height: 1rem;
        overflow: hidden;
        box-shadow: 0 0.04rem 0.12rem 0 rgba(0, 0, 0, 0.05);
        border-radius: 0.06rem;
        img {
          width: 100%;
        }
      }
      .content {
        .name {
          font-size: 0.12rem;
          margin-bottom: 0.06rem;
          word-break: break-all;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-height: 1.5;
          -webkit-box-orient: vertical;
        }
        .id {
          display: flex;
          margin: 0.06rem 0 0;
          font-size: 0.1rem;
          .id_inner {
            max-width: 1.5rem;
            position: relative;
            background: #f2f2f2;
            padding: 0 0.15rem 0 0.06rem;
            height: 0.16rem;
            line-height: 0.16rem;
            font-size: 0.1rem;
            color: #262626;
            border-radius: 0.08rem;
            overflow: hidden;
          }
        }
        .price_line {
          position: relative;
          display: flex;
          align-items: center;
          margin: 5px 0 0;
          justify-content: space-between;
          font-size: 10px;
          height: 0.26rem;
          .price {
            flex: 1;
            color: #f2270c;
            font-size: 0.12rem;
            span {
              font-size: 0.18rem;
            }
          }
          .num {
            position: relative;
            z-index: 0;
            width: 76px;
            float: right;
            vertical-align: middle;
            display: flex;
            height: 20px;
            span {
              text-align: center;
              line-height: 0.2rem;
              width: 20px;
              height: 20px;
              font-weight: 800;
              font-size: 0.16rem;
            }
            .add {
              background: url(../../assets/images/Shopcart/Carlist/add.png)
                no-repeat 70%;
              background-size: 0.15rem 0.15rem;
            }
            .sub_0 {
              background: url(../../assets/images/Shopcart/Carlist/sub-1.png)
                no-repeat 70%;
              background-size: 0.15rem 0.15rem;
            }
            .sub_1 {
              background: url(../../assets/images/Shopcart/Carlist/sub-0.png)
                no-repeat 70%;
              background-size: 0.15rem 0.15rem;
            }
            input {
              flex: 1;
              width: 100%;
              border: none;
              outline: none;
              text-align: center;
              background-color: #f2f2f2;
              font-size: 0.1rem;
            }
          }
        }
        .del {
          margin: 10px 0 0;
          height: 15px;
          font-size: 0;
          text-align: right;
          span {
            position: relative;
            padding: 0 10px;
            line-height: 15px;
            font-size: 10px;
            &:nth-of-type(1) {
              &::after {
                content: "";
                position: absolute;
                z-index: 1;
                pointer-events: none;
                background-color: #262626;
                width: 1px;
                transform: scaleX(0.5);
                top: 0;
                bottom: 0;
                right: 0;
                top: 2px;
                bottom: 2px;
              }
            }
          }
        }
      }
    }
  }
}
</style>