<template>
  <div class="wrapper" v-if="showSwiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>


      <!-- Optional controls -->
      <div class="swiper-pagination swiper-padding-buttom" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper', 
    props:{
      swiperList:Array
    },
    data () {
      return{
        swiperOption:{
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: false
        }
      }
    },
    computed:{
      showSwiper() {
        return this.swiperList.length>0
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .wrapper >>>.swiper-pagination-bullet-active
    background #fff
  .wrapper
    width 100%
    overflow hidden
    height 0
    padding-bottom 31.25%
    background #ccc
    .swiper-padding-buttom
      padding-bottom 1%
    .swiper-img
      width 100%
</style>
