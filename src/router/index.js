import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Auth.vue')
    },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('user')) {
        next('/');
      } else {
        next();
      }
    },
  },
  {
    path: '/book-appointment',
    name: 'BookAppointment',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Book.vue')
    },
    beforeEnter: (to, from, next)=> {
      if (localStorage.getItem('user')) {
        next()
      } else {
        next("/auth")
      }
    },
    meta: {
      layout: 'default',
      shadow: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
