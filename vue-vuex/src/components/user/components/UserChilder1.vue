<template>
  <div>
    <div class="wrapper">
        <div>i'm UserChilder1</div>
        <div>通过computed的计算属性直接赋值： {{count}}</div>
        <div>state访问状态对象： {{$store.state.count}}</div>
        <div>通过mapState的对象来赋值：{{counter}}</div>
    </div>
    <div>
      <button @click="$store.commit('add', 10)">加</button>
      <button @click="$store.commit('reduce', 1)">减</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import store from '@/store/state'
export default {
  data () {
    return {
      mycount: ''
    }
  },
  // 可以利用计算属性，在页面渲染之前将 store 中的值赋予出来
  computed: {
    count () {
      return this.$store.state.count
    },
    ...mapState({
      counter: state => state.count
    })
  },
  store
}
</script>

<style>
</style>
