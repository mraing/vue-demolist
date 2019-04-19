// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '../node_modules/element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import  Axios from 'axios'
Vue.config.productionTip = false;

Vue.use(ElementUI,Axios);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
});
