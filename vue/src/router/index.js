import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import First from '../components/First.vue';
import Restaurants from '../views/Restaurants.vue';
import ProductDetail from '../views/ProductDetail.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/first',
    name: 'First',
    component: First
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: Restaurants
  },
  {
    path: '/product-detail',
    name: 'Product Detail',
    component: ProductDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
