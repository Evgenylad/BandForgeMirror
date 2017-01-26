<template>
  <div class="bands">
    <div class="">
      <div class="bands__container">
        <div class="bands__row bands__row--first">
          <md-button class="bands__btn bands__btn--add" @click="openAddBandPopup()">Add Band</md-button>
        </div>

        <div class="bands__row">
          <div class="bands__item"
               v-for="band in bands">
            <div class="bands__picture">
              <svg class="bands__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M20,5A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M5,16H19L14.5,10L11,14.5L8.5,11.5L5,16Z" /></svg>
            </div>

            <div class="bands__itemBottom">
              <a class="bands__title bands__title--item"
                 @click="goToBandDetails(band.name)">{{ band.name }}</a>
              <span class="bands__members">5 members</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <addBand></addBand>
    <reportIssue></reportIssue>
    <inviteFriend></inviteFriend>
  </div>
</template>

<script>
import AddBand from './AddBand'
import ReportIssue from '../ReportIssue'
import InviteFriend from '../InviteFriend'
import { mapState } from 'vuex'
export default {
  name: 'bands',
  components: { AddBand, ReportIssue, InviteFriend },
  data () {
    return {

    }
  },
  computed: mapState({
    bands: state => state.onload.bands
  }),
  methods: {
    goToBandDetails (bandName) {
      this.$router.push({name: 'bandDetails', params: {name: bandName}})
    },
    openAddBandPopup () {
      this.$store.dispatch('addBandPopup')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../../styles/App/Bands/bands'

</style>
