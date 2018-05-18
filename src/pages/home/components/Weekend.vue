<template>
    <div>
        <div class="recommend-title">
            周末去哪 
        </div>
       <ul>
           <li 
           v-for="(item,index) of weekendList" 
           :key="index" >
                <div class="item-img-wrapper">
                   
                    <img class="item-img" :src="item.imgUrl">
                </div>
               <div class="item-info"> 
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-content">{{item.desc}}</p>
                 
                </div>
           </li>
       </ul>
    </div>
</template>

<script>
    export default {
      
        props:{
            weekendList:Array
        }
        
    }
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'; 
    .recommend-title
       
        line-height .8rem
        background #eee
        text-indent .2rem
   
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 33.09%
        .item-img
            width: 100%
       
        
           
    .item-info
        padding .1rem
        .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
        .item-content
                line-height .4rem
                color #ccc
                ellipsis()
        
                



</style>
