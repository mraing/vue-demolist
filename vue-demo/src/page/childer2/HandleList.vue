<template>
 <div>
    <h5>{{title}}</h5>
    <div>
      <!-- 绑定 input -->
      <input type="text" v-model="msg" placeholder="请输入">
      <!-- 添加按钮事件 -->
      <button @click="handleList">点击增加</button>
    </div>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index+item"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HandleList',
  data () {
    return {
      title: '演示',
      msg: '',
      list: ['123', '123', '123'],

      ListObj: {
        '123': '123'
      }
    }
  },
  methods: {
    handleList () {
      this.list.push(this.msg)
      this.msg = ''
    }
  }
}
</script>

<style scoped>

</style>
