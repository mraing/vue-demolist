<template>
  <div class="child-box">
    <h1>{{ msg }}</h1>
    <hr>
    <div v-once>{{message}}</div>
    <div><input type="text" v-model="message"></div>
    <p>在第一次DOM时进行渲染，渲染完成后视为静态内容，跳出以后的渲染过程。</p>
  </div>
</template>	

<script>
export default {
  data() {
    return {
      msg: "v-once指令",
      message: '只渲染一次'
    };
  }
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
