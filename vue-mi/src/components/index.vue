<template>
  <div id="index">

	<!-- 视图窗口 -->
	<div class="index-view">
	  <router-view></router-view>
	</div>

	<!-- 导航条 -->
	<footer class="nav-footer">
	  <router-link to="/home" class="nav-footer-link">
	  	<div class="iconfont icon-zhuye nav-footer-link-iconfont"></div>
			<div>首页</div>
	  </router-link>
	  <router-link to="/category" class="nav-footer-link">
	  	<div class="iconfont icon-fenlei nav-footer-link-iconfont"></div>
			<div>分类</div>
	  </router-link>
	  <router-link to="/cart" class="nav-footer-link">
	  	<div class="iconfont icon-gouwuche1 nav-footer-link-iconfont"></div>
			<div>购物车</div>
	  </router-link>
	  <router-link to="/user" class="nav-footer-link">
	  	<div class="iconfont icon-wd nav-footer-link-iconfont"></div>
			<div>我的</div>
	  </router-link>
	</footer>
	
  </div>
</template>

<script>
export default {
  data() {
	return {
	  msg: "主页"
	};
  }
};
</script>

<style>
.nav-footer {
	display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  font-size: 14px;
  background: #fff;
	border-top: 1px solid #eee;
  z-index: 999;
}
.index-view {
  position: absolute;
  top: 0;
  bottom: 50px;
  left: 0;
  right: 0;
  z-index: 9;
}
.nav-footer-link{
	box-sizing: border-box;
	display: block;
	width: 25%;
	padding: 5px;
	color: #999;
	flex-grow:1;
	flex-shrink:0;
	text-decoration: none;
}
.nav-footer-link-iconfont{
	margin: 2px;
	height: 18px;
	line-height: 18px;
	color: #999;
}
.router-link-active{
	color: #ff6700;
}
.router-link-active>.nav-footer-link-iconfont{
	color: #ff6700;
	text-shadow: none;
}
</style>
