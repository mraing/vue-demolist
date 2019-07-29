<template>
  <div>
      <h3>Index</h3>
      <router-link to="/user">go to user</router-link>
      <home-childer1></home-childer1>
      <div>store: {{$store.state.count}}</div>
      <div>itemId: {{itemId}}</div>
      <div>count: {{count}}</div>
      <div>
        <button @click="add(10)">加</button>
        <button @click="reduce(1)">减</button>
      </div>
      <div>
        <button @click="addAction(10)">异步加</button>
        <button @click="reduceAction(20)">异步减</button>
      </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
import store from '@/store/state'
import HomeChilder1 from './components/HomeChilder1'
export default {
  data () {
    return {
      myItem: this.itemId
    }
  },
  store,
  computed: {
    ...mapState({
      itemId: state => state.itemId
    }),
    ...mapGetters(['count'])
    // count () {
    //   return this.$store.getters.count
    // }
  },
  components: {
    HomeChilder1
  },
  methods: {
    ...mapMutations([
      'add', 'reduce'
    ]),
    ...mapActions([
      'addAction', 'reduceAction'
    ])
  }
}
</script>

<style>
.wrapper{
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background: #eee;
}
</style>
