<template>
  <div id="app" class="app">
    <div class="app__content">
      <navbar></navbar>
      <navbarInner></navbarInner>
      <h1 class="app__header"
          v-show="!user.authenticated">sign up for the best diy band management platform</h1>
      <signup></signup>
      <login></login>
    </div>
    <foo></foo>
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import NavbarInner from './components/NavbarInner'
import Foo from './components/Foo'
import Sidebar from './components/Sidebar'
import store from './vuex/store'
import auth from './api/user'

export default {
  name: 'app',
  data () {
    return {
      user: auth.user
    }
  },
  components: {
    Login,
    Signup,
    Navbar,
    NavbarInner,
    Foo,
    Sidebar
  },
  store
}
</script>

<style lang="stylus">
@import url("https://fonts.googleapis.com/icon?family=Material+Icons")
@import '../node_modules/vue-material/dist/vue-material.css'
@import './styles/colors'
@import './styles/grid'
@import '../styles/app'

body
  height: 100%
  overflow-y: hidden
  background-color: main-background
  font-family: 'Roboto', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #fff
  font-size: 16px
</style>
