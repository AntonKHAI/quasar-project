
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/src/pages/First.vue', component: () => import('pages/First.vue') },
      { path: '/src/pages/Second.vue', component: () => import('pages/Second.vue') },
      { path: '/src/pages/Third.vue', component: () => import('pages/Third.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
