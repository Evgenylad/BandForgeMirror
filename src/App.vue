<template>
  <div id="app">
    <navbar></navbar>
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Shows from './components/Shows'
import Sidebar from './components/Sidebar'

export default {
  name: 'app',
  components: {
    Dashboard,
    Shows,
    Navbar,
    Sidebar
  }
}
</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/icon?family=Material+Icons")
@import '../node_modules/vue-material/dist/vue-material.css'

$primary-color-dark:   #455A64
$primary-color:        #607D8B
$primary-color-light:  #CFD8DC
$primary-color-text:   #FFFFFF
$accent-color:         #FF9800
$primary-text-color:   #212121
$secondary-text-color: #757575
$divider-color:        #BDBDBD

#app

body
  background-color: #454545
  font-family: 'Roboto', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #fff
  font-size: 16px
</style>
