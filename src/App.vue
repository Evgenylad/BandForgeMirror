<template>
  <div id="app" class="app">
    <router-view name="navbar"></router-view>
    <div class="app__contentLP">
      <h1 class="app__header"
          v-show="!user.authenticated">sign up for the best diy band management platform.</h1>
      <h1 class="app__header"
          v-show="user.authenticated && !band.added">We need a few things from you first.</h1>
      <h1 class="app__header"
          v-show="user.authenticated && band.added & !member.added">Let's invite your band mates.</h1>

      <transition name="modal" mode="out-in">
        <component v-bind:is="this.$store.state.currentView"></component> // Dynamic component for SignUp, OnBoarding, AddMember components
      </transition>
    </div>

    <router-view name="foo"></router-view>
  </div>
</template>

<script>
import Login from './components/Login'
import Signup from './components/Signup'
import OnBoarding from './components/OnBoarding'
import AddMember from './components/AddMember'
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
    Login,
    Signup,
    OnBoarding,
    AddMember
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

.modal-enter-active, .modal-leave-active {
  transition: opacity .5s ease;
}
.modal-enter, .modal-leave-active {
  opacity: 0;
}
</style>
