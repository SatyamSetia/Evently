import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/events',
      name: 'allEvents',
      component: () => import ('./views/AllEvents.vue')
    },
    {
      path: '/events/:id',
      name: 'event',
      component: () => import('./views/Event.vue')
    }
  ]
})
