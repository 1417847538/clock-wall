/*
 * @Date: 2021-11-12 22:47:59
 * @LastEditors: xiaolan
 * @LastEditTime: 2021-11-14 00:04:23
 * @FilePath: \clock-wall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/global.scss'
import * as echarts from 'echarts'
import './plugin/plugin'
import 'lib-flexible/flexible'




// 全局配置echars
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
