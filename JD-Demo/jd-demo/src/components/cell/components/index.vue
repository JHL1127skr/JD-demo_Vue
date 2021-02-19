<template>
  <div
    class="inner"
    :style="{ borderBottom: isBorder ? '1px solid #eee' : 'none' }"
  >
    {{ le_title }}
    <span>{{ ri_title }}</span>
  </div>
</template>

<script>
export default {
  props: ["le_title", "ri_title", "isBorder"],
};
</script>

<style lang="scss" scoped>
.inner {
  display: block;
  position: relative;
  height: 44px;
  line-height: 44px;
  margin-left: 10px;
  padding-right: 27px;
  font-size: 16px;
  color: #333;
  span {
    position: absolute;
    top: 50%;
    right: 27px;
    transform: translateY(-50%);
    line-height: normal;
    font-size: 12px;
    color: #999;
  }
  &::after {
    content: "";
    font-family: "icomoon";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>