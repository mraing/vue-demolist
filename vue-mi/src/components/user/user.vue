<template>
  <div id="user">
    <header class="user-header">
      <!-- 头像 -->
      <div class="user-header-photo">
        <img src="https://m.mi.com/static/img/avatar.76a75b8f17.png">
      </div>
      <div class="user-header-name">登录/注册</div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "user"
    };
  }
};
</script>

<style>
.user-header{
    padding: 10px;
    background: src("https://m.mi.com/static/img/bg.63c8e19851.png") center 0 #f37d0f;
}
.user-header-photo{
    width: 50px;
    height: 50px;
}
.user-header-photo > img{
    width: 100%;
    height:100%;
    object-fit: cover;
}
.user-header-name{
    font-size: 14px;
    color: #fff;
    line-height: 50px;
}
</style>
