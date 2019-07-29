/* eslint-disable no-return-assign */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 唯一数据源
const state = {
  count: 1,
  itemId: 0
}

// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state, n) {
    state.count -= n
  }
}

// getters计算过滤操作,类似于计算属性
const getters = {
  count: function (state) {
    return state.count += 100
  }
}

// actions和之前讲的Mutations功能基本一样，不同点是，actions是异步的改变state状态，而Mutations是同步改变状态。
const actions = {
  // 上下文对象，这里你可以理解称store本身
  addAction (context) {
    console.log('我比reduce提前执行')
    setTimeout(() => {
      context.commit('reduce', 10)
    }, 3000)
    // context.commit('add', 10)
  },
  // 直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了
  reduceAction ({commit}) {
    commit('reduce')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
