<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe697;</div>
    </div>

    <div class="header-input">
      <span class="iconfont">&#xe6ac;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">城市
      <span class="iconfont arrow-down">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display: flex
    line-height: .86rem
    background-color: $bgColor
    color #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      padding-left .2rem
      flex: 1
      line-height .64rem
      margin-top .12rem
      color #ccc
      margin-bottom .12rem
      background #fff
      border-radius .1rem
    .header-right
      .arrow-down
        margin-left -.04rem
        font-size .1rem
      width: 1.2rem
      float: right
      text-align center

</style>
