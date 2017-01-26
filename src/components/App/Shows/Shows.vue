<template>
  <div class="shows">
    <md-button class="shows__btn shows__btn--add" @click="openAddShowPopup()">Add show</md-button>
    <div class="shows__container">
      <h2 class="shows__title">All Shows</h2>
      <div class="shows__row shows__row--even">
        <div class="shows__total">
          <span class="shows__totalSelected">1</span class="shows__totalDescription">
          <span>item selected</span>
        </div>
      </div>

      <div class="shows__row shows__row--odd">
        <md-checkbox class="shows__cell shows__cell--checkbox md-primary" name="checkbox" v-model="checkbox" id="checkbox"></md-checkbox>
        <div class="shows__cell shows__cell--name">Show Name / Description</div>
        <div class="shows__cell shows__cell--date">Date</div>
        <div class="shows__cell shows__cell--contact">Contact</div>
        <div class="shows__cell shows__cell--status">Status</div>
        <div class="shows__cell shows__cell--venue">Venue</div>
        <div class="shows__cell shows__cell--ticketUrl">Ticket URL</div>
      </div>

      <div class="shows__row shows__row--odd shows__row--withData" v-for="show in shows">
        <md-checkbox class="shows__cell shows__cell--checkbox md-primary" name="checkbox"
                     v-model="show.checkbox"></md-checkbox>
        <a class="show__cell shows__cell--name"
                     @click="goToShowDetails(show.name)">{{ show.name }} @ {{ show.venue_name }}</a>
        <div class="shows__cell shows__cell--date">{{ show.date }}</div>
        <div class="shows__cell shows__cell--contact">{{ show.contact }}</div>
        <div class="shows__cell shows__cell--status">{{ show.status }}</div>
        <div class="shows__cell shows__cell--venue">{{ show.venue_name }}</div>
        <a :href="show.url" class="shows__cell shows__cell--ticketUrl">
          <md-icon>link</md-icon>
        </a>
      </div>
    </div>
    <addShow></addShow>
    <reportIssue></reportIssue>
    <inviteFriend></inviteFriend>
  </div>
</template>

<script>
import AddShow from './AddShow'
import ReportIssue from '../ReportIssue'
import InviteFriend from '../InviteFriend'
import { mapState } from 'vuex'
export default {
  name: 'shows',
  components: { AddShow, ReportIssue, InviteFriend },
  data () {
    return {
      checkbox: false
    }
  },
  computed:
  mapState({
    shows: state => state.onload.shows,
    activeBandId: state => state.activeBandId,
    userId: state => state.activeBandId
  }),
  methods: {
    openAddShowPopup () {
      this.$store.dispatch('addShowPopup')
    },
    goToShowDetails (showName) {
      this.$router.push({name: 'showDetails', params: {name: showName}})
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../../styles/App/Shows/shows'

</style>
