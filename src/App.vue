<template>
  <div id="app">
    <!--显示当前路由地址所对应的内容  根目录-->
    <!--keep-alive 直接去内存，不掉用多次网络 -->
    <keep-alive>
       <router-view/>
    </keep-alive>
   
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;

}
</style>
