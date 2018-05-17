<template>
  <div class="wrapper">
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
    data () {
      return{
        swiperOption:{
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperList: [{
          id: '001',
          imgUrl: 'https://img.alicdn.com/tfs/TB19G9drGmWBuNjy1XaXXXCbXXa-490-300.jpg'
        },{
          id: '002',
          imgUrl: 'https://img.alicdn.com/tfs/TB19G9drGmWBuNjy1XaXXXCbXXa-490-300.jpg'
        }]
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
      padding-bottom 28.25%
    .swiper-img
      width 100%
</style>
