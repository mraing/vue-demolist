<template>
 <div>
    <h5>{{title}}</h5>
    <ul class="list-wrapper">
      <li class="defult-list"
        v-for="(item, index) in list"
        :key="index+item"
        @click="handleList(index)"
        :class="{'list-active' : highlight == index}"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HandleIncident',
  data () {
    return {
      title: '演示',
      highlight: '',
      list: ['qq', 'qq', 'cc', 'aa']
    }
  },
  methods: {
    handleList (parameter) {
      this.highlight = parameter
      console.log(parameter)
    }
  }
}
</script>

<style scoped>
ul, li {
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
.list-wrapper{
  display: flex;
  flex-wrap: wrap;
}
.defult-list{
  padding: 2px 10px;
  margin: 5px;
  color: #fff;
  background: rgb(33, 182, 51);
}
.list-active{
  background: rgb(194, 46, 46);
  color: #fff;
}
</style>
