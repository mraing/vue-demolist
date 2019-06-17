<template>
  <div id="goodsList">
    <div class="goods-list-box">
      <a class="goods-list-item" v-for="(item,index) in goodsList" :key="index">
        <div class="goods-list-item-img">
          <img class="goods-list-item-mainImg" :src="item.goodsImg" :alt="item.name">
          <img class="goods-list-item-tagImg" v-if="item.tapImg" :src="item.tapImg">
        </div>
        <div class="goods-info">
          <div class="goods-list-item-name">{{item.name}}</div>
          <div class="goods-list-item-label">{{item.brief}}</div>
          <div class="goods-list-item-price">
            <span class="goods-list-item-newprice">
              <i class="iconfont icon-qian"></i>{{item.price}}<span v-if="item.priceStarting">起</span>
            </span>
            <span class="goods-list-item-oldprice" v-if="item.priceOld">
              <s>
                <i class="iconfont icon-qian"></i>{{item.priceOld}}
              </s>
            </span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [
        {
          name: "小米8 青春版",
          brief: "索尼2400万自拍，超级夜景",
          price: "1199",
          priceOld: "1699",
          priceStarting:'',
          goodsImg:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d2bc1c7ff8c71628a28a5fce24caf245.jpg?thumb=1&w=360&h=360",
          tapImg:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/192f25e02ce9a326eb571bbb2e678cc6.png?w=167&h=167"
        },
        {
          name: "小米8 屏幕指纹版",
          brief: "全新升级十大功能，骁龙845",
          price: "2499",
          priceOld: "2999",
          priceStarting:'',
          goodsImg:
            "//i8.mifile.cn/v1/a1/5cba31dd-3cda-1975-7d9c-e95363fc311e!360x360.webp",
          tapImg:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/33cf7b6259f83768f028e98848694fda.png?w=167&h=167"
        },
        {
          name: "黑鲨游戏手机 Helo",
          brief: "双液冷，更能打",
          price: "3199",
          priceOld: "3499",
          priceStarting:'',
          goodsImg:
            "//i8.mifile.cn/v1/a1/def98121-4b54-54a6-debb-e5c8a51dd4f7!360x360.webp",
          tapImg: ""
        },
        {
          name: "红米6",
          brief: "小屏高性能的双摄手机",
          price: "729",
          priceOld: "799",
          priceStarting:'',
          goodsImg:
            "//i8.mifile.cn/v1/a1/e8699727-9628-8c0b-103a-f14fe8a56d02!360x360.webp",
          tapImg: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/37094a4a8ca8922f025e02cc13fbb03b.png?w=167&h=167"
        },
        {
          name: "红米6A",
          brief: "好看耐用/轻巧省心",
          price: "549",
          priceOld: "599",
          priceStarting:'1',
          goodsImg:
            "//i8.mifile.cn/v1/a1/2c506517-9477-c928-8e77-bee18b6818a1!360x360.webp",
          tapImg: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdb6af115a7285080be2fc7c1788d1d9.png?w=167&h=167"
        },
        {
          name: "小米6X",
          brief: "前置2000万，后置2000万",
          price: "1199",
          priceOld: "1799",
          priceStarting:'1',
          goodsImg:
            "//i8.mifile.cn/v1/a1/bd9b6895-5b51-a0d6-fb79-e430ca40dca6!360x360.webp",
          tapImg: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f2bd3574ff3a37757d535d932c5e27ec.png?w=167&h=167"
        },
        {
          name: "小米Play（附带流量卡）",
          brief: "自带高速流量",
          price: "1099",
          priceOld: "",
          priceStarting:'',
          goodsImg:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a183eae8ce729005a1e1bf2907f6d51d.png?thumb=1&w=360&h=360",
          tapImg: ""
        },
        {
          name: "小米平板4",
          brief: "大屏、长续航、超薄电脑",
          price: "1099",
          priceOld: "",
          priceStarting:'1',
          goodsImg:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a5be84661f1b82d1edef18f3a50a1b6f.jpg?thumb=1&w=360&h=360",
          tapImg: ""
        }
      ],
      msg: "i'm goods list"
    };
  }
};
</script>

<style>
.goods-list-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.goods-list-item {
  position: relative;
  display: block;
  flex-shrink: 0;
  width: calc(50% - 2.5px);
  background: #fff;
}
.goods-list-item-img {
  position: relative;
  padding-top: 100%;
  background: #fff;
  overflow: hidden;
}
.goods-list-item-img > .goods-list-item-mainImg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.goods-list-item-tagImg {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 30%;
  height: 30%;
  object-fit: cover;
  z-index: 5;
}
.goods-info {
  padding: 10px 0;
}
.goods-info > div {
  padding: 0 10px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.goods-list-item-name {
  font-size: 14px;
  color: #2c2c2c;
}
.goods-list-item-label {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
}
.goods-list-item-newprice,
.goods-list-item-newprice > i {
  font-size: 14px;
  color: #ea625b;
}
.goods-list-item-oldprice > s > i,
.goods-list-item-oldprice {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
}
</style>
