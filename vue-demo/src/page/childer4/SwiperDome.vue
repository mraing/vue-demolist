<template>
  <div>
    <h5>{{title}}</h5>
    <!-- 轮播图 -->
    <div ontouchstart>
      <!-- 引入轮播组件 -->
      <swiper :options="swiperOption">
        <!-- 循环图片地址 -->
        <swiper-slide
          v-for="(item, index) in imgList"
          :key="index"
        >
          <!-- 动态绑定图片地址 -->
          <img class="img-item" :src="item">
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
// 局部引入 或者 全局引入 都是可以的
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'SwiperDome',
  data () {
    return {
      title: '演示',
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      // 图片列表 我从小米官网抠的链接地址
      imgList: [
        'https://i1.mifile.cn/a4/xmad_15650061412258_gjQPE.jpg',
        'https://i1.mifile.cn/a4/xmad_15650807569039_DEBlz.jpg',
        'https://i1.mifile.cn/a4/xmad_15649872937069_sqeMx.jpg'
      ]
    }
  },
  // 注册组件 就是刚刚上面引入的那俩货
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
/*
图片样式
稍微调整了下，不然图片显示不好看
*/
.img-item{
  width: 100%;
  /* height: 300px; */
  object-fit: cover;
}
</style>
