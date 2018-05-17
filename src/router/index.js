
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 根路径
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
