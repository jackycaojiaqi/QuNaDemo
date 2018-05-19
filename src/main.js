// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 路由就是根据网址的不同，返回不同的页面
import Vue from 'vue'
import App from './App'
import router from './router'
import fasterclick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
fasterclick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router: router,
  components: {App: App},
  template: '<App/>'
})
