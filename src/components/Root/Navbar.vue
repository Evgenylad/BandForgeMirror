<template>

  <div class="navbar" id="navbar">
    <md-toolbar class="navbar__toolbar" v-md-theme="'default'">
      <md-button class="md-icon-button navbar__btn navbar__btn--burger">
        <md-icon class="navbar__icon navbar__icon--burger">menu</md-icon>
      </md-button>

      <h2 class="navbar__title md-title">BandForge</h2>

      <div class="navbar__userBlock" v-if="!user.authenticated">
        <md-button class="navbar__link">
          <router-link to="signup">Sign Up</router-link>
        </md-button>

        <md-button class="navbar__link">
          <router-link to="login">Login</router-link>
        </md-button>
      </div>
    </md-toolbar>

  </div>

</template>

<script>
import auth from '../../api/user'

export default {
  data () {
    return {
      user: auth.user,
      band: auth.band,
      member: auth.member
    }
  },
  name: 'navbar'
}
</script>

<style media="screen" lang="stylus">
@import '../../styles/Root/navbar'

.md-toolbar
  background-color: secondary-background !important
  /*color: #51da62*/
  color: #fff
  font-family: 'Roboto'
</style>
