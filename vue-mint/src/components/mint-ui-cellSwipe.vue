<template>
  <div id="cellSwipe">
    <mt-cell-swipe
      title="标题文字"
      icon="back"
      :right="[
        {
          content: 'Delete',
          style: { background: 'red', color: '#fff' },
          handler: () => this.$messagebox('delete')
        }
      ]"
    ></mt-cell-swipe>

    <mt-cell-swipe v-for="n in 10" :key="n" :right="rightButtons" title="swipe me"></mt-cell-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    leftButtonHandler(evt) {
      console.log(123);
    }
  },

  created() {
    let _this = this;
    this.rightButtons = [
      {
        content: "Mark as Unread",
        style: { background: "lightgray", color: "#fff" }
      },
      {
        content: "Delete",
        style: { background: "red", color: "#fff" },
        // handler: () => this.$messagebox('delete')
        handler:function(){
          _this.$messagebox('delete');
          console.log(123);
        }
      }
    ];
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
