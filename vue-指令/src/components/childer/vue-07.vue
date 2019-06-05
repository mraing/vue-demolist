<template>
	<div class="child-box">
		<h1>{{ msg }}</h1>
		<hr />
		<div v-pre>{{message}}</div>
		<p>在模板中跳过vue的编译，直接输出原始值。就是在标签中加入v-pre就不会输出vue中的data值了。</p>
	</div>
</template>	

<script>
export default {
	data() {
		return {
			msg: 'v-pre'
		};
	}
};
</script>

<style>
	
</style>
