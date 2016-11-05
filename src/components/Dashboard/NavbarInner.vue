<template>
  <div class="navbarInner" id="navbar-inner">
    <md-toolbar class="navbarInner__toolbar" v-md-theme="'default'">
      <div class="navbarInner__activeBand">
        <div class="navbarInner__userStatus">Active Band</div>
        <div class="navbarInner__userTitle">
          <h1 class="navbarInner__userName">Some Band</h1>
          <md-button class="md-icon-button navbarInner__btn navbarInner__btn--tick" @click="toggleChangeActiveBand()">
            <md-icon>arrow_drop_down</md-icon>
          </md-button>
        </div>
      </div>
        <h2 class="navbarInner__title md-title">BandForge</h2>
      <div class="navbarInner__userBlock">
        <md-button class="md-icon-button navbarInner__btn navbarInner__btn--find">
          <md-icon>search</md-icon>
        </md-button>

        <div class="navbarInner__userMenu">

        </div>
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

  </div>
</template>

<script>
import auth from '../../api/user'
export default {
  name: 'navbarInner',
  data () {
    return {
      user: auth.user,
      member: auth.member,
      activeBandPopup: true,
      bands: [
        {
          name: 'Hard Luck'
        },
        {
          name: 'RHCP'
        },
        {
          name: 'Linkin Park'
        }
      ]
    }
  },
  methods: {
    toggleChangeActiveBand: function () {
      if (this.activeBandPopup) {
        this.activeBandPopup = false
      } else {
        this.activeBandPopup = true
      }
    }
  }
}
</script>

<style media="screen" lang="stylus">
@import '../../styles/Dashboard/navbarInner'

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
