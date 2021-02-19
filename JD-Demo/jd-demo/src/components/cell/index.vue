<template>
  <div class="cell">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.cell {
  position: relative;
  margin-bottom: 15px;
  background: #fff;
  border-radius: 10px;
}
</style>