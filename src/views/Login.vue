<template>
  <div>
    <el-alert v-if="showAlert" title="账户名不存在或密码不正确" type="error" show-icon>
    </el-alert>

    <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="margin-top">
      <el-form-item label="账号：" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">登陆</el-button>
        <el-button>注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import MyAccount from '@/services/my-account'
export default {
  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 3,
            message: '用户名至少要3个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 6,
            message: '用户名至少要6个字符',
            trigger: 'blur'
          }
        ]
      },
      showAlert: false
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return false
        }

        let result = await MyAccount.login(this.form.name, this.form.password)
        if (!result.success) {
          this.showAlert = true
          setTimeout(() => {
            this.showAlert = false
          }, 3000)
          return false
        }

        let returnUrl = this.$route.query.returnUrl
        if (returnUrl) {
          let path = decodeURIComponent(returnUrl)
          this.$router.push({ path: path })
        } else {
          this.$router.push({ name: 'home' })
        }
      })
    }
  }
}
</script>

<style scoped>
.margin-top {
  margin-top: 50px;
}
</style>
