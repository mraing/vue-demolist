<template>
  <div id="search">
    <mt-search v-model="value" cancel-text="取消" placeholder="搜索" :result="filterResult"></mt-search>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      defaultResult: [
        "Apple",
        "Banana",
        "Orange",
        "Durian",
        "Lemon",
        "Peach",
        "Cherry",
        "Berry",
        "Core",
        "Fig",
        "Haw",
        "Melon",
        "Plum",
        "Pear",
        "Peanut",
        "Other"
      ]
    };
  },
  methods: {},
  computed: {
    filterResult() {
      if (this.value.length == 0) {
        return this.defaultResult;
      }
      return this.defaultResult.filter(value =>
        new RegExp(this.value, "i").test(value)
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
