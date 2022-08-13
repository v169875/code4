<template>
  <div class="w">
    <home-header ></home-header>
    <!-- :city="city"  -->
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend  :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header.vue";
import HomeSwiper from "./components/Swiper.vue";
import HomeIcons from "./components/Icons.vue";
import HomeRecommend from'./components/Recommend.vue';
import HomeWeekend from'./components/Weekend.vue';
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data (){
    return{
      lastCity:'',
      // city:'',
     swiperList:[],
     iconList:[],
     recommendList: [],
      weekendList: []
    }
  },
  computed:{
    ...mapState (['city'])
  }
 ,methods:{
  getHomeInfo(){
    axios.get('/api/index.json?city='  + this.city)
       .then(this.getHomeInfoSucc) 
},
getHomeInfoSucc(res){
 res=res.data
 if (res.ret&&res.data){
  const data=res.data
  // this.city=data.city
  this.swiperList=data.swiperList
  this.iconList=data.iconList
  this.recommendList = data.recommendList
  this.weekendList = data.weekendList
 }
  console.log(res)
   }
},
mounted (){
this.lastCity=this.city
    this.getHomeInfo()
  },
  activated () {
    if(this.lastCity!==this.city){
      this.lastCity=this.city
      this.getHomeInfo()
    }

  }
}
  //生命周期函数引入axiso
</script>

<style>
  *{
     font-family: Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
  }
  .w{
    max-width: 13rem;/*移动端650px,并且最好使用max-width*/
    margin: 0 auto;
  }</style>
