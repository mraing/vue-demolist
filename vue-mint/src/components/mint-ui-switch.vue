<template>
 <div id="switchw">
   <mt-switch v-model="value" @change="turn">Switch</mt-switch>
 </div>
</template>

<script>
export default {
  data () {
    return {
      value: true
    }
  },
  methods:{
  	turn: function(){
  		console.log(this.value)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
