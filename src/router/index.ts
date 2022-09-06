import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    components: {
      veriApp: () => import('@/views/verifive/TheHome.vue'),
      aeqApp: () => import('@/views/aequivalent/TheHome.vue'),
      // ttpApp: () => import('@/views/ttp/TheHome.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
