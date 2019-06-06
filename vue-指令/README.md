# vue-内部指令


### 运行项目

```node
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### 项目目录
+ v-if-else,v-show

```html
<template>
	<div class="child-box">
		<h1>{{ msg }}</h1>
		<hr />
		<div v-if="isTrue">今天晴天~ ( true: ⛅️ )</div>
		<div v-else>今天雨天~ ( false: 🌧 )</div>
		
		<div v-show="isTrue">今天也是元气满满</div>
	</div>
</template>	

<script>
export default {
	data() {
		return {
			msg: 'v-if-else',
			isTrue: true
		};
	}
};
</script>
```

+   v-for


```html
<template>
	<div class="child-box">
		<h1>{{ msg }}</h1>
		<hr />
		<ul>
			<li v-for="item in items"  :key="item">{{ item }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: 'v-for',
			items: [20, 23, 18, 65, 32, 19, 54, 56, 41]
		};
	}
};
</script>
```


+ v-text,v-html

```html
<template>
	<div id="child-box">
		<h1>{{ msg }}</h1>
		<hr />
		<div>{ { message } } 与 v-text="message" 实现的效果是一样的.</div>
		<span>{{ message }}</span> = <span v-text="message"></span>
		<br />
		<div>{{ messageHtml }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: 'v-text,v-html',
			message: '每天都要进步一点呀',
			messageHtml: '<span>我是 v-html 渲染出来的</span>'
		};
	}
};
</script>
```

+ v-on


```html
<template>
  <div class="vue-04">
    <h1>{{ msg }}</h1>
    <hr>
    <div>本场比赛得分：{{count}}</div>
    <button v-on:click="jiafen">加分</button>
    <button v-on:click="jianfen">减分</button>
    <button @click="wipedata">清空</button>
    <div><input type="text" @keyup.enter="onEnter" v-model="secondCound"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "v-on 绑定事件监听",
      count: 1,
      secondCound:''
    }
  },
  methods: {
    jiafen:function(){
        this.count++;
    },
    jianfen:function(){
        this.count--;
    },
    wipedata:function(){
        this.count = 0;
        this.secondCound = "";
    },
    onEnter:function(){
        this.count = this.count + parseInt(this.secondCound);
    }
  }
};
</script>
```

+ v-model


```html
<template>
  <div id="v-mode">
    <h1>{{ msg }}</h1>
    <hr>
    <h3>简单双向绑定</h3>
    <div>{{ messages }}</div>
    <ul>
      <li>.lazy：取代 imput 监听 change 事件。</li>
      <li>.number：输入字符串转为数字。</li>
      <li>.trim：输入去掉首尾空格。</li>
    </ul>

    <div>
      <input type="text" v-model.trim="messages">
    </div>
    <hr>
    <div>
      <textarea name id cols="30" rows="10" v-model="messages"></textarea>
    </div>
    <h3>多选按钮绑定一个值</h3>
    <input type="checkbox" id="isSure" v-model="isSure">
    <label for="isSure">{{isSure}}</label>

    <h3>多选按钮绑定一个数组</h3>
    <div>
      <input type="checkbox" value="01" v-model="web_names">
      <label for="model_01">01</label>
      <input type="checkbox" value="02" v-model="web_names">
      <label for="model_01">02</label>
      <input type="checkbox" value="03" v-model="web_names">
      <label for="model_01">03</label>
    </div>
    <div>{{web_names}}</div>

    <h3>单选按钮绑定</h3>

    <div>
      <input type="radio" value="男" v-model="sex">
      <label for>男</label>
      <input type="radio" value="女" v-model="sex">
      <label for>女</label>
    </div>
    <div>{{ sex }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "v-model指令",
      messages: "原始数据",
      isSure: false,
      web_names: [],
      sex:"男"
    };
  }
};
</script>
```

+ v-bind
需要注意的是，被绑定的 class 是字符串格式，注意用引号括起来。

```html
<template>
  <div class="child-box">
    <h1>{{ msg }}</h1>
    <p>绑定：标签属性scr</p>
    <div id="app">
      <img v-bind:src="imgSrc" width="200px">
    </div>
    <p>绑定CSS</p>
    <div :class="className">1.绑定classA</div>
    <div :class="['classA','classB']">2.绑定 class 中的数组</div>
    <div :class="{'classA':isOK}">3.绑定 class 中的判断</div>
    <div :class="isOK?'classA':'classB'">4.绑定 class 中的三元运算 {{ isOK?'classA':'classB' }}</div>
    <div :style="{color:red,fontSize:font}">5.绑定 style</div>
    <div :style="styleObject">6、用对象绑定style样式</div>
    <div>
      <input type="checkbox" id="isOK" v-model="isOK">
      <label for="isOK">isOK = {{ isOK }}</label>
    </div>
    <p>需要注意的是：绑定 class 要注意是 string 类型的，需要用引号括起来</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "v-bind",
      imgSrc: "../../static/img/demo.jpeg",
      className: "classA",
      isOK: true,
      font: "20px",
      red: "red",
      styleObject: {
        fontSize: "16px",
        color: '#2196F3'
      }
    };
  }
};
</script>

<style>
.classA {
  color: red;
}
.classB {
  color: chocolate;
  font-weight: 700;
}
</style>
```

+ v-pre

```html
<template>
	<div class="child-box">
		<h1>{{ msg }}</h1>
		<hr />
		<div v-pre>{{message}}</div>
		<p>在模板中跳过vue的编译，直接输出原始值。就是在标签中加入v-pre就不会输出vue中的data值了。</p>
	</div>
</template>	

<script>
export default {
	data() {
		return {
			msg: 'v-pre'
		};
	}
};
</script>
```

+ v-cloak


```html
<template>
  <div class="child-box">
    <h1>{{ msg }}</h1>
    <hr>
    <div v-cloak>{{message}}</div>
    <p>在vue渲染完指定的整个DOM后才进行显示。它必须和CSS样式一起使用.</p>
  </div>
</template>	

<script>
export default {
  data() {
    return {
	  msg: "v-cloak指令",
	  message: "加载完整个 DOM 才能看见我~"
    };
  }
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
```

+ v-once


```html
<template>
  <div class="child-box">
    <h1>{{ msg }}</h1>
    <hr>
    <div v-once>{{message}}</div>
    <div><input type="text" v-model="message"></div>
    <p>在第一次DOM时进行渲染，渲染完成后视为静态内容，跳出以后的渲染过程。</p>
  </div>
</template>	

<script>
export default {
  data() {
    return {
      msg: "v-once指令",
      message: '只渲染一次'
    };
  }
};
</script>
```