<template>
  <div id="app">
    <!--左侧导航栏-->
    <left-nav></left-nav>


    <!--操作区-->
    <div class="main">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import leftNav from './components/common/leftNav.vue'
export default {
  name: 'App',
  components:{
    leftNav
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .main{
    float:left;
    width:95%;
    background-color: #EFF2F7;
    height:100%;
    overflow: auto;
  }
</style>
