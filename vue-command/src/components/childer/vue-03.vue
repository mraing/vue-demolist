<template>
	<div id="child-box">
		<h1>{{ msg }}</h1>
		<hr />
		<div>{ { message } } 与 v-text="message" 实现的效果是一样的.</div>
		<span>{{ message }}</span> = <span v-text="message"></span>
		<br />
		<div>{{ messageHtml }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: 'v-text,v-html',
			message: '每天都要进步一点呀',
			messageHtml: '<span>我是 v-html 渲染出来的</span>'
		};
	}
};
</script>

<style></style>
