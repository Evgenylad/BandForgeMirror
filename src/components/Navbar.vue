<template>

  <div class="navbar" id="navbar">
    <md-toolbar class="navbar__toolbar" v-md-theme="'default'">
      <div class="navbar__btnBlock">
        <div class="navbar__activeBand">Active Band</div>
        <div class="navbar__bandTitle">
          <h1 class="navbar__bandName">Some Band</h1>
          <md-button class="md-icon-button navbar__btn" @click="toggleLeftSidenav()">
            <md-icon>arrow_drop_down</md-icon>
          </md-button>
        </div>
      </div>
      <h2 class="navbar__title md-title">BandForge</h2>
      <div class="navbar__userBlock">

      </div>
    </md-toolbar>

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
