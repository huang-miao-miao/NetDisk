import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import ("@/views/Login/index.vue")
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import ("@/views/Index/index.vue")
    }
  ]
})

export default router
