<template>
  <div class="vue-04">
    <h1>{{ msg }}</h1>
    <hr>
    <div>本场比赛得分：{{count}}</div>
    <button v-on:click="jiafen">加分</button>
    <button v-on:click="jianfen">减分</button>
    <button @click="wipedata">清空</button>
    <div><input type="text" @keyup.enter="onEnter" v-model="secondCound"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "v-on 绑定事件监听",
      count: 1,
      secondCound:''
    }
  },
  methods: {
    jiafen:function(){
        this.count++;
    },
    jianfen:function(){
        this.count--;
    },
    wipedata:function(){
        this.count = 0;
        this.secondCound = "";
    },
    onEnter:function(){
        this.count = this.count + parseInt(this.secondCound);
    }
  }
};
</script>

<style>
</style>
