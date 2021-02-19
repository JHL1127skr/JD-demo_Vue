<template>
  <div class="verification" @click.self="x">
    <div class="content">
      <div class="header">
        安全验证
        <span @click="random"></span>
      </div>
      <div class="body">
        <img
          :src="verImg[ImgNum].bigImg"
          @click="choice(verImg[ImgNum].coordinate, $event)"
        />
        <div class="img-box b-false" v-if="isFlag[0]">
          <p></p>
          <span>验证失败，请重新验证</span>
        </div>
        <div class="img-box b-true" v-if="isFlag[1]">
          <p></p>
          <span>验证成功</span>
        </div>
      </div>
      <div class="footer">
        <p>请点击上图中的：</p>
        <img :src="verImg[ImgNum].smallImg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showFlag"],
  data() {
    return {
      props: ["VFlag"],
      isFlag: [false, false],
      ImgNum: 2,
      verImg: [
        {
          bigImg: require("../../assets/images/Register/verification/01-big.png"),
          smallImg: require("../../assets/images/Register/verification/01-small.png"),
          coordinate: [79, 91, 42, 60],
        },
        {
          bigImg: require("../../assets/images/Register/verification/02-big.png"),
          smallImg: require("../../assets/images/Register/verification/02-small.png"),
          coordinate: [47, 54, 17, 29],
        },
        {
          bigImg: require("../../assets/images/Register/verification/03-big.png"),
          smallImg: require("../../assets/images/Register/verification/03-small.png"),
          coordinate: [202, 214, 98, 102],
        },
        {
          bigImg: require("../../assets/images/Register/verification/04-big.png"),
          smallImg: require("../../assets/images/Register/verification/04-small.png"),
          coordinate: [90, 110, 106, 121],
        },
        {
          bigImg: require("../../assets/images/Register/verification/05-big.png"),
          smallImg: require("../../assets/images/Register/verification/05-small.png"),
          coordinate: [163, 173, 112, 123],
        },
      ],
    };
  },
  created() {},
  methods: {
    x() {
      this.$emit("bodyBack");
    },
    random() {
      let count = Math.floor(Math.random() * 5);
      if (count == this.ImgNum) {
        this.random();
      } else {
        this.ImgNum = count;
      }
    },
    choice(arr, e) {
      let x = e.offsetX;
      let y = e.offsetY;
      //   console.log(x, y, arr);
      if (
        x >= (arr[0] / 290) * e.target.width &&
        x <= (arr[1] / 290) * e.target.width &&
        y >= (arr[2] / 290) * e.target.width &&
        y <= (arr[3] / 290) * e.target.width
      ) {
        this.isFlag.splice(1, 1, true);
        setTimeout(() => {
          this.$emit("disNone");
          this.isFlag.splice(1, 1, false);
          this.random();
        }, 1200);
      } else {
        this.random();
        this.isFlag.splice(0, 1, true);
        setTimeout(() => {
          this.isFlag.splice(0, 1, false);
        }, 1200);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.verification {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  background-color: #fff;
  width: 82.7%;
  max-width: 450px;
  border-radius: 5px;
  .body {
    margin: 0 3.23%;
    position: relative;
    img {
      width: 100%;
      display: block;
    }
    .img-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.7);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #f64c46;
      p {
        width: 45px;
        height: 45px;
        background-color: #f64c46;
        color: #fff;
        text-align: center;
        border-radius: 50%;
        font-size: 0.3rem;
        line-height: 45px;
        font-family: "icomoon";
        margin-bottom: 0.2rem;
      }
    }
    .b-true {
      color: #4ec65f;
      p {
        background-color: #4ec65f;
        color: #fff;
      }
    }
  }
}
.header {
  font-size: 18px;
  line-height: 55px;
  height: 55px;
  color: #333;
  text-align: center;
  position: relative;
  overflow: hidden;
  span {
    position: absolute;
    top: 0;
    right: 0.15rem;
    font-family: "icomoon";
    font-size: 0.25rem;
  }
}
.footer {
  font-size: 16px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px 3.23%;
  position: relative;
  text-align: left;
  overflow: hidden;
  p {
    height: 46px;
    display: inline-block;
    text-align: left;
    font-size: 16px;
    line-height: 46px;
    color: #333;
  }
  img {
    position: absolute;
    box-sizing: border-box;
    padding-top: 5px;
    right: 3.23%;
    width: 108px;
  }
}
</style>