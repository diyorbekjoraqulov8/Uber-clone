import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/directions',
    name: 'directions',
    component: () => import('@/views/DirectionsView.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/MapView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
