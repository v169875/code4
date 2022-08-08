<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data () { 
    return {
      swiperOption: {
        pagination:'.swiper-pagination',
        loop:true
      },
      swiperList:[
        {
          id:'0001',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg'
        },
           {
          id:'0002',
          imgUrl:'http://img1.qunarzz.com/piao/fusion/1807/22/382624cbe97b0502.jpg_750x200_36a074d6.jpg'
        },
         {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/d5/fe8867e329175202.jpg_750x200_98799354.jpg'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/29/6a13907ab0f9bf02.jpg_750x200_452cfebe.jpg'
        }
      ]
    };
  }
};
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
