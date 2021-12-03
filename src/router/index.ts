import Layout from '@/layout/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router';

const routerHistory = createWebHashHistory();

export default createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('@/views/index.vue')
        }
      ]
    },
    {
      path: '/user',
      component: Layout,
      children: [
        {
          path: 'contact',
          component: () => import('@/views/contact.vue')
        }
      ]
    }
  ]
})