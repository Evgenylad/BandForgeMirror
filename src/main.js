import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import VueLocalStorage from 'vue-localstorage'
import VueResource from 'vue-resource'
import Keen from 'keen-ui'

import Sidebar from './components/Sidebar'
import NavbarInner from './components/NavbarInner'
import Foo from './components/Foo'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import OnBoarding from './components/OnBoarding'
import AddMember from './components/AddMember'

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
      components: {
        navbar: Navbar,
        login: Login,
        signup: Signup,
        foo: Foo,
        onboarding: OnBoarding,
        addmember: AddMember
      }
    },
    {
      path: '/dashboard',
      components: {
        navbar: NavbarInner,
        sidebar: Sidebar,
        foo: Foo
      } }
  ]
})

auth.checkAuth()

new Vue(Vue.util.extend({ router }, App)).$mount('#app')
