<template>
  <div id="tab_container">


    <mt-navbar v-model="active">
      <mt-tab-item id="tab-container1">选项一</mt-tab-item>
      <mt-tab-item id="tab-container2">选项二</mt-tab-item>
      <mt-tab-item id="tab-container3">选项三</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab-container1">
        <mt-cell v-for="n in 10" :key="n" title="tab-container 1"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <mt-cell v-for="n in 5" :key="n" title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <mt-cell v-for="n in 7" :key="n" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'tab-container1'
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
