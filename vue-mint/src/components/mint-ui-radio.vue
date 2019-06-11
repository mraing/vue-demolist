<template>
  <div id="radio">
    <mt-radio title="单选框按钮"  align="left" v-model="value" @change="check" :options="options"></mt-radio>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      options: [
        {
          label: "被禁用",
          value: "值F",
          disabled: true
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
    check: function() {
      console.log(this.value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
