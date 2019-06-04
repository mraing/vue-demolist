<template>
    <div class="child-box">
        <h1>{{ msg }}</h1>
        <p>绑定：标签属性scr</p>
        <div id="app">
            <img v-bind:src="imgSrc"  width="200px">
        </div>
        <p>绑定CSS</p>
        <div :class="className">1、绑定classA</div>
        <div :class="{classA:isOk}">2、绑定class中的判断</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            'msg': 'v-bind',
            'imgSrc': '../../static/img/demo.jpeg',
            'className':'classA',
            'isOK': true
        }
    }
}
</script>

<style>
.classA{
    color: red;
}
</style>
