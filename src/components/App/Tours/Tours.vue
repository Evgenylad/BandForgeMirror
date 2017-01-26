<template>
  <div class="tours">
    <div class="">
      <div class="tours__container">
        <div class="tours__row tours__row--first">
          <h2 class="tours__title">Tours</h2>
          <md-button class="tours__btn tours__btn--add" @click="openCreateTourPopup()">Start a tour</md-button>
        </div>

        <div class="tours__row">
          <div class="tours__item"
               v-for="tour in tours">
            <div class="tours__picture">
              <svg class="tours__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M20,5A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M5,16H19L14.5,10L11,14.5L8.5,11.5L5,16Z" /></svg>
              <svg class="tours__svg tours__svg--dots" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"><g> <path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z"/> <path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z"/> <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
              </svg>
            </div>

            <div class="tours__itemBottom">
              <h3 class="tours__title tours__title--item">{{ tour.name }}</h3>
              <div class="tours__contact">
                <md-icon class="tours__icon">account_box</md-icon>
                <div class="tours__info">
                  <span class="tours__name">{{ tour.contacts.agent }}</span>
                  <span class="tours__position">Tour Manager</span>
                </div>
              </div>

              <div class="tours__contact">
                <md-icon class="tours__icon">account_box</md-icon>
                <div class="tours__info">
                  <span class="tours__name">Roxie Osborne</span>
                  <span class="tours__position">Booking Agent</span>
                </div>
              </div>
            </div>

            <div class="tours__btnBlock">
              <a class="tours__link tours__link--details" @click="goToItinerary(tour.tour_id, tour.name)" >DETAILS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <createTour></createTour>
    <reportIssue></reportIssue>
    <inviteFriend></inviteFriend>
  </div>
</template>

<script>
import CreateTour from './CreateTour'
import ReportIssue from '../ReportIssue'
import InviteFriend from '../InviteFriend'

import { mapState } from 'vuex'
export default {
  name: 'tours',
  components: { CreateTour, ReportIssue, InviteFriend },
  data () {
    return
  },
  computed: mapState({
    tours: state => state.onload.tours
  }),
  methods: {
    goToItinerary (tourId, tourName) {
      this.$router.push({name: 'itinerary', params: {id: tourId, name: tourName}})
    },
    openCreateTourPopup () {
      this.$store.dispatch('createTourPopup')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../../styles/App/Tours/tours'

</style>
