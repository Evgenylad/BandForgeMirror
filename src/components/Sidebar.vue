<template>
  <md-sidenav class="sidebar md-center">
    <md-list class="sidebar__list">
      <md-list-item class="sidebar__item">
        <router-link to="/dashboard/dashboard">
          <md-icon class="sidebar__icon">dashboard</md-icon>
          <span class="sidebar__listItemName">Dashboard</span>
        </router-link>
      </md-list-item>

      <md-list-item class="sidebar__item">
        <router-link to="/dashboard/shows">
          <md-icon class="sidebar__icon">event</md-icon>
          <span class="sidebar__listItemName">Shows</span>
        </router-link>
      </md-list-item>

      <md-list-item class="sidebar__item">
        <router-link to="/dashboard/tours">
          <md-icon class="sidebar__icon">public</md-icon>
          <span class="sidebar__listItemName">Tours</span>
        </router-link>
      </md-list-item>

      <md-list-item class="sidebar__item">
        <router-link to="/dashboard/merch">
          <md-icon class="sidebar__icon">local_grocery_store</md-icon>
          <span class="sidebar__listItemName">Merch</span>
        </router-link>
      </md-list-item>

      <md-list-item class="sidebar__item">
        <router-link to="/dashboard/bands">
          <md-icon class="sidebar__icon">account_box</md-icon>
          <span class="sidebar__listItemName">Bands</span>
        </router-link>
      </md-list-item>

      <md-list-item class="sidebar__item">
        <router-link to="/dashboard/contact">
          <md-icon class="sidebar__icon">call</md-icon>
          <span class="sidebar__listItemName">Contact</span>
        </router-link>
      </md-list-item>

      <md-list-item class="sidebar__item">
        <router-link to="/dashboard/venues">
          <md-icon class="sidebar__icon">location_city</md-icon>
          <span class="sidebar__listItemName">Venues</span>
        </router-link>
      </md-list-item>

      <md-list-item class="sidebar__item">
        <router-link to="/dashboard/updates">
          <md-icon class="sidebar__icon">update</md-icon>
          <span class="sidebar__listItemName">Updates</span>
        </router-link>
      </md-list-item>
    </md-list>

    <md-list class="sidebar__list">
      <div class="sidebar__userEmail">user@example.com</div>

      <md-list-item class="sidebar__item">
        <router-link to="/dashboard/account">
          <md-icon class="sidebar__icon">flag</md-icon>
          <span class="sidebar__listItemName">Account</span>
        </router-link>
      </md-list-item>

      <md-list-item class="sidebar__item"
                    @click="logoutUser()">
        <md-icon class="sidebar__icon">exit_to_app</md-icon> <span class="sidebar__listItemName">Logout</span>
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
