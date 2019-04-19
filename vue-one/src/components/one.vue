<template>
  <div id="index" class="index">
    <header>ONE图文</header>
    <ul class="index-list">
      <!-- 渲染模版 -->
      <li v-for="(article) in getContentArr" :key="article.world_id" class="index-article">
        <!-- {{article.date}} -->
        <div class="index-date">{{article.year}} / {{article.month}} / {{article.day}}</div>
        <div class="index-issn">{{article.vol}}</div>
        <!-- 点击图片利用路由传参，进入详情页 -->
        <router-link :to="{name:'Details',params:{data:article}}" class="index-img">
          <img :src="article.img_url">
        </router-link>
        <div class="index-author">{{article.img_kind}} | {{article.img_author}}</div>
        <div class="index-content">{{article.word}}</div>
        <div class="index-author">{{article.word_from}}</div>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      contentArr: [],
      contentData: [],
      msg: "Hello"
    };
  },

  //生命周期钩子：在实例创建完成后被立即调用。/请求数据
  created() {
    //指定this值，不然此this非彼this
    let _this = this;
    // 包装头部数据
    const params = new URLSearchParams();
    params.append("TransCode", "030112");
    params.append("OpenId", "123456789");
    params.append("Body", "");
    // 用post请求接口
    axios
      .post("https://api.hibai.cn/api/index/index", params)
      .then(function(response) {
        // 赋值给contentArr，方便操作数据
        _this.contentArr = response.data.Body;
        // 打印数据，测试是否正常
        // console.log(_this.contentArr);
      })
      .catch(function(error) {
        console.log(error);
        alert("网络错误，请稍后重试");
      });
  },
  computed: {
    //用了一个很笨的方法，格式化了日期
    getContentArr: function() {
      let getdata = this.contentArr;
      for (let i = 0; i < getdata.length; i++) {
        getdata[i].year = getdata[i].date.substring(0, 4);
        getdata[i].month = getdata[i].date.substring(5, 7);
        getdata[i].day = getdata[i].date.substring(8, 11);
      }
      return getdata;
    }
  }
};
</script>


<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 55px;
  font-size: 16px;
  text-align: center;
  line-height: 55px;
  color: #000;
  background-color: #fff;
  z-index: 99;
}
.index-article {
  margin: 0 0 10px 0;
  padding-bottom: 25px;
  background-color: #fff;
  box-shadow: 0 0.0625em 0 0 rgba(230, 230, 230, 0.5);
}
.index-article:last-child {
  margin-bottom: 0;
}
.index-date {
  color: #000;
  opacity: 0.6;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  padding-top: 16px;
  font-family: "Courier New";
}
.index-issn {
  margin-top: 5px;
  color: #808080;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
}
.index-img {
  display: block;
  margin: 15px 0;
  width: 100%;
  overflow: hidden;
}
.index-img > img {
  width: 100%;
  vertical-align: bottom;
}
.index-author {
  margin: 0 20px;
  color: #808080;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
}
.index-content {
  margin: 20px 20px 18px 20px;
  margin-bottom: 18px;
  color: #000;
  opacity: 0.6;
  font-size: 14px;
  line-height: 26px;
}
</style>
