<template>
  <div class="index">
    <div class="content-is-loading"
         v-if="!toursLoaded || !bandsLoaded || !contactsLoaded || !showsLoaded"></div>
    <div v-else class="index__wrapper">
      <navbarInner></navbarInner>
      <div class="index__content">
        <sidebar></sidebar>
        <router-view></router-view>
      </div>
      <foo></foo>
    </div>

  </div>
</template>

<script>
import NavbarInner from './NavbarInner'
import Sidebar from './Sidebar'
import Foo from './../Foo'
import Shows from './Shows/Shows'
import Dashboard from './Dashboard'

import { mapState } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      bandName: ''
    }
  },
  components: {
    NavbarInner,
    Sidebar,
    Foo,
    Shows,
    Dashboard
  },
  created () {
    // Loading data after Login into the app
    // Band Info: active, band_id, create_dtm, mod_dtm, name, name_lc, primary_address_id, primary_image_url, primary_social_id, primary_url
    this.$store.dispatch('getBandInfo')
    // Loading bands for the user
    this.$store.dispatch('getBands')
    // Loading contacts for the user
    this.$store.dispatch('getContacts')
    // Loading inventory for the active band
    this.$store.dispatch('getInventory')
    // Loading tours for the active band
    this.$store.dispatch('getToursList')
    // Loading shows for the active band
    this.$store.dispatch('getShows')
  },
  computed: mapState({
    toursLoaded: state => state.onload.toursLoaded,
    bandsLoaded: state => state.onload.bandsLoaded,
    contactsLoaded: state => state.onload.contactsLoaded,
    inventoryLoaded: state => state.onload.inventoryLoaded,
    showsLoaded: state => state.onload.showsLoaded,
    bandInfo: state => state.onload.bandInfo
  })
}
</script>

<style scoped lang="stylus">
@import '../../styles/App/index'

.content-is-loading
 height: 100%;
 width: 100%;
 background: no-repeat center url('../../assets/loading_dots.gif');
 background-color: #fff;

</style>
