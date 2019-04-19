<template>
  <div id="app">
    <router-view/>
  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{ margin: 0; padding: 0; }
  li{ list-style: none; }
  a{ text-decoration: none; }
  html,body{height: 100%;background-color: #f5f5f5;}
  #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f5f5f5;
  }

  
</style>
