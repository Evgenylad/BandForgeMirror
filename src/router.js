import Vue from 'vue'
import VueRouter from 'vue-router'

import Root from './components/Root/Root'
import Foo from './components/Foo'
import Login from './components/Root/Login'
import Signup from './components/Root/Signup'
import Navbar from './components/Root/Navbar'
import OnBoarding from './components/Root/OnBoarding'
import AddMember from './components/Root/AddMember'
import Shows from './components/App/Shows/Shows'
import ShowDetails from './components/App/Shows/ShowDetails'
import Merch from './components/App/Merch/Merch'
import Bands from './components/App/Bands/Bands'
import BandDetails from './components/App/Bands/BandDetails'
import Index from './components/App/Index'
import Dashboard from './components/App/Dashboard'
import Tours from './components/App/Tours/Tours'
import Itinerary from './components/App/Tours/Itinerary'
import Contacts from './components/App/Contacts/Contacts'

Vue.use(VueRouter)

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
      path: '/index',
      component: Index,
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
          name: 'itinerary',
          path: 'tours/:id/:name',
          component: Itinerary
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
          name: 'showDetails',
          path: 'show/:name',
          component: ShowDetails
        },
        {
          name: 'bandDetails',
          path: 'bands/:name',
          component: BandDetails
        },
        {
          path: 'dashboard',
          component: Dashboard
        },
        {
          path: 'contact',
          component: Contacts
        }
      ]
    }
  ]
})
