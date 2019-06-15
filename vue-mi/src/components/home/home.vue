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
      <mt-navbar v-model="selected" class="home-category">
        <mt-tab-item
          v-for="tabBar in tableList"
          :key="tabBar.id"
          :id="tabBar.id"
          class="home-category-items"
        >{{tabBar.name}}</mt-tab-item>
      </mt-navbar>
    </header>

    <!-- 子页面切换 -->
    <div class="home-child-view">
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item v-for="(item,index) in tableList" :key="index" :id="item.id">
          <div :is="item.component"></div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import recommend from "./childer/recommend"; //推荐
import activity from "./childer/activity"; //618活动
import phone from "./childer/phone"; //手机
import intelligent from "./childer/intelligent"; //智能
import television from "./childer/television"; //电视
import notebook from "./childer/notebook"; //笔记本
import appliance from "./childer/appliance"; //家电
import lifearound from "./childer/lifearound"; //生活周边


export default {
  data() {
    return {
      components: "activity",
      selected: "1",
      title: "Home",
      tableList: [
        {
          id: "1",
          name: "推荐",
          component: "recommend"
        },
        {
          id: "2",
          name: "小米618",
          component: "activity"
        },
        {
          id: "3",
          name: "手机",
          component: "phone"
        },
        {
          id: "4",
          name: "智能",
          component: "intelligent"
        },
        {
          id: "5",
          name: "电视",
          component: "television"
        },
        {
          id: "6",
          name: "笔记本",
          component: "notebook"
        },
        {
          id: "7",
          name: "家电",
          component: "appliance"
        },
        {
          id: "8",
          name: "生活周边",
          component: "lifearound"
        }
      ]
    };
  },
  components: {
    recommend,
    activity,
    phone,
    intelligent,
    television,
    notebook,
    appliance,
    lifearound
  },
  methods: {
    showItems(component, text) {
      this.items = [];
      this.items.push({
        component: component,
        text: text
      });
    }
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
.home-category > .home-category-items {
  display: inline-block;
  margin: 0 5px;
  margin-bottom: 0;
  padding: 0 5px;
  color: #999;
  line-height: 28px;
  font-size: 14px;
  border-bottom: 2px solid transparent;
  text-decoration: none;
}
.home-category-items > .mint-tab-item-label {
  line-height: 28px;
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
.mint-navbar .mint-tab-item.is-selected {
  color: #ff6700;
  border-bottom: 2px solid #ff6700;
  margin-bottom: 0;
}
</style>
