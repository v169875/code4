<template>
<div class="header">
    城市选择
    <router-link   to="/">
     <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    </div>

</template>
<script>
export default {
   name:'CityHeader',
}
</script>
<style  lang= "stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    text-align: center
    color: #fff
    font-size: .4rem
    .header-back
      position: absolute
      top: 0
      left: .0.5rem
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
