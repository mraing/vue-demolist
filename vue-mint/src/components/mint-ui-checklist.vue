<template>
  <div id="checklist">
    <!-- <mt-checklist title="复选框列表" v-model="value" :options="options" @change="checkon"></mt-checklist> -->
    <mt-checklist :max="2" v-model="value" :options="options" @change="checkon"  align="right"></mt-checklist>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      options: [
        {
          label: "被禁用",
          value: "值F",
          disabled: true
        },
        {
          label: "选项C",
          value: "值C"
        },
        {
          label: "选项A",
          value: "值A"
        },
        {
          label: "选项B",
          value: "值B"
        }
      ]
    };
  },
  methods: {
    checkon: function() {
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
