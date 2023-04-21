import router from '@/router'

router.beforeEach(async (to, from, next) => {
  const tTitle = to?.meta?.title as string
  const title = "Vue3 Element Admin"
  document.title = tTitle? `${tTitle} | ${title}` : `${title}`
  const isAuthenticated = true
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})