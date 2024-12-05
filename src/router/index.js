// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import ImageDetail from '../components/ImageDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainView,
  },
  {
    path: '/image/:id',
    name: 'ImageDetail',
    component: ImageDetail,
    props: true,
  },
  // Optionnel : redirection pour les routes non définies
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
