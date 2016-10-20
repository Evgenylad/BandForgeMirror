<template>

  <div id="navbar">
    <md-toolbar v-md-theme="'default'">
      <md-button class="md-icon-button" @click="toggleLeftSidenav()">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">BandForge</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large" v-md-theme="'default'">
        <div class="md-toolbar-container">
          <h3 class="md-title">Menu</h3>
        </div>
        <div class="md-toolbar-container">
          <md-avatar class="md-avatar-icon md-large">
             <md-icon>user</md-icon>
          </md-avatar>
        </div>
      </md-toolbar>
      <div class="md-toolbar" md-theme="'accent'">
        <md-list>
          <md-list-item>
            <md-icon>dashboard</md-icon> <span>Dashboard</span>
          </md-list-item>

          <md-list-item>
            <md-icon>event</md-icon> <span>Shows</span>
          </md-list-item>
        </md-list>
      </div>
    </md-sidenav>
  </div>

</template>

<script>
export default {
  name: 'navbar',
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
    }
  }
}
</script>

<style media="screen" lang="stylus">
@import '../styles/colors'

.md-toolbar
  background-color: secondary-text-color
  /*color: #51da62*/
  color: #fff
  font-family: 'Roboto'
.md-toolbar-container
  margin: 10px 0px
</style>
