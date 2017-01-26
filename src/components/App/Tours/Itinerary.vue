<template>
  <div class="itinerary">
    <div class="itinerary__contacts">
      <div class="itinerary__head">
        <h1 class="itinerary__title itinerary__title--contacts">
          {{ tourName }}
        </h1>
        <a href="#" class="itinerary__link itinerary__link--dots"
                    @click="toggleTourControlsPopup()">
          <svg class="itinerary__svg itinerary__svg--dots" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"><g> <path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z"/> <path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z"/> <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
          </svg>
        </a>
        <ul class="itinerary__list itinerary__list--userBlock"
            v-if="modals.tourControlsPopupVisible">
          <li class="itinerary__listItem itinerary__listItem--userBlock">
            <a class="itinerary__link itinerary__link--userBlock itinerary__link--invite" href="#"
               @click="openInviteUserPopup()">Invite user</a>
          </li>
          <li class="itinerary__listItem itinerary__listItem--userBlock">
            <a class="itinerary__link itinerary__link--userBlock itinerary__link--delete" href="#"
               @click="openDeleteTourPopup()">Delete tour</a>
          </li>
        </ul>
      </div>
      <div class="itinerary__content">
        <div class="itinerary__column itinerary__column--first">
          <h3 class="itinerary__colName">Tour Lineup</h3>
          <ul class="itinerary__list">
            <li class="itinerary__listItem">Hard Luck
              <svg class="itinerary__icon itinerary__icon--cross" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" /></svg>
            </li>
            <li class="itinerary__listItem">Trapped under ice</li>
            <li class="itinerary__listItem">Hard Luck</li>
          </ul>
        </div>

        <div class="itinerary__column itinerary__column--second">
          <h3 class="itinerary__colName">Booking Agent</h3>
          <div class="itinerary__agentDetails">
            <div class="itinerary__row itinerary__row--contacts">
              <md-icon class="itinerary__icon itinerary__icon--accountBox">account_box</md-icon>
              <div class="itinerary__block">
                <div class="itinerary__description">
                  Garrett Vargas
                </div>
                <span class="itinerary__blockTitle">Full name</span>
              </div>
            </div>

            <div class="itinerary__row itinerary__row--contacts">
              <md-icon class="itinerary__icon itinerary__icon--phone">phone</md-icon>
              <div class="itinerary__block">
                <div class="itinerary__description">
                  (323)555-6789
                </div>
                <span class="itinerary__blockTitle">Cell</span>
              </div>
            </div>
          </div>
        </div>

        <div class="itinerary__column itinerary__column--third">
          <h3 class="itinerary__colName">Tour Manager</h3>
          <div class="itinerary__managerDetails">
            <div class="itinerary__row itinerary__row--contacts">
              <md-icon class="itinerary__icon itinerary__icon--accountBox">account_box</md-icon>
              <div class="itinerary__block">
                <div class="itinerary__description">
                  Garrett Vargas
                </div>
                <span class="itinerary__blockTitle">Full name</span>
              </div>
            </div>

            <div class="itinerary__row itinerary__row--contacts">
              <md-icon class="itinerary__icon itinerary__icon--phone">phone</md-icon>
              <div class="itinerary__block">
                <div class="itinerary__description">
                  (323)555-6789
                </div>
                <span class="itinerary__blockTitle">Cell</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="itinerary__container">
      <caption class="itinerary__title">Itinerary</caption>
      <tr class="itinerary__row itinerary__row--even">
        <td class="itinerary__total">
          <span class="itinerary__totalSelected">1</span class="itinerary__totalDescription">
          <span>item selected</span>
        </td>

        <td class="itinerary__btnBlock">
          <md-icon class="itinerary__icon itinerary__icon--delete">delete</md-icon>
          <div class="itinerary__userMenu"></div>
        </td>
      </tr>

      <tr class="itinerary__row itinerary__row--odd">
        <td class="itinerary__cell itinerary__cell--checkbox">
          <md-checkbox class="itinerary__checkbox md-primary" name="checkbox" v-model="checkbox" id="checkbox"></md-checkbox>
        </td>
        <td class="itinerary__cell itinerary__cell--name">Show Name / Description</td>
        <td class="itinerary__cell itinerary__cell--date">Date</td>
        <td class="itinerary__cell itinerary__cell--contact">Contact</td>
        <td class="itinerary__cell itinerary__cell--email">Email</td>
        <td class="itinerary__cell itinerary__cell--status">Status</td>
        <td class="itinerary__cell itinerary__cell--venue">Venue</td>
        <td class="itinerary__cell itinerary__cell--ticketUrl">Ticket URL</td>
        <td class="itinerary__cell itinerary__cell--catering">Catering</td>
        <td class="itinerary__cell itinerary__cell--housing">Housing</td>
      </tr>

      <tr class="itinerary__row itinerary__row--odd itinerary__row--withData" v-for="show in shows">
        <td class="itinerary__cell itinerary__cell--checkbox">
          <md-checkbox class="itinerary__checkbox md-primary" name="checkbox"
          v-model="show.checkbox"></md-checkbox>
        </td>
        <td class="itinerary__cell itinerary__cell--name">
          <router-link class="itinerary__link itinerary__link--name" to="/index/showdetails">{{ show.name }} @ {{ show.venue }}</router-link>
        </td>
        <td class="itinerary__cell itinerary__cell--date">{{ show.date }}</td>
        <td class="itinerary__cell itinerary__cell--contact">{{ show.contact }}</td>
        <td class="itinerary__cell itinerary__cell--email">{{ show.email }}</td>
        <td class="itinerary__cell itinerary__cell--status">{{ show.status }}</td>
        <td class="itinerary__cell itinerary__cell--venue">{{ show.venue }}</td>
        <td class="itinerary__cell itinerary__cell--ticketUrl">
          <a :href="show.url" class="itinerary__link itinerary__link--ticketUrl">
            <md-icon>link</md-icon>
          </a>
        </td>
        <td class="itinerary__cell itinerary__cell--catering">Yes</td>
        <td class="itinerary__cell itinerary__cell--housing">No</td>
      </tr>
    </table>

    <md-button class="itinerary__btn itinerary__btn--details btn-large waves-effect waves-light btn-floating"
               @click="details()">
      <svg class="itinerary__icon itinerary__icon--detail" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" /></svg>
    </md-button>

    <inviteUser ref="InviteUser"></inviteUser>
    <deleteTour ref="DeleteTour"></deleteTour>
    <reportIssue></reportIssue>
    <inviteFriend></inviteFriend>
  </div>
