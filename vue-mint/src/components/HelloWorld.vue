<template>
  <div id="hello" class="hello">
    <div class="navbar-left">
      <router-link to="/">开关</router-link>
      <router-link to="/radio">单选框</router-link>
      <router-link to="/checklist">复选框</router-link>
      <router-link to="/tabbar">选项卡</router-link>
      <router-link to="/navbar">导航条</router-link>
      <router-link to="/tabContainer">切换子页面面板</router-link>
      <router-link to="/header">头部导航栏</router-link>
      <router-link to="/search">搜索</router-link>
      <router-link to="/cell">单元格</router-link>
      <router-link to="/cellSwipe">单元格滑动</router-link>
    </div>

    <div class="view-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
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
<style>
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
.navbar-left {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  padding: 0 10px;
  width: 30%;
  overflow-x: hidden;
  overflow-y: auto;
}
.navbar-left>a{
  display: block;
  line-height: 40px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.view-right{
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 70%;
  overflow-x: hidden;
  overflow-y: auto;
}
.hello{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
