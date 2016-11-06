<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex'

export default {
  name: 'app',
  store
}
</script>

<style lang="stylus">
@import url("https://fonts.googleapis.com/icon?family=Material+Icons")
@import '../node_modules/vue-material/dist/vue-material.css'
@import '/styles/colors'

.app
  height: 100%
  background: main-background;
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
