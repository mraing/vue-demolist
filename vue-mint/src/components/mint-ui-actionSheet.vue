<template>
  <div id="actionSheet">
    <mt-button type="default" @click.native="handleClick" v-model="sheetVisible">default</mt-button>
    <mt-actionsheet :actions="actions" v-model="sheetVisible" cancelText="取消"></mt-actionsheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sheetVisible: false,
      actions:[{
        name:'开发',
        method: this.develop
      },{
        name:'生产',
        method: this.production
      }]
    };
  },
  methods: {
    handleClick(){
      this.sheetVisible = true;
    },
    develop(){
      console.log('开发');
    },
    production(){
      console.log('生产');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
li{
  margin: 0;
  padding: 0;
}
</style>
