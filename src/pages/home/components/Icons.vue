<template>
<div class="icons">
   <swiper :options="swiperOption">
     <swiper-slide v-for ="(page,index) of pages" :key="index">
  <div 
  class="icon" 
  v-for="item of page" 
   :key="item.id"
   >
<div class="icon-img">
  <img   class="icon-img-content"  :src="item.imgUrl" >
  </div> 
  <p class=icon-desc>{{item.desc}}</p>
  </div>
  </swiper-slide> 
  </swiper>
</div>
</template>
<script>
export default {
   name:'HomeIcons',
    props:{
    list: Array
  },
  data() {
  return{
    swiperOption: {
   autoplay: false
    }
    }
  },
  //  data () {
  //   return {
  //      iconList: [
  //       {
  //         id: '0001',
  //         imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
  //         desc: '景点门票'
  //       }, {
  //         id: '0002',
  //         imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
  //         desc: '文化古迹'
  //       }, {
  //         id: '0003',
  //         imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
  //         desc: '自然风光'
  //       }, {
  //         id: '0004',
  //         imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
  //         desc: '游乐场'
  //       }, {
  //         id: '0005',
  //         imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
  //         desc: '夏日玩水'
  //       }, {
  //         id: '0006',
  //         imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png',
  //         desc: '夫子庙'
  //       }, {
  //         id: '0007',
  //         imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
  //         desc: '总统府'
  //       }, {
  //         id: '0008',
  //         imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
  //         desc: '中山陵'
  //       }, {
  //         id: '0009',
  //         imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
  //         desc: '万达主题乐园'
  //       }, {
  //         id: '0010',
  //         imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
  //         desc: '牛首山'
  //       } ] 
  
  //   }
  //  },
  computed: { // 计算属性
    pages () {
      const pages = []
      this.list.forEach((item, index) => { // iconList 需要改成list，属性传值
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages;
    }
    // isShowSwiper () { // 控制不要默认显示的最后一页
    //   return this.list.length
  //   }
  // },
  // methods: {
  //   goDetail () {
  //     this.$router.push('/detail/000X')
    }
  }


</script>
<style  lang="stylus"  scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons>>> .swiper-container
  height :0
  padding-bottom: 50%
.icons
  margin-top: .1rem  
.icon
  position: relative
  overflow: hidden
  float: left
  height :0
  width: 25%
  padding-bottom: 25%
.icon-img
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom : .44rem
  box-sizing: border-box
  padding : .1rem
.icon-img-content
  display: block
  margin:0 auto
  height :100%
.icon-desc
  position :absolute
  left: 0
  right: 0
  bottom :0
  height :.44rem
  line-height: .44rem
  text-align :center
  color: $darkTextColor
  ellipsis()
</style>
