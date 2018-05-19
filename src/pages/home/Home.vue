<template>
  <div>
    <home-header ></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios'
  import {mapState} from 'vuex'
  export default {
    name: 'Home',
    components: {
      HomeHeader: HomeHeader,
      HomeSwiper: HomeSwiper,
      HomeIcons: HomeIcons,
      HomeRecommend:HomeRecommend,
      HomeWeekend:HomeWeekend
    },
    data(){
      return{
        lastCity:'',
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[],
      }
    },
    methods:{
        getHomeInfo(){
            axios.get('static/mock/index.json?city=' + this.city)
              .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
          res = res.data
          if(res.ret&&res.data){
            const data = res.data
            
            this.swiperList = data.swiperList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
            this.iconList = data.iconList
          }
        }
    },
    mounted(){
        this.lastCity = this.city
        this.getHomeInfo()
    },
    computed:{
      ...mapState(['city'])
    },
    // 被设置keeplive后  会多出一个生命周期函数  activated 页面重新被现实的时候执行
    activated(){
      if(this.lastCity!==this.city){
        this.getHomeInfo()
        this.lastCity =this.city
      }
    }
  }
</script>
<style>

</style>
