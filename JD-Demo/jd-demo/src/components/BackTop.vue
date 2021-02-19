<template>
  <div class="backtop" v-show="isFlag" @click="back"></div>
</template>

<script>
export default {
  data() {
    return {
      isFlag: false,
    };
  },
  mounted() {
    let parent = this.$parent.$el;
    parent.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let parent = this.$parent.$el;
      if (parent.scrollTop > 60) {
        this.isFlag = true;
      } else {
        this.isFlag = false;
      }
    },
    back() {
      let parent = this.$parent.$el;
      parent.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.backtop {
  position: absolute;
  font-family: "icomoon";
  text-align: center;
  line-height: 38px;
  font-size: 0.3rem;
  bottom: 120px;
  right: 9px;
  z-index: 999;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: #999;
  border: 1px solid #ccc;
  background-color: rgba($color: #fff, $alpha: 0.9);
}
</style>