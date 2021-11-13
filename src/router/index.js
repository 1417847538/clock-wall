/*
 * @Date: 2021-11-12 22:47:59
 * @LastEditors: xiaolan
 * @LastEditTime: 2021-11-13 18:13:34
 * @FilePath: \clock-wall\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
const Aisa = () => import('../views/Asia' /* webpackChunkName: "country" */)
const Europe = () => import('../views/Europe' /* webpackChunkName: "country" */)
const NorthAmerica = () =>
  import('../views/NorthAmerica' /* webpackChunkName: "country" */)
const SouthAmerica = () =>
  import('../views/SouthAmerica' /* webpackChunkName: "country" */)
const Africa = () => import('../views/Africa' /* webpackChunkName: "country" */)
const Oceania = () =>
  import('../views/Oceania' /* webpackChunkName: "country" */)
const Antarctica = () =>
  import('../views/Antarctica' /* webpackChunkName: "country" */)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Asia',
  },
  {
    path: '/Asia',
    name: 'Asia',
    component: Aisa,
  },
  {
    path: '/Europe',
    name: 'Europe',
    component: Europe,
  },
  {
    path: '/NorthAmerica',
    name: 'NorthAmerica',
    component: NorthAmerica,
  },
  {
    path: '/SouthAmerica',
    name: 'SouthAmerica',
    component: SouthAmerica,
  },
  {
    path: '/Africa',
    name: 'Africa',
    component: Africa,
  },
  {
    path: '/Oceania',
    name: 'Oceania',
    component: Oceania,
  },
  {
    path: '/Antarctica',
    name: 'Antarctica',
    component: Antarctica,
  },
]

const router = new VueRouter({
  routes,
})

export default router
