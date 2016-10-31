<template>
  <md-sidenav class="sidebar md-center">
    <md-list class="sidebar__list">
      <md-list-item class="sidebar__item">
        <md-icon class="sidebar__icon">dashboard</md-icon> <span class="sidebar__listItemName">Dashboard</span>
      </md-list-item>

      <md-list-item class="sidebar__item">
        <md-icon class="sidebar__icon">event</md-icon> <span class="sidebar__listItemName">Shows</span>
      </md-list-item>

      <md-list-item class="sidebar__item">
        <md-icon class="sidebar__icon">public</md-icon> <span class="sidebar__listItemName">Tours</span>
      </md-list-item>

      <md-list-item class="sidebar__item">
        <md-icon class="sidebar__icon">local_grocery_store</md-icon> <span class="sidebar__listItemName">Merch</span>
      </md-list-item>

      <md-list-item class="sidebar__item">
        <md-icon class="sidebar__icon">account_box</md-icon> <span class="sidebar__listItemName">Bands</span>
      </md-list-item>

      <md-list-item class="sidebar__item">
        <md-icon class="sidebar__icon">call</md-icon> <span class="sidebar__listItemName">Contact</span>
      </md-list-item>

      <md-list-item class="sidebar__item">
        <md-icon class="sidebar__icon">location_city</md-icon> <span class="sidebar__listItemName">Venues</span>
      </md-list-item>

      <md-list-item class="sidebar__item">
        <md-icon class="sidebar__icon">log_out</md-icon> <span class="sidebar__listItemName">Updates</span>
      </md-list-item>
    </md-list>

    <md-list class="sidebar__list">
      <div class="sidebar__userEmail">user@example.com</div>

      <md-list-item class="sidebar__item">
        <md-icon class="sidebar__icon">flag</md-icon> <span class="sidebar__listItemName">Account</span>
      </md-list-item>

      <md-list-item class="sidebar__item"
                    @click="logoutUser()">
        <md-icon class="sidebar__icon">event</md-icon> <span class="sidebar__listItemName">Logout</span>
      </md-list-item>
    </md-list>

  </md-sidenav>
</template>

<script>
import auth from '../api/user'
export default {
  name: 'sidebar',
  data () {
    return {
      user: auth.user,
      band: auth.band,
      member: auth.member
    }
  },
  methods: {
    logoutUser () {
      auth.logoutUser(this)
      this.$store.commit('changeCurrentModal', 'Login')
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../styles/colors'
@import '../styles/sidebar'

</style>
