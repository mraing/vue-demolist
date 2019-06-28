<template>
  <div id="user" class="user">
    <header class="user-header">
      <!-- 头像 -->
      <div class="user-header-photo">
        <img src="https://m.mi.com/static/img/avatar.76a75b8f17.png">
      </div>
      <div class="user-header-name">登录/注册</div>
    </header>

    <!-- 我的订单 -->
    <div class="user-order">
      <a class="user-order-all">
        <span>我的订单</span>
        <span>
          全部订单
          <i class="iconfont icon-iconRight"></i>
        </span>
      </a>
      <div class="user-order-common">
        <a class="user-order-common-link">
          <span class="iconfont icon-daifukuan"></span>
          <span>待付款</span>
        </a>
        <a class="user-order-common-link">
          <span class="iconfont icon-truck"></span>
          <span>待收货</span>
        </a>
        <a class="user-order-common-link">
          <span class="iconfont icon-banshou"></span>
          <span>退换修</span>
        </a>
      </div>
    </div>

    <!-- 操作列表 -->
    <div class="user-option-list" v-for="(item,index) in optionList" :key="index">
      <a class="user-option-items" v-for="(citem,index) in item" :key="index">
        <div class="user-option-items-left" :style="{background: 'url(' + citem.iconImg + ') 12.5px 50% / 25px no-repeat'}">{{citem.title}}</div>
        <div class="user-option-items-right">
          <i class="iconfont icon-iconRight"></i>
        </div>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "user",
      optionList: [
        [
          {
            iconImg:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAEqklEQVR4nO2aTYhWVRjHf6PJNItEEAKZnSEVZCtrNN1oM9mMizKhVdOiXEpbk0CnFuEyCdpGbSYIrc2oTRMhxBRUtJjIeYmWWcxCtIRw8WaL5xw7c9/7nq/7cc4L9wcvjOeej+f5ez6e89wLHR0dHR3ZMgbQ/3pvajv2AOeBafXvFeBN4NdkFgFbD6/xQEoDFI8C3wE7jLKXgCPAfqCXwijNlpSDK95lsziaHepZUnIQaNry7LnWrBhCDgJlTQ4CrVieLbdmxRByEOgt4FZJ+S31LCk5CLSOnFaXgHvqd0mVrSe0C8hDIJCj/D0kLhsDLpD4eNfkIhDAgvH3uVRGFMlFoENIYKg5osqSk4tAZTNmoW0jyshBoEOUB4vPksEsykGgs5HPWiG1QM8AM5bnM8DBlmwpxRRoD3ARuK1+F1VZk/icVk3PIqvfOh9UlnIAiWabSjkcAFY96x4MqBuC1e+th9d6egalSDmExDpNzSKn31qgtlMO+4GjAfWPqjZ14/Q71SYdMyOSnGhaoDZTDlPAbES7WdW2Tpx+a4HaTDlUmQl1zyKn31ogM+Xwt/r9BYwDx6G25P7TwFyF9nOqjzrYhvg2jviq/d6UajH3oB5wAtiufh8AE8hu/iP1TO86ZkAdfUwBPyC+TSC+ar9PYIQ1tk16yfj7SSQOeV91EsNTwLHItibHgH2RbbcjPqwiPmmWyqvbBfoWuFmoewr4BXghwrg6czwLEW1eRGw/xWa/byK+lmITqA9cLSmfBD5H1uqkp3H7qLb3FJnDfxZNIrZ+Rrm9VxFfS3HFQUOnHrLBlf2PlHEOda2piTHce5E5449b6tl8dDpmVZf/1/Q3wLAX/A8DzzvGiWFW9V3GXvz2zGGr5D4ugazr0+AActLpU8FkA3gVu9Ch9FWfG4Xy0FO3uM8O4HPVsCpssA04A6wxeMdZBOapR6S+6muxUD6txj6jbPHhsquCj0BXPAfTPIKE6R8Bu4zyOkQqE2eXGutLNXYIX7gq+Aj0E3AjcOAxZAn0gDeMcaqIVBRni+q7p8YK5QbimxUfge7hMRWH8BDyEtAMzGJEKoqjA9cLaowYLiO+WfFNd1iPQg+mkI3zPLKRLgKv4CeSKc6E6qOOq4+XT74CrQB3420B5MJ7GvgZScZ/glskU5wZ1fY01S/Pd7GnOu7jK9Ad4Fq0OZvZjWziHwNfMVwkLc6Kqrus2tbBNcQnJyEZxarLrMg8cB14kME9Scc546rOfM1je/uSUiCAncCHwEngbUSYPvAO8Jp6trOBcb19Cf0M+DrwWIRBPvwD/KZs2s1gRF4X68DjPhVjPgNeojmBJoAnGurbJGglhL7VaGKZtU3QzSBUoFU8d/9MuYNkHrwJFcg7fsiU4Hgu5sXhKC+zYNtjBPK6w2RI1J0yRiCvW3CGxGQlot/Nj+Iyi7K5E8hBrEDfM5gPzpkNxOZgYgX6l/BUbEquIDYHU+X7oFFaZtG2Vkk8LQOfVmjfJtHBbRWBbgMvV2g/EqT+Tjp7OoEcVE1+j8qVI/rDiW4GOegEctAJ5KCqQH/UYkWz/FmlcVWBTlY1oGF+B15PbURHR0dHR0P8B16Z/23Ljv1mAAAAAElFTkSuQmCC",
            title: "会员中心",
            urlLink: ""
          },
          {
            iconImg:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNTE4RjhBQjhFQkIxMUU2OTc2RThDNTRCNDk3OEY5NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNTE4RjhBQzhFQkIxMUU2OTc2RThDNTRCNDk3OEY5NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE1MThGOEE5OEVCQjExRTY5NzZFOEM1NEI0OTc4Rjk0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE1MThGOEFBOEVCQjExRTY5NzZFOEM1NEI0OTc4Rjk0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vRshyQAAAudJREFUeNrsml2IDWEYx+ewHOvOzbpQa11QLtSmdbFZcrHrSinXSi6Eko+Udgu5WLW+LiSuKFxIKZIL+YgLZRftBfkqpZRISau2XSvb8X/Mc+rxmjkz2rFm5v0/9at3Zs6ZOfM77/N+zVRqtVrAiI8ZVEBBFERBFERBFERBnkZTvbDh7jvaMHG1eyFr0FRSrAPcBmOgVnLG9F47GqaYiRXgAah6UkmaQQ9YrTxOqkFHPZJjQ+75SJoU6/S4yelMI6jqsaAqx0EcKFIQBVEQBZVwslqwGAU3wH3wCnzUaYP3gj6Dw+CsSmINMnEFbANfmGJ/xgHQH7F/nk4w20ALmJnBtXqLJqgPDDj7lqm09WB2xtcrlKDrzgxbet1DKq3J9xQbAVtN71QBF8BGjoPCOAE+me3+6ZaTZ0HfwRmzvdxtG3wXdMvpzgdifquk4R7QGoRLp+06Rsps0JjXNuieKcvzl+6Iz4jAleC12fcUbAFDKqq0NeiZKa/RBtqN/Y4cG+eC8ElFaQW9N+XWmM9cSjjH5TIL+mbK8yOOy7Osrwnn+FBmQXOdtibqeEvCOdrKLMimVVw7s6nB9ysJxwsvqN2UZc1nMuIzMuXoivn+wSCj53t5FdRjyrIYdi0mze6AYypjMVgHbqq8TKJSf0/avP6ShxenJzXN6g2t3PwLMGsarv1rSJH3119kXWeX2X6jI2ZONUzsBIvM9mlNJwrSmAPOB7+vEu7T3mmUgsKQ5dRTzr6LYAk4GYSL+P80irDkul3/yB3gh+nZdoO9OiSQFnWBM8D0RpCErCwuBZvBW6e3G1a8TDE33Z6D4w0msIGvNagezZpW0uU/DMJ1o5faFo1kdI3hIguyNb+rwVRjygPFIqbYf/snGBREQRREQRRUHkETHvuYSCNo0GNBg2kE9Xpai+Se+9IIegRWBeGC+LgHYsb1XuWeh9JOVp+AtWyizVMNBrt5CqIgCqIgCqIgCmJQ0F/ETwEGAHbgsxy9Nu+hAAAAAElFTkSuQmCC",
            title: "我的优惠",
            urlLink: ""
          }
        ],

        [
          {
            iconImg:
              "data:image/png;base64,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",
            title: "服务中心",
            urlLink: ""
          },
          {
            iconImg:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNjgwMTE3NDA3MjA2ODExODIyQUM5MEYyMEIxODZDMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyRDEwRURERUIwOTYxMUU2OTQxN0U3MTQ5QURFODU1RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyRDEwRUREREIwOTYxMUU2OTQxN0U3MTQ5QURFODU1RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NmNjMjQyY2EtZDQwZS00YmMxLWE2ZWYtMDVkNDk3N2I5YjUwIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YWFmZTU3OTItZDcyNS0xMTc5LWExYTktYTI2YTg0MzgzYTZiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+f8uDAQAAA7tJREFUeNrsnFtIFFEYx/+7mlp4y9UuppubmHbB1PASUpBoQQo+9CAagg8SFCoVi/SSaS9BlEWWPRQlRfTSRUMJddGkh8TKS2heAsVl1TLzll2W1G1mvNSuu+6MKDkz3wcDszvnf858v/3OOd85M6zCZDKBzLYpCBABIkAEiAARIAIkD0CX482vanWW5bMk4PMNIYUdeZcc/1KAysIcGJo8MTUpPiwOjKt+4aM4fMYH7j7n+cqUPMtlcXB634gTDmvsfbP3/+LSKSE9Qcm7ATZypGCGFnchxZWCfgEpmGkaKwNIpkaAlm0W0+qyCdAy5Q7yAGSeJGZI1P+SpQGyhNNYdhQ1RUmSQhOXXY6IZLuQlHbh9DZFoPZmkuRi52VxEvQtYfZ6x2KL1QwM9Wjw6HQejBPS7GDOrkDq1Qvw1vTYiiTb0/yPMQ88zZMuHNZY30oL8jhfBeVBv43H8SzvIsYHpD9NjRrA+cr6zA+QKQOVV85ioG2tbOZy1teqa7mc73YAZeBVSSY6ajSyS3jaqwM53y0G7YUR9O5xrGzXFY1PYu13MRd32fKBsxuPMchhjYyXpiYegCYG5cvn+zCfCHJaegNO62aSL7HqHZ15APLaalxyA6xWFfBTtHpVgNEeoBJsi6pfcgMBe99CHdYoWr0mssFyybEwgkKPlFsLNV7huSeplDtEq098br+LuaqGEJVWJ7iBmHQd3LyHuIM9F5s++lgt57slNytFS7AvDRjqDkRXnR+vyoMOGBCT8nA+PGNSgMGPIeLSp963tqJ3yM/Pt7IJomjG9v1jmJragP5Wf9ubJUwARqe+RkJOIXN+758LM/ppVt/mby2/WB16BRCZ0sDplQ53he4HzazNvurVaK1KRHd9FLfyVTKJpMdmQB3eyPTZMqjU+nnyI33MvTD1efmZ61sqkqFvisDY7O7AatBrohqw+1CFmd4uIPblBa3OOijrNldxFvrbg1F9/ST3KSGnGL47OvF3s3+168Ef0JxpeY1zWfj1zRW6ohPoqFGbXQmJ0yM++xZc3CZg+6nI/9ZDGCDblsmEahA8fQcwPemIsU8b0de2E/rmUHTWLj4QBh80MLnJe2zZ9QEemz5z360GvXdAF3N2e7kAsdElrTettDoFn2L06JkAESACtCJm+T4mAaIIIkAEiAARIAJEgMgIEAEiQASIABEgAkSAyAQCGpaQ38MrAeiBhADd4VvQUUCluczBPipJZ471IgUzMvtDn+MroD8WIEAEiAARIAJEgAiQXO2PAAMABmvamAQ2Ng8AAAAASUVORK5CYII=",
            title: "小米之家",
            urlLink: ""
          }
        ],
        [
          {
            iconImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABPUlEQVR4Ae3ctVUAURBGYc5mWA/UgNMFVdAKIe7uEL8mcLcacMuHH0uQPWcFe3ODW8B861phZikRCAD9fSCAAApJsxpSx+pO2T/t7nWGEdVWHCgk1WpBWaQtq9pcQK84m8oib+cNKSvQvDInrWQDCkmjMme1ZQHqdwg0kgVo3yHQaRagc4dAD1mAbhwCGUAAFQkggAACCKC6kuuIC6jsG1ohaXcNBJAGLFhn7EBWZgABBBBAAAEEEEAAcSYdfADlLSTdCiCA8t8HmmQn/RsBBBBAAAEEEEAAAQQQQAABxNsdAP2HAAIIIIAAAggggPgc6p4P6tI7zgLU6xBoOAtQg0Og1qyfhU87wlnK8918lVpzgLOlatKB0pFmIsZZeMPJDvRxn9Sn9tW5uvmnXahDNaCa+D0O/w8CCCCA/nmPOt4V6XqGZ9oAAAAASUVORK5CYII=",
            title: "F码通道",
            urlLink: ""
          }
        ],
        [
          {
            iconImg: "https://m.mi.com/static/img/i-setting.fb9625b3f2.png",
            title: "设置",
            urlLink: ""
          }
        ]
      ]
    };
  }
};
</script>



