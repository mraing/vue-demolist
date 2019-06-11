<template>
  <div id="navbar">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :key="n" :title="'内容 ' + n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n"/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "1"
    };
  },
  methods: {
    turn: function() {
      console.log(this.value);
    }
  }
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
</style>
