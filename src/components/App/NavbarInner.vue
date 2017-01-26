<template>
  <div class="navbarInner" id="navbar-inner">
    <md-toolbar class="navbarInner__toolbar" v-md-theme="'default'">
      <div class="navbarInner__activeBand">
        <div class="navbarInner__userStatus">Active Band</div>
        <div class="navbarInner__userTitle">
          <h1 class="navbarInner__userName">{{ active_band_name }}</h1>
          <md-button class="md-icon-button navbarInner__btn navbarInner__btn--tick"
                     @click="toggleChangeActiveBand()">
            <md-icon>arrow_drop_down</md-icon>
          </md-button>
        </div>
      </div>
        <h2 class="navbarInner__title md-title">BandForge</h2>
      <div class="navbarInner__userBlock">
        <md-button class="md-icon-button navbarInner__btn navbarInner__btn--send"
                   @click="toggleInviteFriendPopup()">
          <svg class="navbarInner__icon" width="21px" height="18px" viewBox="1476 23 21 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <polygon id="Shape" stroke="none" fill="#FFFFFF" fill-rule="evenodd" points="1476 41 1497 32 1476 23 1476 30 1491 32 1476 34"></polygon>
          </svg>
        </md-button>

        <md-button class="md-icon-button navbarInner__btn navbarInner__btn--comment"
                   @click="toggleReportIssuePopup()">
          <svg class="navbarInner__icon" width="20px" height="20px" viewBox="1547 23 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M1549,23 C1547.9,23 1547,23.9 1547,25 L1547,43 L1551,39 L1565,39 C1566.1,39 1567,38.1 1567,37 L1567,25 C1567,23.9 1566.1,23 1565,23 L1549,23 Z" id="Shape" stroke="none" fill="#FFFFFF" fill-rule="evenodd"></path>
          </svg>
        </md-button>

        <md-button class="md-icon-button navbarInner__btn navbarInner__btn--dots"
                   @click="toggleUserMenuPopup()">
          <svg class="navbarInner__icon" width="4px" height="16px" viewBox="1617 25 4 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M1619,41 C1620.10457,41 1621,40.1045695 1621,39 C1621,37.8954305 1620.10457,37 1619,37 C1617.89543,37 1617,37.8954305 1617,39 C1617,40.1045695 1617.89543,41 1619,41 Z M1619,35 C1620.10457,35 1621,34.1045695 1621,33 C1621,31.8954305 1620.10457,31 1619,31 C1617.89543,31 1617,31.8954305 1617,33 C1617,34.1045695 1617.89543,35 1619,35 Z M1619,29 C1620.10457,29 1621,28.1045695 1621,27 C1621,25.8954305 1620.10457,25 1619,25 C1617.89543,25 1617,25.8954305 1617,27 C1617,28.1045695 1617.89543,29 1619,29 Z" id="more-vert" stroke="none" fill="#FFFFFF" fill-rule="evenodd"></path>
          </svg>
        </md-button>
      </div>
    </md-toolbar>

    <transition name="moveDown">
      <ul class="navbarInner__list"
          v-show="activeBandPopup">
        <li class="navbarInner__listItem"
            v-for="band in bands">
            <a href="#" class="navbarInner__link">{{ band.name }}</a>
        </li>
      </ul>
    </transition>

    <transition name="moveDown">
      <ul class="navbarInner__userList"
          v-show="userMenuPopup">
        <li class="navbarInner__listItem">
            <a class="navbarInner__link" href="#">Profile</a>
        </li>
        <li class="navbarInner__listItem">
            <a class="navbarInner__link" href="#">Billing</a>
        </li>
        <li class="navbarInner__listItem">
            <a class="navbarInner__link" href="#"
               @click="logout()">Logout</a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'navbarInner',
  data () {
    return {
      activeBandPopup: false,
      userMenuPopup: false
    }
  },
  computed: mapState({
    active_band_name: state => state.onload.bandInfo.name,
    bands: state => state.bands.bands
  }),
  methods: {
    toggleChangeActiveBand () {
      if (this.activeBandPopup) {
        this.activeBandPopup = false
      } else {
        this.activeBandPopup = true
      }
    },
    toggleUserMenuPopup () {
      if (this.userMenuPopup) {
        this.userMenuPopup = false
      } else {
        this.userMenuPopup = true
      }
    },
    toggleReportIssuePopup () {
      this.$store.dispatch('reportIssue')
    },
    toggleInviteFriendPopup () {
      this.$store.dispatch('inviteFriend')
    },
    logout () {
      this.$store.dispatch('logoutUser')
    }
  }
}
</script>

<style media="screen" lang="stylus">
@import '../../styles/App/navbarInner'

.navbarInner__userBlock

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
  left: 0;
  background: #1f2226 !important;

.md-list-item .md-list-item-container
  padding: 0 22px !important;
</style>
