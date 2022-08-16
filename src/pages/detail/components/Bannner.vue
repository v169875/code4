<template>
<div>
<div class="banner"  @click="handleBannerClick">
 <img  class="banner-img"  
  src="https://img1.qunarzz.com/sight/p0/1507/a3/a37ced8252b273c9.img.jpg_600x330_d7e04f5c.jpg">
<div class="banner-info">
    <div class="banner-title">夫子庙秦淮河游船</div>
    <div  class="banner-number">  
        <span class="iconfont  banner-icon">&#xe692;</span>
    4</div>
</div>
</div>
<common-gallary 
:imgs="imgs" 
v-show="showGallary"
@close="handleGallaryClose"></common-gallary>
</div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
   name:'DetailBanner',
   data  ()  {
    return{
        showGallary:false,
        imgs:  ['https://img1.qunarzz.com/sight/p0/1507/a3/a37ced8252b273c9.img.jpg_600x330_d7e04f5c.jpg',
             'https://img1.qunarzz.com/sight/p0/1507/43/43e4a23f921b8b0a.img.jpg_r_800x800_05f77565.jpg']
    }
   }
,
methods:{
    handleBannerClick () {
    this.showGallary = true
    },
    handleGallaryClose () {
    this.showGallary = false
    }
},
   components: {
    CommonGallary
}
}
</script>


<style   lang= "stylus"  scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom :55%
.banner-img
  width :100%
.banner-info
   display: flex
   position :absolute
   left: 0
   right :0
   bottom :0
   line-height:  .6rem
   color: #fff
   background-image: linear-gradient(top,rgba(0,0,0, 0 ),
   rgba(0,0,0, 0.8 ))
.banner-title
  flex: 1
  font-size: .32rem
  padding: 0 .2rem
.banner-number
  height :.32rem
  padding : 0 .4rem
  height : .32rem
  margin-top : .14rem
  line-height:  .32rem
  border-radius:  .2rem
  background : rgba(0,0,0 .8)
  font-size: .24rem
.banner-icon
  font-size: .24rem
</style>
