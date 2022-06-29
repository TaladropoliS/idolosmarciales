import Vue from 'vue'
import VueRouter from 'vue-router'
import PeleadoresVue from '../views/PeleadoresVue.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'peleadores',
    component: PeleadoresVue,
    children: [
      {
        path: '/peleador/:id',
        name: 'peleador',
        component: () => import('../components/PeleadorRouterVue.vue')
      }

    ]
  },
  {
    path: '/buscador',
    name: 'buscador',
    component: () => import('../views/BuscadorView.vue')
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('../components/NotFoundVue.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
