<template>
    <div>
        <div class="recommend-title">
            热销推荐
        </div>
       <ul>
           <li class="item border-bottom" 
           v-for="(item,index) of recommendList" 
           :key="index" >
                <img class="item-img" :src="item.imgUrl">
               <div class="item-info"> 
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-content">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
           </li>
       </ul>
    </div>
</template>

<script>
    export default {
       
        props:{
            recommendList:Array
        }
        
    }
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'; 
    .recommend-title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem
    .item 
        overflow hidden
        display flex 
        height 1.9rem
        .item-img
            width 1.9rem
            height 1.7rem
            padding .1rem
        .item-info
            flex :1
            min-width 0
            paddin g .1rem
            .item-title
                margin-top .15rem
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-content
                line-height .4rem
                font-size .25rem
                color #ccc
                ellipsis()
            .item-button
                line-height .44rem
                margin-top .16rem
                background #ff9300
                border-radius .06rem
                padding 0 .1rem 
                color #fff
                



</style>