</template>

<script>
import InviteUser from './InviteUser'
import DeleteTour from './DeleteTour'
import ReportIssue from '../ReportIssue'
import InviteFriend from '../InviteFriend'
import { mapState } from 'vuex'
export default {
  name: 'itinerary',
  components: { InviteUser, DeleteTour, ReportIssue, InviteFriend },
  data () {
    return {
      checkbox: false,
      shows: [
        {
          name: 'RHCP',
          venue: 'Olimpic Stadium',
          date: '11/28/2016',
          contact: 'Boris Condapopuls',
          email: 'orlando_hansen@gmail.com',
          status: 'confirmed',
          url: 'http://www.ticketmaster.com',
          checkbox: false
        },
        {
          name: 'RHCP',
          venue: 'Olimpic Stadium',
          date: '11/28/2016',
          contact: 'Matt Dimond First',
          email: 'orlando_hansen@olimpicstadium.com',
          status: 'on sale',
          url: 'http://www.ticketmaster.com',
          checkbox: false
        }
      ],
      tourId: this.$route.params.id,
      tourName: this.$route.params.name
    }
  },
  computed: mapState({
    modals: state => state.modals
  }),
  methods: {
    openInviteUserPopup () {
      this.$store.dispatch('inviteUser')
    },
    openDeleteTourPopup () {
      let tourId = this.tourId
      this.$store.dispatch('deleteTour', tourId)
    },
    toggleTourControlsPopup () {
      this.$store.dispatch('tourControlsModal')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../../styles/App/Tours/itinerary'

</style>
