<template>
	<div class="index">
		<h1>{{msg}}</h1>
		<hr>
		<ul class="items-list">
			<li class="items-link"><router-link to="/index/vue-01">v-if-else,v-show</router-link> </li>
			<li class="items-link"><router-link to="/index/vue-02">v-for</router-link> </li>
		</ul>
		<div class="items-details">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'Vue内部指令'
			}
		}
	}
</script>

<style>
	.items-list{
		margin: 0;
		padding: 0;
		float: left;
		width: 48%;	
	}
	.items-link{
		list-style: none;
		padding: 10px;
		margin: 10px;
		font-size: 16px;
	}
	.items-link>a{
		display: block;
		line-height: 30px;
		font-size: 16px;
		color: #fff;
		background: #2C3E50;
		border-radius: 10px;
		text-decoration: none;
		outline: none;
		transition: .2s;
	}
	.items-link>a:hover{
		background: #4CAF50;
	}
	.items-details{
		float: right;
		width: 48%;
		height: 100%;
		border-radius: 10px;
		background-color: #eee;
	}
</style>
