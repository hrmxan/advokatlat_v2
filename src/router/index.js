import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Main',
        component: () => import('../views/MainView.vue')
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('../views/NewsView.vue')
      },
      {
        path: 'lawyers',
        name: 'Lawyers',
        component: () => import('../views/LawyersView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router
