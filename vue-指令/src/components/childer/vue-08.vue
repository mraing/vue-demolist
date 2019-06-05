<template>
  <div class="child-box">
    <h1>{{ msg }}</h1>
    <hr>
    <div v-cloak>{{message}}</div>
    <p>在vue渲染完指定的整个DOM后才进行显示。它必须和CSS样式一起使用.</p>
  </div>
</template>	

<script>
export default {
  data() {
    return {
	  msg: "v-cloak指令",
	  message: "加载完整个 DOM 才能看见我~"
    };
  }
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
