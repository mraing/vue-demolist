<template>
  <div>
      <h3>User</h3>
      <router-link to="/">go to back</router-link>
      <user-childer-1></user-childer-1>
  </div>
</template>

<script>
import UserChilder1 from './components/UserChilder1'
export default {
  data () {
    return {}
  },
  components: {
    UserChilder1
  }
}
</script>

<style>
</style>
