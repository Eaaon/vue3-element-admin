import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '@/views/home/index.vue'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: 'login',
    },
  },
  {
    path: '/home',
    name: 'home',
    component: Layout,
    meta: {
      title: 'home',
    },
    children: [
      {
        path: 'basic',
        name: 'FormBasicDemo',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: "22",
        },
      }
    ]
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401/index.vue'),
    meta: {
      title: '401',
    },
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404/index.vue'),
    meta: {
      title: '404',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    redirect: '/404'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})



export default router
