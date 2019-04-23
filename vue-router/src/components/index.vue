<template>
	<div>
		<ol  start="1" class="index-list">
			<li><router-link to="/index/hi1">子路由 H1</router-link></li>
			<li><router-link to="/index/hi2">子路由 H2</router-link></li>
			<li><router-link to="/clicli">(全屏) 平级路由 CliCli</router-link></li>
			<li><router-link to="/hi1">(全屏) 子路由 H1</router-link></li>
		</ol>
		<div class="routerBox">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style>
	li{
		list-style: none;
	}
	.index-list{
		margin: 0;
		padding: 10px;
		text-align: left;
	}
	.index-list>li{
		line-height: 30px;
	}
	.routerBox{
		margin: 10px;
		padding: 10px;
		border: 1px solid #000;
	}
</style>
