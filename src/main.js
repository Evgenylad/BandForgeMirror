import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import VueLocalStorage from 'vue-localstorage'
import VueResource from 'vue-resource'
import Keen from 'keen-ui'

import Root from './components/Root'
import Foo from './components/Foo'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import OnBoarding from './components/OnBoarding'
import AddMember from './components/AddMember'
import Shows from './components/Shows'
import Tours from './components/Tours'
import Merch from './components/Merch'
import Bands from './components/Bands'
import Dashboard from './components/Dashboard'

import auth from './api/user'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(VueLocalStorage)
Vue.use(VueResource)
Vue.use(Keen)

// Configure Theme
Vue.material.theme.register('default', {
  primary: 'blue-grey',
  accent: 'orange'
})

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Root,
      children: [
        {
          path: 'navbar',
          component: Navbar
        },
        {
          path: 'login',
          component: Login
        },
        {
          path: 'signup',
          component: Signup
        },
        {
          path: 'onboarding',
          component: OnBoarding
        },
        {
          path: 'addmember',
          component: AddMember
        },
        {
          path: 'foo',
          component: Foo
        }
      ]
    },
    {
      path: '/dashboard',
      component: Dashboard,
      children: [
        {
          path: 'shows',
          component: Shows
        },
        {
          path: 'tours',
          component: Tours
        },
        {
          path: 'merch',
          component: Merch
        },
        {
          path: 'bands',
          component: Bands
        }
      ]
    }
  ]
})

auth.checkAuth()

router.beforeEach((router, redirect, next) => {
  if (auth.user.authenticated && router.path === '/') {
    next('/dashboard/shows')
  } else {
    next()
  }
})

new Vue(Vue.util.extend({ router }, App)).$mount('#app')
