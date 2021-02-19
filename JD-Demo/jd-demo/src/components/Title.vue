<template>
  <div class="title">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  margin: 15px 0;
  height: 1em;
  line-height: 1em;
  text-align: center;
  font-size: 12px;
  color: #999;

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    pointer-events: none;
    background-color: #ccc;
    height: 0.5px;
    left: 10px;
    right: 10px;
    top: 50%;
  }
  span {
    z-index: 2;
    position: relative;
    padding: 0 15px;
    background-color: #f7f7f7;
    &::after,
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      margin-top: -2px;
      width: 4px;
      height: 4px;
      background-color: #ccc;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    &::after {
      left: 0;
    }
    &::before {
      right: 0;
    }
  }
}
</style>