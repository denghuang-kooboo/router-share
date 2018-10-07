<template>
  <div class="home">
    <el-row>
      <el-col>
        <wifi-icon></wifi-icon>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <cricle-button @click="connect">连接</cricle-button>
      </el-col>
    </el-row>
    <el-row class="button-row">
      <el-col :span="12">
        <el-button type="primary" round @click="recharge">充值</el-button>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" round @click="doTask">做任务</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import WifiIcon from '@/components/wifi'
import CricleButton from '@/components/circle'
export default {
  name: 'home',
  components: {
    WifiIcon,
    CricleButton
  },
  methods: {
    recharge () {
      this.redirectToLogin('/recharge')
    },
    doTask () {
      this.redirectToLogin('/dotask')
    },
    connect () {
      this.redirectToLogin('/connect')
    },
    redirectToLogin (path) {
      path = path || this.$route.path
      this.$router.push({
        name: 'login',
        query: {
          returnUrl: encodeURIComponent(path)
        }
      })
    }
  }
}
</script>

<style scoped>
.home {
  padding-top: 50px;
  text-align: center;
}

.button-row {
  margin-top: 30px;
}
</style>
