import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home/Home.vue'
import FriendPage from '@/pages/friend/Friend.vue'
import MapPage from '@/pages/map/Map.vue'
import MemberPage from '@/pages/member/Member.vue'
import OrderPage from '@/pages/order/Order.vue'
import PopularPage from '@/pages/popular/Popular.vue'
import RecommendPage from '@/pages/recommend/Recommend.vue'
import SearchPage from '@/pages/search/Search.vue'
 shopInformation_header
import ShopPage from '@/pages/shop/Shop.vue'

 master
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/friend',
    name: 'friend',
    component: FriendPage
  },
  {
    path: '/map',
    name: 'map',
    component: MapPage
  },
  {
    path: '/member',
    name: 'member',
    component: MemberPage
  },
  {
    path: '/order',
    name: 'order',
    component: OrderPage
  },
  {
    path: '/popular',
    name: 'popular',
    component: PopularPage
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: RecommendPage
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPage
 shopInformation_header
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopPage

 master
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
