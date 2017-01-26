<template>
  <div class="showDetails">
    <md-whiteframe class="showDetails__container">
      <div class="showDetails__header">
        <h2 class="showDetails__title">{{ showName }} @ In The Venue</h2>
        <div class="showDetails__centrBlock">
          <svg class="showDetails__icon" width="32px" height="32px" viewBox="852 184 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs></defs><g id="Group-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(852.000000, 184.000000)"><g id="Group"><path d="M16,32 C24.836556,32 32,24.836556 32,16 C32,7.163444 24.836556,0 16,0 C7.163444,0 0,7.163444 0,16 C0,24.836556 7.163444,32 16,32 Z" id="Oval-20-Copy-2" fill="#21CE99"></path><text id="C" font-family="Roboto-Regular, Roboto" font-size="16" font-weight="normal" letter-spacing="-0.0307692308" fill="#1F2226"><tspan x="11.3083534" y="22">C</tspan></text></g></g>
          </svg>
        </div>
        <div class="showDetails__userBlock">
          <md-icon class="showDetails__icon showDetails__icon--delete">delete</md-icon>
          <md-button class="showDetails__btn showDetails__btn--send"
                     @click="openShareShowPopup()">
            <md-icon class="showDetails__icon showDetails__icon--send">send</md-icon>
          </md-button>
        </div>
      </div>

      <div class="showDetails__content">
        <div class="showDetails__column showDetails__column--first">
          <div class="showDetails__colName showDetails__colName--first">Show Information</div>
          <div class="showDetails__bands">
            <md-icon class="showDetails__icon showDetails__icon--list">list</md-icon>
            <ul class="showDetails__list">
              <li class="showDetails__listItem"
                  v-for="band in bands">{{ band.name}}
              </li>
            </ul>
          </div>
          <div class="showDetails__date">
            <md-icon class="showDetails__icon showDetails__icon--date">event</md-icon>
            <div class="showDetails__description">08/31/2016 - 6:00pm</div>
          </div>
        </div>

        <div class="showDetails__column showDetails__column--second">
          <div class="showDetails__colName showDetails__colName--second">Venue Information</div>
          <div class="showDetails__address">
            <md-icon class="showDetails__icon showDetails__icon--place">place</md-icon>
            <div class="showDetails__block">
              <div class="showDetails__description">
                2000 SW 1st Ave
                San Francisco, CA 94112
              </div>
              <span class="showDetails__blockTitle">Home</span>
            </div>
          </div>

          <div class="showDetails__capacity">
            <md-icon class="showDetails__icon showDetails__icon--place">exit_to_app</md-icon>
            <div class="showDetails__block">
              <div class="showDetails__description">
                1000 people
              </div>
              <span class="showDetails__blockTitle">Capacity</span>
            </div>
          </div>

          <div class="showDetails__venueContacts">
            <div class="showDetails__venuePhone">
              <md-icon class="showDetails__icon showDetails__icon--phone">phone</md-icon>
              <div class="showDetails__block">
                <div class="showDetails__description">
                  1.435.555.1234
                </div>
                <span class="showDetails__blockTitle">Phone Number</span>
              </div>
            </div>

            <div class="showDetails__venueEmail">
              <md-icon class="showDetails__icon showDetails__icon--email">email</md-icon>
              <div class="showDetails__block">
                <div class="showDetails__description">
                  maybell_walsh@conroy.ca
                </div>
                <span class="showDetails__blockTitle">Venue Email / Contact Email</span>
              </div>
            </div>
          </div>
        </div>

        <div class="showDetails__column showDetails__column--third">
          <div class="showDetails__colName showDetails__colName--third">Promoter Information</div>
          <div class="showDetails__promoterDetails">
            <div class="showDetails__row showDetails__row--promoterName">
              <md-icon class="showDetails__icon showDetails__icon--accountBox">account_box</md-icon>
              <div class="showDetails__block showDetails__block--promoter">
                <div class="showDetails__description">
                  Garrat Vargas
                </div>
                <span class="showDetails__blockTitle">Full Name</span>
              </div>
            </div>

            <div class="showDetails__row">
              <md-icon class="showDetails__icon showDetails__icon--phone">phone</md-icon>
              <div class="showDetails__block showDetails__block--promoter">
                <div class="showDetails__description">
                  (323) 555-6789
                </div>
                <span class="showDetails__blockTitle">Cell</span>
              </div>
            </div>
          </div>

          <div class="showDetails__promoterEmails">
            <div class="showDetails__row showDetails__row--personalEmail">
              <md-icon class="showDetails__icon showDetails__icon--email">email</md-icon>
              <div class="showDetails__block showDetails__block--promoter">
                <div class="showDetails__emails">
                  <div class="showDetails__description">
                    garretvargas@example.com
                  </div>
                  <span class="showDetails__blockTitle">Personal</span>
                </div>

                <div class="showDetails__emails">
                  <div class="showDetails__description">
                    garret@example.com
                  </div>
                  <span class="showDetails__blockTitle">Work</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </md-whiteframe>

    <shareShow ref="ShareShow"></shareShow>
    <reportIssue></reportIssue>
    <inviteFriend></inviteFriend>
  </div>
</template>

<style scoped lang="stylus">
@import '../../../styles/App/Shows/showDetails'

</style>

<script>
  import ReportIssue from '../ReportIssue'
  import ShareShow from './ShareShow'
  import InviteFriend from '../InviteFriend'
  export default {
    name: 'showDetails',
    components: { ShareShow, ReportIssue, InviteFriend },
    data () {
      return {
        bands: [
          {
            name: 'Hard Luck'
          },
          {
            name: 'RHCP'
          }
        ],
        confirmed: false,
        showName: this.$route.params.name
      }
    },
    methods: {
      openShareShowPopup: function (event) {
        this.$refs.ShareShow.open()
      }
    }
  }
</script>
