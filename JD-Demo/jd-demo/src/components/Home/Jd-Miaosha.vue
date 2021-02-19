<template>
  <div class="jd-miaosha">
    <div class="content">
      <div class="head">
        <div class="head-t">京东秒杀</div>
        <div class="countdown">
          <div class="time">20点场</div>
          <van-count-down :time="time" class="djs">
            <template #default="timeData">
              <span class="block">{{ timeData.hours }}</span>
              <span class="block">{{ timeData.minutes }}</span>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
        <span></span>
      </div>
      <div class="seckill">
        <router-link
          :to="{
            name: 'Detail',
            query: {
              id: item._id,
              ran: item.randomNum,
            },
          }"
          class="seckill-item"
          v-for="item in list"
          :key="item._id"
        >
          <div class="seckill-item-img">
            <img class="imges" :src="item.coverImg" alt="" />
          </div>
          <p class="seckill-item-price">
            ¥{{ item.price / 100 }}
            <span class="del"
              >¥{{ parseInt((item.price / 100) * item.randomPrice) }}</span
            >
          </p>
        </router-link>
        <div class="btn">
          <span>查看更多</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "../../utils/request";
export default {
  async created() {
    const result = await get("/api/v1/products", { page: 2 });
    if (result.status == 200) {
      this.list = result.data.products;
      this.list.forEach((v) => {
        v.randomNum = Math.floor(Math.random() * 5);
        v.randomPrice = (Math.random() + 1).toFixed(1);
      });
    }
  },
  data() {
    return {
      list: "",
      time: 3 * 60 * 60 * 1000,
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  background-color: #fff;
  border-radius: 0.15rem;
  margin: 0.1rem;
  .head {
    display: flex;
    height: 0.3rem;
    line-height: 0.3rem;
    .head-t {
      font-size: 16px;
      color: #333;
      margin: 0 10px 0 15px;
      font-weight: 700;
    }
    .countdown {
      flex: 1;
      display: flex;
      .time {
        color: #999;
        font-size: 12px;
      }
      .djs {
        width: 65px;
        display: flex;
        align-items: center;
        color: #f2270c;
        .block {
          line-height: 16px;
          display: inline-block;
          color: #f2270c;
          font-size: 12px;
          background-color: #fff;
          box-sizing: content-box;
          height: 16px;
          text-align: center;
          position: relative;
          margin-left: 5px;
          background: url("../../assets/images/Shopcart/miaosha/time.png")
            no-repeat 50%;
          background-size: 15px;
          border-radius: 2px;
          overflow: hidden;
          border: 1px solid #ccc;
          box-shadow: 0 1px 2px hsla(0, 0%, 66.7%, 0.2);
        }
      }
    }
    span {
      position: relative;
      display: block;
      color: #999;
      font-family: "icomoon";
      width: 30px;
      text-align: center;
    }
  }
  .seckill {
    position: relative;
    padding: 0 10px 10px;
    font-size: 0;
    font-family: none;
    white-space: nowrap;
    overflow: hidden;
    overflow-x: auto;
    .seckill-item {
      display: inline-block;
      position: relative;
      text-align: center;
      width: 17%;
      padding: 0 5px 5px;
      border-radius: 4px;
      .seckill-item-img {
        position: relative;
        height: 0;
        overflow: hidden;
        padding-top: 100%;
        .imges {
          width: 100%;
          height: auto;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 4px;
        }
      }
      .seckill-item-price {
        font-size: 0.12rem;
        margin-top: 5px;
        color: #f2270c;
        .del {
          display: block;
          font-size: 12px;
          color: #ccc;
          line-height: 1;
          text-decoration: line-through;
        }
      }
    }
    .btn {
      display: inline-block;
      height: 0.9rem;
      width: 0.35rem;
      right: 0;
      padding: 0;
      background-color: #f7f7f7;
      position: relative;
      text-align: center;
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.12rem;
        white-space: normal;
        width: 0.13rem;
        color: #999;
        font-family: "icomoon";
      }
    }
  }
}
</style>