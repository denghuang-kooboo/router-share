<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/task-list">Task List</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
