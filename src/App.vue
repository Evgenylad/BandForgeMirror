<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Root from './components/Root'
import Dashboard from './components/Dashboard'
import store from './vuex/store'
import auth from './api/user'

export default {
  name: 'app',
  data () {
    return {
      user: auth.user,
      band: auth.band,
      member: auth.member
    }
  },
  components: {
    Root,
    Dashboard
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
.app
 height: 100%
body
  height: 100%
  overflow-y: hidden
  background-color: main-background
  font-family: 'Roboto', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #fff
  font-size: 16px

.modal-enter-active, .modal-leave-active {
  transition: opacity .5s ease;
}
.modal-enter, .modal-leave-active {
  opacity: 0;
}
</style>
