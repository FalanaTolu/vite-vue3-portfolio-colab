import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
    alias: "/home",
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    // component: Login,
    component: () => import(/* webpackChunkName: "login" */ '../views/ProjectsView.vue'),
  },
  {
    path: '/fun',
    name: 'fun',
    // component: SignUp,
    component: () => import(/* webpackChunkName: "signup" */ '../views/FunView.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    // component: NotFound,
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
