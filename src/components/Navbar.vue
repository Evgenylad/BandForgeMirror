<template>

  <div class="navbar" id="navbar" v-if="!user.authenticated">
    <md-toolbar class="navbar__toolbar" v-md-theme="'default'">
      <md-button class="md-icon-button navbar__btn navbar__btn--burger" @click="toggleLeftSidenav()">
        <md-icon class="navbar__icon navbar__icon--burger">menu</md-icon>
      </md-button>

      <h2 class="navbar__title md-title">BandForge</h2>

      <div class="navbar__userBlock"></div>
    </md-toolbar>

  </div>

</template>

<script>
import auth from '../api/user'
export default {
  data () {
    return {
      user: auth.user
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
.md-sidenav-content
  background-color: secondary-background !important
  width: 257px !important
  top: 64px !important
.md-toolbar-container
  margin: 10px 0px
.md-button .md-button .md-list-item-container
  paddind: 0 10px;
.md-list-item:hover > .md-list-item .md-icon
  color: #21ce99
.md-list-item .md-list-item-holder > .md-icon:first-child
  margin-right: 10px
.md-list-item .md-list-item-container
  padding: 0 10px !important
.md-list-item .md-icon
  color: text-color
</style>
