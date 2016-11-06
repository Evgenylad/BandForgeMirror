import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import VueLocalStorage from 'vue-localstorage'
import Keen from 'keen-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Root from './components/Root/Root'
import Foo from './components/Foo'
import Login from './components/Root/Login'
import Signup from './components/Root/Signup'
import Navbar from './components/Root/Navbar'
import OnBoarding from './components/Root/OnBoarding'
import AddMember from './components/Root/AddMember'
import Shows from './components/Dashboard/Shows/Shows'
import ShowDetails from './components/Dashboard/Shows/ShowDetails'
import Tours from './components/Dashboard/Tours'
import Merch from './components/Dashboard/Merch'
import Bands from './components/Dashboard/Bands'
import Dashboard from './components/Dashboard/Dashboard'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(VueLocalStorage)
Vue.use(VueAxios, axios)
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
        },
        {
          path: 'showdetails',
          component: ShowDetails
        }
      ]
    }
  ]
})

router.beforeEach((router, redirect, next) => {
  const jwt = window.localStorage.getItem('token')
  if (jwt && router.path === '/') {
    next('/dashboard/shows')
  } else {
    next()
  }
})

new Vue(Vue.util.extend({ router }, App)).$mount('#app')
