<template>
  <div class="youlike" ref="like">
    <div class="title">猜你喜欢</div>
    <ul class="list">
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
        <img :src="item.coverImg" alt="" />
        <div class="name">{{ item.name }}</div>
        <div class="price_w">
          <div class="price">
            ¥ <span>{{ item.price / 100 }}</span
            >.00
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { get } from "../../utils/request";
export default {
  data() {
    return {
      list: [],
    };
  },
  async created() {
    const result = await get("/api/v1/products", { page: this.page });
    if (result.status == 200) {
      for (let i = 0; i < 6; i++) {
        this.list.push(result.data.products[i]);
      }
      this.list.forEach((v) => {
        v.randomNum = Math.floor(Math.random() * 5);
        v.type_msgFlag = true;
        if (v.randomNum == "2") {
          v.type_msgFlag = false;
        }
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.youlike {
  background-color: #fff;
  border-radius: 12px;
  padding-top: 3px;
  margin-top: 12px;
  padding: 0 18px;
  overflow: hidden;
  .title {
    position: relative;
    color: #262626;
    font-size: 15px;
    height: 45px;
    line-height: 45px;
    background-color: #fff;
    padding-left: 7px;
    font-weight: 700;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 15px;
      background-image: linear-gradient(180deg, #f5503a, #fad1cb);
    }
  }
  .list {
    position: relative;
    font-size: 0;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      position: relative;
      list-style-type: none;
      float: left;
      width: 32.16%;
      margin-top: 5px;
      img {
        position: relative;
        width: 100%;
        border-radius: 6px;
        overflow: hidden;
        display: block;
      }
      .name {
        padding: 7px 0 0;
        height: 36px;
        line-height: 1.3em;
        color: #333;
        font-size: 12px;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .price_w {
        position: relative;
        height: 26px;
        line-height: 26px;
        font-weight: 650;
        .price {
          color: #f2270c;
          font-size: 0.12rem;
          span {
            font-size: 0.16rem;
          }
        }
      }
    }
  }
}
</style>