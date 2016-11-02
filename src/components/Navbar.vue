<template>

  <div class="navbar" id="navbar">
    <md-toolbar class="navbar__toolbar" v-md-theme="'default'">
      <md-button class="md-icon-button navbar__btn navbar__btn--burger">
        <md-icon class="navbar__icon navbar__icon--burger">menu</md-icon>
      </md-button>

      <h2 class="navbar__title md-title">BandForge</h2>

      <div class="navbar__userBlock" v-if="!user.authenticated">
        <md-button class="navbar__link"
                   @click="changeCurrentModal('Signup')">
          Sign Up
        </md-button>

        <md-button class="navbar__link"
                   @click="changeCurrentModal('Login')">
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
  methods: {
    changeCurrentModal (curentView) {
      this.$store.commit('changeCurrentModal', curentView)
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
