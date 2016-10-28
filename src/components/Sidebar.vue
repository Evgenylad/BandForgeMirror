<template>
  <md-sidenav class="navbar__dropDown md-left" ref="leftSidenav" @click="open('Left')" @close="close('Left')">
    <md-list>
      <md-list-item>
        <md-icon>dashboard</md-icon> <span class="navbar__listItemName">Dashboard</span>
      </md-list-item>

      <md-list-item>
        <md-icon>event</md-icon> <span class="navbar__listItemName">Shows</span>
      </md-list-item>

      <md-list-item>
        <md-icon>public</md-icon> <span class="navbar__listItemName">Tours</span>
      </md-list-item>

      <md-list-item>
        <md-icon>local_grocery_store</md-icon> <span class="navbar__listItemName">Merch</span>
      </md-list-item>

      <md-list-item>
        <md-icon>account_box</md-icon> <span class="navbar__listItemName">Bands</span>
      </md-list-item>

      <md-list-item>
        <md-icon>call</md-icon> <span class="navbar__listItemName">Contact</span>
      </md-list-item>

      <md-list-item>
        <md-icon>location_city</md-icon> <span class="navbar__listItemName">Venues</span>
      </md-list-item>

      <md-list-item>
        <md-icon>assistant_photo</md-icon> <span class="navbar__listItemName">Updates</span>
      </md-list-item>

      <hr class="navbar__divider">

      <md-list-item>
        <md-icon>assistant_photo</md-icon> <span class="navbar__listItemName">Account</span>
      </md-list-item>

      <md-list-item>
        <md-icon>event</md-icon> <span class="navbar__listItemName">Logout</span>
      </md-list-item>

      <hr class="navbar__divider">

      <div class="navbar__userEmail">user@example.com</div>
    </md-list>
  </md-sidenav>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      //
    }
  }
}
</script>
