<template>
  <div>
    <h5>{{title}}</h5>
    <!-- 轮播图 ontouchstart-->
    <swiper :options="swiperOption" v-if="isShow">
      <!-- 轮播图片 -->
      <swiper-slide v-for="(items, index) in imgList" :key="index+'a'">
        <img class="img-item" :src="items" />
      </swiper-slide>
      <!-- 分页器 -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- 前进后退 -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

  </div>
</template>

<script>
export default {
  name: 'SwiperDome',
  data () {
    return {
      title: '演示',
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true,
        effect: 'cube'
      },
      // 图片列表 我从小米官网抠的链接地址
      imgList: [
        'https://i1.mifile.cn/a4/xmad_15650061412258_gjQPE.jpg',
        'https://i1.mifile.cn/a4/xmad_15650807569039_DEBlz.jpg',
        'https://i1.mifile.cn/a4/xmad_15649872937069_sqeMx.jpg'
      ]
    }
  },
  computed: {
    isShow () {
      return this.imgList.length
    }
  }
}
</script>

<style scoped>

.img-item{
  width: 100%;
}

</style>
