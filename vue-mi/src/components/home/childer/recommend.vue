<template>
  <div id="recommend" class="recommend">
    <!-- 轮播图 -->
    <ic-slider :autoplay="3000">
      <ic-slider-item v-for="(items,index) in images" :key="index">
        <a :to="items.linkUrl">
          <img :src="items.picUrl">
        </a>
      </ic-slider-item>
    </ic-slider>

    <!-- 快捷导航 -->
    <ul class="common-model-list">
      <li class="common-model-items" v-for="(commonMdeol,index) in commonModels" :key="index">
        <a class="common-model-link" :to="commonMdeol.linkUrl">
          <img :src="commonMdeol.imgUrl" :alt="commonMdeol.commonName">
        </a>
      </li>
    </ul>

    <!-- 热门商品 -->
    <div class="hot-model">
      <a href class="hot-model-left">
        <img
          src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1e6980ae67a5484364a102761bd558b.jpg?thumb=1&w=358&h=508"
        >
      </a>
      <div class="hot-model-right">
        <a href class="hot-model-right-link">
          <img
            src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d6509933e37e8e21334de2628013cd4e.jpg?thumb=1&w=358&h=252"
            alt
          >
        </a>
        <a href class="hot-model-right-link">
          <img
            src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5aa66e85ba2cf6248ee7e9709aba276.jpg?thumb=1&w=358&h=252"
            alt
          >
        </a>
      </div>
    </div>

    <!-- 热门商品横幅 -->
    <a href class="hot-banner-link">
      <img src="http://i8.mifile.cn/v1/a1/8ec0ba73-a08f-4093-acc6-6b5d2dcbb765!720x280.webp" alt>
    </a>
    <a href class="hot-banner-link">
      <img src="http://i8.mifile.cn/v1/a1/7ef7313d-dd33-716a-fda6-8cc9417a5210!720x440.webp" alt>
    </a>

    <!-- 商品列表 -->
    <goods-list></goods-list>
  </div>
</template>

<script>
import { IcSlider, IcSliderItem } from "@/common/vue-better-slider";

import goodsList from '@/common/goods-list'

export default {
  data() {
    return {
      recommend: "recommend",
      images: [
        {
          linkUrl: "",
          picUrl:
            "http://i8.mifile.cn/v1/a1/def8e38c-54f4-5d57-95b6-5e7d21aaf528!720x360.webp",
          id: ""
        },
        {
          linkUrl: "",
          picUrl:
            "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c9efb60f6f66f516ea26695ac744c2d9.jpg?thumb=1&w=720&h=360",
          id: ""
        },
        {
          linkUrl: "",
          picUrl:
            "http://i8.mifile.cn/v1/a1/80e4f91f-eeee-b4f0-1fd4-53892fa3a86c!720x360.webp",
          id: ""
        }
      ],
      commonModels: [
        {
          linkUrl: "",
          imgUrl:
            "http://i8.mifile.cn/v1/a1/290976f3-acac-8a62-7e5c-a19985a6414b!144x152.webp",
          commonName: "新品发布"
        },
        {
          linkUrl: "",
          imgUrl:
            "http://i8.mifile.cn/v1/a1/e821d48d-57fa-7dee-ebc7-a836909cc8a7!144x152.webp",
          commonName: "小米众筹"
        },
        {
          linkUrl: "",
          imgUrl:
            "http://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee!144x152.webp",
          commonName: "以旧换新"
        },
        {
          linkUrl: "",
          imgUrl:
            "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c94c523eb03128378ef2dc17c2c2cf0a.png?thumb=1&w=144&h=152",
          commonName: "1分拼团"
        },
        {
          linkUrl: "",
          imgUrl:
            "http://i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80!144x152.webp",
          commonName: "超值特卖"
        },
        {
          linkUrl: "",
          imgUrl:
            "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152",
          commonName: "小米秒杀"
        },
        {
          linkUrl: "",
          imgUrl:
            "http://i8.mifile.cn/v1/a1/f400b464-f2cf-ada9-9048-e45dd699969a!144x152.webp",
          commonName: "每日臻选"
        },
        {
          linkUrl: "",
          imgUrl:
            "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152",
          commonName: "电视热卖"
        },
        {
          linkUrl: "",
          imgUrl:
            "http://i8.mifile.cn/v1/a1/65fd2670-a567-dac3-59d1-6d96398cb733!144x152.webp",
          commonName: "家电热卖"
        },
        {
          linkUrl: "",
          imgUrl:
            "http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152",
          commonName: "米粉卡"
        }
      ]
    };
  },
  components: {
    IcSlider,
    IcSliderItem,
    goodsList
  }
};
</script>

<style>
.recommend{
  background: #f5f5f5;
}
.common-model-list {
  display: flex;
  flex-wrap: wrap;
}
.common-model-items {
  position: relative;
  width: 20%;
  padding-top: 20%;
  overflow: hidden;
}
.common-model-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.common-model-link > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hot-model {
  margin-top: 5px;
  position: relative;
  overflow: hidden;
}

.hot-model-left {
  display: block;
  width: 50%;
  overflow: hidden;
}
.hot-model-left > img,
.hot-model-right-link > img,
.hot-banner-link > img {
  width: 100%;
  height: 100%;
  vertical-align: bottom;
  object-fit: cover;
}
.hot-model-right {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: calc(50% - 5px);
}
.hot-model-right-link {
  display: block;
  height: 50%;
}
.hot-model-right-link:first-child {
  padding-bottom: 2.5px;
}
.hot-model-right-link:last-child {
  padding-top: 2.5px;
}
.hot-banner-link {
  display: block;
  margin-top: 5px;
  overflow: hidden;
}
</style>


