import Layout from '@/layout/index.vue'

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: 'login',
      icon: "avatar"
    },
    hidden: true
  },
  {
    path: '/',
    name: '',
    component: Layout,
    meta: {
      title: 'Dashboard',
      icon: "House"
    },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: "Dashboard",
          icon: "House"
        },
      }
    ]
  },
  {
    path: '/',
    redirect: '/home',
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401/index.vue'),
    meta: {
      title: '401',
    },
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404/index.vue'),
    meta: {
      title: '404',
    },
    hidden: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    redirect: '/404',
    hidden: true
  },
]