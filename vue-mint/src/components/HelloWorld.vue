<template>
  <div id="hello">
    <router-link to="/switch">开关</router-link>
    <router-link to="/radio">单选框</router-link>
    <router-link to="/checklist">复选框</router-link>
    <router-link to="/tabbar">导航栏</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
