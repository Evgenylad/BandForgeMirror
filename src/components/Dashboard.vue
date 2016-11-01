<template>
  <div class="dashboard">
    <navbarInner></navbarInner>
    <div class="dashboard__content">
      <sidebar></sidebar>
      <router-view></router-view>
    </div>
    <foo></foo>
  </div>
</template>

<script>
import NavbarInner from './NavbarInner'
import Sidebar from './Sidebar'
import Foo from './Foo'
import Shows from './Shows'
export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    NavbarInner,
    Sidebar,
    Foo,
    Shows
  }
}
</script>

<style scoped lang="stylus">
@import '../styles/colors'
@import '../styles/dashboard'

</style>
