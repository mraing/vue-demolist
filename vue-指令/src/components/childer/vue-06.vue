<template>
  <div class="child-box">
    <h1>{{ msg }}</h1>
    <p>绑定：标签属性scr</p>
    <div id="app">
      <img v-bind:src="imgSrc" width="200px">
    </div>
    <p>绑定CSS</p>
    <div :class="className">1.绑定classA</div>
    <div :class="['classA','classB']">2.绑定 class 中的数组</div>
    <div :class="{'classA':isOK}">3.绑定 class 中的判断</div>
    <div :class="isOK?'classA':'classB'">4.绑定 class 中的三元运算 {{ isOK?'classA':'classB' }}</div>
    <div :style="{color:red,fontSize:font}">5.绑定 style</div>
    <div :style="styleObject">6、用对象绑定style样式</div>
    <div>
      <input type="checkbox" id="isOK" v-model="isOK">
      <label for="isOK">isOK = {{ isOK }}</label>
    </div>
    <p>需要注意的是：绑定 class 要注意是 string 类型的，需要用引号括起来</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "v-bind",
      imgSrc: "../../static/img/demo.jpeg",
      className: "classA",
      isOK: true,
      font: "20px",
      red: "red",
      styleObject: {
        fontSize: "16px",
        color: '#2196F3'  
      }
    };
  }
};
</script>

<style>
.classA {
  color: red;
}
.classB {
  color: chocolate;
  font-weight: 700;
}
</style>
