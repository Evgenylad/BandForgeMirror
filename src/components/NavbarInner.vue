<template>
  <div class="navbarInner" id="navbar-inner">
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
        <h2 class="navbarInner__title md-title">BandForge</h2>
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
  background: #1f2226 !important;

.md-list-item .md-list-item-container
  padding: 0 10px !important;
</style>
