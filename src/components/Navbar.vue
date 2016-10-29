<template>

  <div class="navbar" id="navbar" v-if="!member.added">
    <md-toolbar class="navbar__toolbar" v-md-theme="'default'">
      <md-button class="md-icon-button navbar__btn navbar__btn--burger" @click="toggleLeftSidenav()">
        <md-icon class="navbar__icon navbar__icon--burger">menu</md-icon>
      </md-button>

      <h2 class="navbar__title md-title">BandForge</h2>

      <div class="navbar__userBlock" v-if="!user.authenticated">
        <md-button class="navbar__link"
                   @click="showSignUpPopup">
          Sign Up
        </md-button>

        <md-button class="navbar__link"
                   @click="showLoginPopup">
          Login
        </md-button>
      </div>
    </md-toolbar>

  </div>

</template>

<script>
import auth from '../api/user'
export default {
  data () {
    return {
      user: auth.user,
      band: auth.band,
      member: auth.member
    }
  },
  name: 'navbar',
  computed: {
    loginPopupVisible () {
      return this.$store.state.loginPopupVisible
    },
    signUpPopupVisible () {
      return this.$store.state.signUpPopupVisible
    }
  },
  methods: {
    toggleLeftSidenav: function (event) {
      this.$refs.leftSidenav.toggle()
    },
    toggleRightSidenav: function (event) {
      this.$refs.rightSidenav.toggle()
    },
    closeRightSidenav: function (event) {
      this.$refs.rightSidenav.close()
    },
    open: function (ref) {
      console.log('Opened: ' + ref)
    },
    close: function (ref) {
      console.log('Closed: ' + ref)
    },
    showLoginPopup () {
      console.log(this.$store.state.loginPopupVisible)
      this.$store.commit('showLoginPopup')
    },
    showSignUpPopup () {
      console.log(this.$store.state.signUpPopupVisible)
      this.$store.commit('showSignUpPopup')
    }
  }
}
</script>

<style media="screen" lang="stylus">
@import '../styles/colors'
@import '../styles/navbar'

.md-toolbar
  background-color: secondary-background !important
  /*color: #51da62*/
  color: #fff
  font-family: 'Roboto'
</style>
