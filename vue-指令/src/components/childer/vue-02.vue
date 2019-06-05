<template>
	<div class="child-box">
		<h1>{{ msg }}</h1>
		<hr />
		<ul>
			<li v-for="item in items">{{ item }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: 'v-for',
			items: [20, 23, 18, 65, 32, 19, 54, 56, 41]
		};
	}
};
</script>

<style></style>
