<template>
  <div class="root">
    <navbar></navbar>

    <div class="root__content">
      <h1 class="root__header" v-show="!user.authenticated">
        sign up for the best diy band management platform.
      </h1>
      <h1
        class="root__header"
        v-show="user.authenticated && !user.active_band_id"
      >
        We need a few things from you first.
      </h1>
      <h1
        class="root__header"
        v-show="user.authenticated && user.active_band_id & !member.added"
      >
        Let's invite your band mates.
      </h1>

      <transition name="modal" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <foo></foo>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Foo from './../Foo'
import Login from './Login'
import Signup from './Signup'
import OnBoarding from './OnBoarding'
import AddMember from './AddMember'
import { mapState } from 'vuex'

export default {
  name: 'root',
  components: {
    Navbar,
    Foo,
    Login,
    Signup,
    OnBoarding,
    AddMember
  },
  computed: mapState({
    user: state => state.user
  }),
  // this is only here so view will load. This will come from state later.
  data () {
    return {
      member: {
        added: null
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../styles/Root/root'
</style>
