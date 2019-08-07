<template>
  <div>
    <h5>{{title}}</h5>
    <!-- 轮播图 -->
    <div ontouchstart>
      <swiper ref="mySwiper">
         <swiper-slide
          v-for="(item, index) in imgList"
          :key="index"
        >
           <img class="img-item" :src="item">
         </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'SwiperDome',
  data () {
    return {
      title: '演示',
      imgList: [
        'https://i1.mifile.cn/a4/xmad_15650061412258_gjQPE.jpg',
        'https://i1.mifile.cn/a4/xmad_15650807569039_DEBlz.jpg',
        'https://i1.mifile.cn/a4/xmad_15649872937069_sqeMx.jpg'
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
.img-item{
  width: 100%;
  /* height: 300px; */
  object-fit: cover;
}
</style>
