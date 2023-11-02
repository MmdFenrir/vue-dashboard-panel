import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../middleware/auth'
// import IsLogin from '../middleware/isLogged'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../pages/dashboard/dashboardApp.vue'),
      meta: {
        middleware: Auth
      },
      children: [
        {
          path: 'user-list',
          name: 'user.list',
          component: () => import('../pages/users/userListApp.vue')
        },
        {
          path: 'create-user',
          name: 'user.create',
          component: () => import('../pages/users/createUserApp.vue')
        },
        {
          path: 'edit-user/:id',
          name: 'user.edit',
          component: () => import('../pages/users/editUserApp.vue')
        }
      ]
    }
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('../pages/auth/loginApp.vue'),
    //   meta: {
    //     middleware: IsLogin
    //   }
    // }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('asd', to)
  if (to.meta.middleware) to.meta.middleware(next)
  else next()
})

export default router
