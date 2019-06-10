<template>
  <div id="tabbar">
    <div>
      <mt-cell class="page-part" title="当前选中" :value="selected"/>
    </div>

    <!-- tabcontainer -->
    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="外卖">
        <mt-cell v-for="n in 10" :key="n" :title="'餐厅 ' + n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="订单">
        <mt-cell v-for="n in 5" :key="n" :title="'订单 ' + n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
        <mt-cell v-for="n in 7" :key="n" :title="'发现 ' + n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <div class="page-part">
          <!-- cell -->
          <mt-cell v-for="n in 12" :key="n" :title="'我的 ' + n"/>
        </div>
        <router-link to="/">
          <!-- button -->
          <mt-button type="danger" size="large">退出</mt-button>
        </router-link>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="外卖">
        <img slot="icon" src>
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src>
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src>
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      selected: "外卖"
    };
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
