<template>
  <div>
    <input v-model="loginData.email" type="text">
    <input v-model="loginData.password" type="password">
    <button @click="login">登录</button>
  </div>
</template>

<script>
import {setAsyncRoutes} from "@/utils/filterRoute";

export default {
  name: "index",
  data() {
    return {
      loginData: {}
    }
  },
  methods: {
    async login() {
      await this.$store.dispatch('user/userLogin', this.loginData);
      // await this.$store.dispatch('user/getUserInfo')
      setAsyncRoutes()
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style scoped>

</style>
