<template>
  <div>
    <div><el-input v-model="user"/></div>
    <div><el-input v-model="pwd"/></div>
    <button>登录</button>
  </div>

</template>
<script>
export default {
  name: 'index',
  data() {
    return {
      user:'',
      pwd:''
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>
