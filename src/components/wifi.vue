<template>
  <div class="wifi"></div>
</template>

<script>
export default {
  name: 'wifi-icon'
}
</script>

<style scoped>
.wifi {
  padding: 10px;
}

.wifi,
.wifi:before {
  display: inline-block;
  border: 30px double transparent;
  border-top-color: blue;
  border-radius: 50%;
}

.wifi:before {
  content: '';
  width: 0;
  height: 0;
}
</style>
