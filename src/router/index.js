import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Administration from '../views/Administration.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
      // component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/administration',
      name: 'administration',
      component: Administration
    }
  ]
})

export default router
