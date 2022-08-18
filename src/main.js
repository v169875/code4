// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from "fastclick"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "babel-polyfill"
import store from './store'

import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
// 解决浏览器300毫秒延迟
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})