<template>
	<div class="child-box">
		<h1>{{ msg }}</h1>
		<hr />
		<div v-if="isTrue">今天晴天~ ( true: ⛅️ )</div>
		<div v-else>今天雨天~ ( false: 🌧 )</div>
		
		<div v-show="isTrue">今天也是元气满满</div>
	</div>
</template>	

<script>
export default {
	data() {
		return {
			msg: 'v-if-else',
			isTrue: true
		};
	}
};
</script>

<style>
	.child-box{
		padding: 10px;
	}
</style>
