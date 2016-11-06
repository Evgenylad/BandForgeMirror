<template>

  <div class="navbar" id="navbar">
    <md-toolbar class="navbar__toolbar" v-md-theme="'default'">
      <md-button class="md-icon-button navbar__btn navbar__btn--burger">
        <md-icon class="navbar__icon navbar__icon--burger">menu</md-icon>
      </md-button>

      <h2 class="navbar__title md-title">BandForge</h2>

      <div class="navbar__userBlock" v-if="!user.authenticated">
        <router-link to="signup">
          <md-button class="navbar__link">Sign Up</md-button>
        </router-link>

        <router-link to="login">
          <md-button class="navbar__link">Login</md-button>
        </router-link>
      </div>
    </md-toolbar>

  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'navbar',
  computed: mapState({
    user: state => state.user
  })
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
