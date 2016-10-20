import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import VueLocalStorage from 'vue-localstorage'
import VueResource from 'vue-resource'
import Keen from 'keen-ui'

import Dashboard from './components/Dashboard'
import Shows from './components/Shows'
import Login from './components/Login'

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

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Dashboard },
    { path: '/shows', component: Shows },
    { path: '/login', component: Login }
  ]
})

new Vue(Vue.util.extend({ router }, App)).$mount('#app')
