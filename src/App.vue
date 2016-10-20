<template>
  <div id="app">
    <navbar></navbar>
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Login'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Shows from './components/Shows'
import Sidebar from './components/Sidebar'

export default {
  name: 'app',
  components: {
    Login,
    Dashboard,
    Shows,
    Navbar,
    Sidebar
  }
}
</script>

<style lang="stylus">
@import url("https://fonts.googleapis.com/icon?family=Material+Icons")
@import '../node_modules/vue-material/dist/vue-material.css'
@import './styles/colors'
@import './styles/grid'

#app

body
  background-color: dark-background
  font-family: 'Roboto', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #fff
  font-size: 16px
</style>
