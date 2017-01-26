<template>
  <div class="dashboard">
    <div class="">
      <div class="dashboard__container">
        <div class="dashboard__column">
          <div class="dashboard__shows">
            <h3 class="dashboard__title">Upcoming Shows</h3>
            <span class="dashboard__noinfo" v-if="Object.keys(shows).length == 0">No shows has been added.
              <a class="dashboard__noinfoLink" href="#"
                 @click="openAddShowPopup()">Book a show.</a>
            </span>
            <div v-else class="dashboard__details dashboard__details--shows"
                 v-for="show in shows">
              <h3 class="dashboard__name">{{show.name}} @ {{show.venue}}</h3>
              <span class="dashboard__time">{{show.time}}</span>
              <div class="dashboard__btnBlock">
                <button class="dashboard__btn dashboard__btn--details">Details</button>
              </div>
            </div>
          </div>

          <div class="dashboard__tours">
            <h3 class="dashboard__title">Upcoming Tours</h3>
            <span class="dashboard__noinfo" v-if="Object.keys(tours).length == 0">No tours yet.
              <a class="dashboard__noinfoLink" href="#"
                 @click="openCreateTourPopup()">Start booking one now.</a>
            </span>
            <div  v-else class="dashboard__details dashboard__details--tours"
                  v-for="tour in tours">
              <h3 class="dashboard__name dashboard__name--tours">{{ tour.name }}</h3>
              <div class="dashboard__dateBlock">
                <md-icon class="dashboard__icon dashboard__icon--date">event</md-icon>
                <span class="dashboard__date">{{ tour.date }}</span>
              </div>
              <div class="dashboard__btnBlock dashboard__btnBlock--tours">
                <md-button class="dashboard__btn dashboard__btn--bands">BANDS</md-button>
                <div class="dashboard__rightBlock">
                  <md-button class="dashboard__btn">DETAILS</md-button>
                  <md-button class="dashboard__btn dashboard__btn--itinerary">Itinerary</md-button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard__column">
          <h3 class="dashboard__title">Roster</h3>
          <span class="dashboard__noinfo" v-if="Object.keys(merch).length == 0">You haven't added an item.
            <a class="dashboard__noinfoLink" href="#"
               @click="openAddInventoryPopup()">Add an item now.</a>
          </span>
          <div v-else class="dashboard__row">
            <div class="dashboard__rosterItem"
                 v-for="item in items">
              <router-link to="/index/bands">
                <svg class="dashboard__rosterPicture" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M20,5A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M5,16H19L14.5,10L11,14.5L8.5,11.5L5,16Z" /></svg>
              </router-link>
              <div class="dashboard__itemBottom">
                <router-link to="/index/bands">
                  <span class="dashboard__bandName">item.name</span>
                </router-link>
                <span class="dashboard__members">5 members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <reportIssue></reportIssue>
    <inviteFriend></inviteFriend>
    <addShow></addShow>
    <createTour></createTour>
    <addInventory></addInventory>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ReportIssue from './ReportIssue'
import InviteFriend from './InviteFriend'
import AddShow from './Shows/AddShow'
import CreateTour from './Tours/CreateTour'
import AddInventory from './Merch/AddInventory'
export default {
  name: 'dashboard',
  components: { ReportIssue, InviteFriend, AddShow, CreateTour, AddInventory },
  computed: mapState({
    tours: state => state.onload.tours,
    shows: ({ shows }) => shows.shows,
    merch: state => state.onload.merch
  }),
  methods: {
    openAddShowPopup () {
      this.$store.dispatch('addShow')
    },
    openCreateTourPopup () {
      this.$store.dispatch('createTour')
    },
    openAddInventoryPopup () {
      this.$store.dispatch('addInventory')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../styles/App/dashboard'

</style>
