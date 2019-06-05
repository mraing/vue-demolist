<template>
  <div id="v-mode">
    <h1>{{ msg }}</h1>
    <hr>
    <h3>简单双向绑定</h3>
    <div>{{ messages }}</div>
    <ul>
      <li>.lazy：取代 imput 监听 change 事件。</li>
      <li>.number：输入字符串转为数字。</li>
      <li>.trim：输入去掉首尾空格。</li>
    </ul>

    <div>
      <input type="text" v-model.trim="messages">
    </div>
    <hr>
    <div>
      <textarea name id cols="30" rows="10" v-model="messages"></textarea>
    </div>
    <h3>多选按钮绑定一个值</h3>
    <input type="checkbox" id="isSure" v-model="isSure">
    <label for="isSure">{{isSure}}</label>

    <h3>多选按钮绑定一个数组</h3>
    <div>
      <input type="checkbox" value="01" v-model="web_names">
      <label for="model_01">01</label>
      <input type="checkbox" value="02" v-model="web_names">
      <label for="model_01">02</label>
      <input type="checkbox" value="03" v-model="web_names">
      <label for="model_01">03</label>
    </div>
    <div>{{web_names}}</div>

    <h3>单选按钮绑定</h3>

    <div>
      <input type="radio" value="男" v-model="sex">
      <label for>男</label>
      <input type="radio" value="女" v-model="sex">
      <label for>女</label>
    </div>
    <div>{{ sex }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "v-model指令",
      messages: "原始数据",
      isSure: false,
      web_names: [],
      sex:"男"
    };
  }
};
</script>

<style>
</style>

