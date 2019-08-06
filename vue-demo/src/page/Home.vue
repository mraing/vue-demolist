<template>
 <div>
    <h1>{{title}}</h1>
    <router-link to="/handleLight">控制灯</router-link>
    <router-link to="/handleList">增加列表</router-link>
    <div class="view-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Vue demo 集合'
    }
  }
}
</script>

<style scoped>
.view-wrapper{
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background: #eee;
}
</style>
