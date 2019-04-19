<template>
  <div id="details" class="details">
    <!-- <div class="details-back">返回</div> -->
    <header class="details-img">
      <img :src="articleData.img_url" :alt="articleData.img_kind">
    </header>

    <article>
      <div class="details-author">{{articleData.img_kind}} | {{articleData.img_author}}</div>
      <div class="details-day">{{articleData.day}}</div>
      <div class="details-date">{{articleData.year}} / {{articleData.month}}</div>
      <div class="dateils-content">{{articleData.word}}</div>
      <div class="dateils-from">--{{articleData.word_from}}</div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleData: {}
    };
  },
  created() {
    this.getArticleData();
  },
  methods: {
    //拿到路由中的参数赋给articleData，方便以后进行数据操作
    getArticleData() {
      this.articleData = this.$route.params.data;
      console.log(this.articleData);
    }
  }
};
</script>

<style scoped>
.details-img {
  display: block;
  margin-bottom: 15px;
  width: 100%;
  overflow: hidden;
}
.details-img > img {
  width: 100%;
  vertical-align: bottom;
}
article {
  margin: 10px;
  padding: 10px;
  position: relative;
  top: -50px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.63);
  box-shadow: 0 0 1px 1px #e4e4e4;
}
.details-author {
  padding: 10px 0;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #000;
}
.details-day {
  font-size: 48px;
  color: #000;
}
.details-date{
  display: inline-block;
  padding: 0 10px;
  padding-bottom: 5px;
  font-size: 12px;
  color: #666;
  border-bottom: 1px solid #eee;
}
.dateils-content{
    margin: 10px 0;
    font-size: 15px;
    line-height: 30px;
}
.dateils-from{
    line-height: 25px;
    text-align: right;
    font-size: 12px;
    color: #808080;
}
</style>
