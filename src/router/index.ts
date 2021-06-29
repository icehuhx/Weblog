import { createRouter, createWebHashHistory } from 'vue-router';

const routerHistory = createWebHashHistory();

export default createRouter({
  history: routerHistory,
  routes: [{
    path: '/',
    component: () => import('../views/index.vue')
  }]
})