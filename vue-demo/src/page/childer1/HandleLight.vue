<template>
 <div>
    <h5>{{title}}</h5>
    <!-- 运用 v-if 和 v-else -->
    <div v-if="isShow">现在是开灯</div>
    <div v-else>现在是关灯</div>
    <!-- 添加按钮事件 -->
    <button @click="handleLight">点击控制灯</button>
  </div>
</template>

<script>
export default {
  name: 'HandleLight',
  data () {
    return {
      title: '演示',
      isShow: true
    }
  },
  methods: {
    handleLight () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>

</style>
