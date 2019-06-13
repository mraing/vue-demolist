<template>
  <div id="picker">
    <mt-picker :slots="slots" @change="onValuesChange" :visible-item-count="3"></mt-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      slots: [
        {
          flex: 1,
          values: ["年假", "事假", "病假", "婚假", "其他"],
          className: "slot1",
          textAlign: "left"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [
            "2015-11",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06"
          ],
          className: "slot3",
          textAlign: "right"
        }
      ]
    };
  },
  methods: {
    onValuesChange(picker, values) {
      // console.log(picker)
      console.log(values)
      this.value = values[0];
      console.log(this.value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
