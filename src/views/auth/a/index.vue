<template>
  <div>
    <div>{{$store.state.user.userId}}</div>
    <div>{{$store.state.user.token}}</div>
  </div>

</template>
<script>
    export default {
        name:'index',
        data () {
            return {

            }
        },
      mounted() {

      },
      methods: {

        }
    }
</script>
