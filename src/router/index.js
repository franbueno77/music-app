import { createRouter, createWebHashHistory } from 'vue-router'
// defino las rutas de mi aplicación, están definidas en lazy-loaded, esto es que no serán cargadas por el navegador hasta su uso
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/musicList',
    name: 'musicList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "locations" */ '../views/MusicList.vue')
  },

  {
    path: '/save',
    name: 'save',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "create" */ '../views/Save.vue')
  },
  {
    path: '/player',
    name: 'player',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "create" */ '../views/Player.vue')

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
