<template>
  <el-button v-bind="$attrs" v-on="$listeners" class="circle">
    <slot>连接</slot>
  </el-button>
</template>

<script>
export default {
  name: 'circle-button'
}
</script>

<style scoped>
.circle {
  width: 120px;
  height: 120px;
  background: greenyellow;
  -moz-border-radius: 60px;
  -webkit-border-radius: 60px;
  border-radius: 60px;
  border-width: 2px;
  border-color: yellow;
}
</style>
