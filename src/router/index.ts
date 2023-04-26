import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { constantRoutes } from './route'
import store from '@/store'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...constantRoutes],
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

console.log(store.getters.routes)

router.beforeEach(async (to, from, next) => {
  const tTitle = to?.meta?.title as string
  const title = "Vue3 Element Admin"
  document.title = tTitle? `${tTitle} | ${title}` : `${title}`
  const isAuthenticated = true

  await store.dispatch('permission/addRoutes',constantRoutes)

  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router
