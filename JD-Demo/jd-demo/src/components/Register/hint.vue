<template>
  <div class="hint">{{ hint }}</div>
</template>

<script>
export default {
  props: ["hint"],
};
</script>

<style scoped>
.hint {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  border-radius: 0.1rem;
  color: #fff;
  font-size: 0.16rem;
  height: 8%;
  background-color: #4c4c4c;
}
</style>