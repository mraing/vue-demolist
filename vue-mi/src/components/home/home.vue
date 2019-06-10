<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <header class="home-header">
      <!-- 搜索栏 -->
      <div class="home-search">
        <!-- 小米logo -->
        <div class="home-search-miLogo iconfont icon-xiaomi"></div>
        <!-- 搜索框 -->
        <div class="home-search-main">
          <input type="search" placeholder="搜索商品名称">
        </div>
        <!-- 个人中心 -->
        <div class="home-hedaer-user iconfont icon-wd"></div>
      </div>
      <!-- 分类栏 -->

      <div class="home-category">
        <router-link to="/home/recommend" class="home-category-items" event="click">推荐</router-link>
        <router-link to="/home/activity" class="home-category-items" event="click">小米618</router-link>
        <router-link to="/home/phone" class="home-category-items" event="click">手机</router-link>
        <router-link to="/home/intelligent" class="home-category-items" event="click">智能</router-link>
        <router-link to="/home/television" class="home-category-items" event="click">电视</router-link>
        <router-link to="/home/notebook" class="home-category-items" event="click">笔记本</router-link>
        <router-link to="/home/appliance" class="home-category-items" event="click">家电</router-link>
        <router-link to="/home/lifearound" class="home-category-items" event="click">生活周边</router-link>
      </div>
    </header>

    <!-- 子页面切换 -->
    <div class="home-child-view">
      <router-view keep-alive></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Home"
    };
  }
};
</script>

<style>
.home-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  z-index: 99;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
}
.home-search {
  box-sizing: border-box;
  position: relative;
  padding: 0 45px;
  height: 45px;
  background: #f2f2f2;
  overflow: hidden;
}
.home-search-miLogo {
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
  height: 100%;
  line-height: 45px;
  color: #ff6700;
}
.home-hedaer-user {
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 100%;
  line-height: 45px;
  color: #999;
}
.home-search-main {
  padding: 5px 0;
  width: 100%;
}
.home-search-main > input {
  padding: 0 10px;
  width: 100%;
  height: 35px;
  background: #fff;
  border: 1px solid #eee;
  outline: none;
}
.home-category {
  width: auto;
  height: 30px;
  background: #f2f2f2;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
}
.home-category-items {
  display: inline-block;
  margin: 0 5px;
  padding: 0 5px;
  color: #999;
  line-height: 28px;
  font-size: 14px;
  border-bottom: 2px solid transparent;
  text-decoration: none;
}
.home-child-view {
  position: absolute;
  top: 75px;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 720px;
  margin: 0 auto;
  overflow: auto;
}
.home-category > .router-link-active {
  color: #ff6700;
  border-bottom: 2px solid #ff6700;
}
</style>
