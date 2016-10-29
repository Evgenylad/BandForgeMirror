<template>
  <div class="navbarInner" id="navbar-inner" v-if="member.added">
    <md-toolbar class="navbarInner__toolbar" v-md-theme="'default'">
      <div class="navbarInner__activeBand">
        <div class="navbarInner__userStatus">Active Band</div>
        <div class="navbarInner__userTitle">
          <h1 class="navbarInner__userName">Some Band</h1>
          <md-button class="md-icon-button navbarInner__btn navbarInner__btn--tick" @click="toggleLeftSidenav()">
            <md-icon>arrow_drop_down</md-icon>
          </md-button>
        </div>
      </div>
<!--      <div class="navbarInner__menu">-->
      <!--  <md-button class="navbarInner__btn navbarInner__btn--btnMenu waves-effect waves-light"
                   @click="showLoginPopup">Login
        </md-button>

        <md-button class="navbarInner__btn navbarInner__btn--btnMenu waves-effect waves-light"
                   @click="showSignUpPopup">Sign Up
        </md-button>-->

        <h2 class="navbarInner__title md-title">BandForge</h2>
<!--      </div>-->
      <div class="navbarInner__userBlock">
        <md-button class="md-icon-button navbarInner__btn navbarInner__btn--find" @click="toggleLeftSidenav()">
          <md-icon>search</md-icon>
        </md-button>

        <div class="navbarInner__userMenu">

        </div>
      </div>
    </md-toolbar>

  </div>

</template>

<script>
import auth from '../api/user'
export default {
  name: 'navbarInner',
  data () {
    return {
      user: auth.user,
      member: auth.member
    }
  },
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
@import '../styles/navbarInner'

.md-toolbar
  background-color: secondary-background !important
  /*color: #51da62*/
  color: #fff
  font-family: 'Roboto'

.md-sidenav .md-backdrop
 display: none;

.md-sidenav .md-sidenav-content
 pointer-events: visible;

.md-sidenav-content
  width: 256px !important;
  top: 64px !important;

.md-list-item .md-list-item-container
  padding: 0 10px !important;
</style>
