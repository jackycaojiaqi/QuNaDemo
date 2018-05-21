<template>
    <div>
        <router-link to="/">
            <div class="header-abs" v-show="showAbs"> <div class="iconfont back-icon">&#xe697;</div></div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
          
             <router-link to="/">
                 <div class="iconfont header-back">&#xe697;</div>
            </router-link>
              景点详情
        </div>
    </div>
</template>

<script>
    export default {
        name:'DetailHeader',
        data(){
            return{
                showAbs: true,
                opacityStyle: 0
            }
        },
        methods:{
            handleScroll(){
                console.log('scroll')
                const top = document.documentElement.scrollTop
              if(top>60 ){
                  let opacity = top/120
                  opacity = opacity>1?1:opacity
                  this.opacityStyle={
                      opacity
                  }
                 this.showAbs=false   
              }else{
                 this.showAbs = true 
              }
            }
        },
        activated(){
            window.addEventListener('scroll',this.handleScroll)
        },
        // 解除全局事件的绑定
        deactivated(){
            window.removeEventListener('scroll',this.handleScroll)
        }
    }
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        color #fff
        border-radius .4rem
        text-align center
        line-height .8rem
        background rgba(0,0,0,.8)
        .back-icon
            font-size .5rem
            padding-right .05rem
     .header-fixed
        z-index 2
        position fixed
        top 0
        left 0
        right 0
        overflow hidden
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        font-size .3rem
        .header-back
            top 0
            left 0
            position absolute
            text-align center
            width .64rem
            font-size .4rem
            color #fff
</style>