<style>
.user{
  padding-bottom: 70px;
  background: #f5f5f5;
}
.user-header {
  display: flex;
  padding: 20px 10px;
  background: url(https://m.mi.com/static/img/bg.63c8e19851.png) center 0 #f37d0f;
  background-size: auto 100%;
}
.user-header-photo {
  width: 50px;
  height: 50px;
}
.user-header-photo > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.user-header-name {
  padding-left: 10px;
  font-size: 14px;
  color: #fff;
  line-height: 50px;
}
.user-order{
  background: #fff;
}
.user-order-all {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.user-order-all > span {
  font-size: 12px;
  color: #2c2c2c;
  line-height: 40px;
  text-decoration: none;
}
.user-order-all > span > i {
  padding-left: 5px;
  font-size: 12px;
}
.user-order-common {
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
  border-bottom: 10px solid #f5f5f5;
}
.user-order-common-link {
  display: block;
  padding: 10px 0;
}
.user-order-common-link > span {
  display: block;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.87);
  line-height: 28px;
}
.user-order-common-link > span:first-child {
  font-size: 20px;
  color: #999;
}
.user-option-items {
  display: flex;
  justify-content: space-between; 
  padding: 0 10px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
}
.user-option-items:last-child {
  border-bottom: none;
}
.user-option-items-left {
  padding-left: 50px;
}
.user-option-list{
  /* margin-bottom: 10px; */
  background: #fff;
  border-bottom: 10px solid #f5f5f5;
}

</style>

