import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    components: {
      acmeApp: () => import('@/views/acme/TheHome.vue'),
      aeqApp: () => import('@/views/aequivalent/TheHome.vue'),
      verifiveApp: () => import('@/views/verifive/TheHome.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
