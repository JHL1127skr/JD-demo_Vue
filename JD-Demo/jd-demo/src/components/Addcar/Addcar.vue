<template>
  <div
    class="addcar"
    v-show="this.$store.state.AddCarFlag"
    @click.self="$store.commit('changeAddCarFlag')"
  >
    <transition>
      <div class="content" v-show="this.$store.state.AddCarFlag">
        <div class="header">
          <img :src="goods.coverImg" alt="" />
          <div class="desc">
            <div class="price">
              <div class="original">
                <span>¥</span>
                <span>{{ goods.price / 100 }}</span>
                <span>.00</span>
              </div>
              <div class="plus">
                {{ "¥" + (goods.price / 100 - 17) + ".00" }}
              </div>
              <div class="plus_img"></div>
            </div>
            <div class="select">
              <span class="yixuan">已选</span>
              <span>{{ content }}</span
              >, <span>{{ value }}</span
              >个
            </div>
          </div>
          <div class="del" @click.self="$store.commit('changeAddCarFlag')">
            
          </div>
        </div>
        <div class="type">
          <div class="ty_ti">颜色</div>
          <ul class="list">
            <li
              v-for="item in list"
              :key="item.id"
              @click="change(item.id, item.title)"
              :class="changeId == item.id ? 'change' : ''"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
        <div class="num">
          <span>数量</span>
          <div class="Add">
            <span> <span @click="value--" v-show="value > 1">-</span></span>
            <input type="tel" :value="value" />
            <span @click="value++">+</span>
          </div>
        </div>
        <div class="btn">
          <div class="confirm" @click="Addcar">确认</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { post } from "../../utils/request";
export default {
  props: ["goods"],
  data() {
    return {
      value: 1,
      changeId: "",
      content: "01---xxxxxxx",
      list: [
        {
          id: 0,
          title: "01---xxxxxxx",
        },
        {
          id: 1,
          title: "02---xxxxxxxxxxxxxxx",
        },
        {
          id: 2,
          title: "03---xxxxxxxxxx",
        },
        {
          id: 3,
          title: "04---xxxxxxxxxxxxxxxxxxxxxxxxx",
        },
        {
          id: 4,
          title: "05---xxxxxxxxxxxxx",
        },
      ],
    };
  },
  methods: {
    change(i, v) {
      this.changeId = i;
      this.content = v;
    },
    async Addcar() {
      if (localStorage.getItem("token")) {
        try {
          const result = await post("/api/v1/shop_carts", {
            header: { authorization: "Bearer" + localStorage.getItem("token") },
            product: this.goods._id,
            quantity: this.value,
          });
          if (result.status == 200) {
            if (result.data.code == "success") {
              this.$store.commit("changeAddCarFlag");
              this.$store.dispatch("asyncChangeAdd");
              this.$store.commit("changeCarListNum");
            }
          }
        } catch (error) {
          this.$router.push({ name: "Register" });
        }
      } else {
        this.$router.push({
          name: "Register",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-enter,
.v-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
.addcar {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 999;
  background-color: rgba($color: #000000, $alpha: 0.6);
  bottom: 0;
  transform: translateZ(0);
}
.content {
  width: 100%;
  min-height: 400px;
  max-height: 555px;
  background-color: #fff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  z-index: 9999;
  .header {
    height: 118px;
    margin-bottom: 18px;
    padding: 0 0 0 130px;
    text-align: left;
    position: relative;
    img {
      position: absolute;
      left: 18px;
      top: 18px;
      border-radius: 6px;
      width: 100px;
      height: 100px;
    }
    .del {
      position: absolute;
      width: 20px;
      height: 20px;
      font-family: "icomoon";
      right: 15px;
      top: 15px;
      display: flex;
      font-size: 0.14rem;
      color: #8f8f8f;
      justify-content: center;
      align-items: center;
      background-color: #f2f2f2;
      border-radius: 50%;
    }
    .desc {
      position: absolute;
      bottom: 0;
    }
    .select {
      font-size: 0.12rem;
      color: #333;
      line-height: 1;
      padding-right: 10px;
      .yixuan {
        margin-right: 10px;
        color: #8c8c8c;
      }
    }
  }
  .type {
    .ty_ti {
      font-size: 0.13rem;
      color: #262626;
      margin: 0 18px;
      font-weight: 700;
      height: 40px;
      line-height: 40px;
    }
    ul {
      padding: 0 6px;
      overflow: hidden;
      li {
        padding: 0 18px;
        min-width: 20px;
        max-width: 270px;
        overflow: hidden;
        height: 30px;
        line-height: 30px;
        float: left;
        text-align: center;
        margin-left: 12px;
        margin-bottom: 10px;
        font-size: 11px;
        color: #262626;
        background: #f2f2f2;
        border-radius: 15px;
        border: 1px solid transparent;
      }
      .change {
        background: #fcedeb;
        border: 1px solid #f2270c;
        font-size: 11px;
        color: #f2270c;
        font-weight: 700;
      }
    }
  }
  .num {
    font-size: 0.13rem;
    color: #262626;
    margin: 0 18px;
    font-weight: 700;
    height: 40px;
    line-height: 40px;
    .Add {
      position: relative;
      z-index: 0;
      width: 66px;
      float: right;
      vertical-align: middle;
      display: flex;
      height: 20px;
      span {
        text-align: center;
        line-height: 0.2rem;
        width: 15px;
        height: 20px;
      }
      input {
        flex: 1;
        width: 100%;
        border: none;
        outline: none;
        text-align: center;
      }
    }
  }
  .btn {
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    padding: 6px 19px;
    .confirm {
      height: 100%;
      width: 100%;
      border-radius: 20px;
      background-image: linear-gradient(135deg, #f2140c, #f2270c 70%, #f24d0c);
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      font-size: 0.13rem;
    }
  }
}
.price {
  height: 40px;
  line-height: 40px;
  position: relative;
  font-size: 0.12rem;
  .original {
    line-height: 36px;
    color: #f2270c;
    display: inline-block;
    span {
      &:nth-of-type(2) {
        font-size: 0.24rem;
      }
      &:nth-of-type(3) {
        font-style: 0.12rem;
        font-weight: 700;
      }
    }
  }
  .plus {
    font-size: 0.12rem;
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
}
</style>