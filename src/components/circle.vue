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
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  border-width: 2px;
  border-color: yellow;
}
</style>
