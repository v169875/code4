<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper" >
    <!--  V-if="list.length"  默认显示空数组了 -->
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
      <img  class="swiper-img" :src="item.imgUrl" ></swiper-slide>       
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
// swiper options example:
export default {
  name: "HomeSwiper",
  props:{
    list: Array
  },
  data () { 
    return {
      swiperOption: {
        pagination:'.swiper-pagination',
        loop:true
      }
    }
  },
  computed: {
    showSwiper(){
      return this.list.length
    }
  }
}
 
  

</script>
<style lang="stylus" scoped>
  // 样式穿透
.wrapper >>> .swiper-pagination-bullet-active
  background :#fff !important
.wrapper
  overflow: hidden
  width : 100%
  height :0
  padding-bottom :25%
.swiper-img
  width : 100%
</style>
