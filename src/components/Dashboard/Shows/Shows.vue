<template>
  <div class="shows">
    <addShow ref="AddShow"></addShow>
    <md-button class="shows__btn shows__btn--add" @click="getBandId()">Add show</md-button>
    <div class="shows__container">
      <h2 class="shows__title">All Shows</h2>
      <div class="shows__row shows__row--even">
        <div class="shows__total">
          <span class="shows__totalSelected">1</span class="shows__totalDescription">
          <span>item selected</span>
        </div>

        <div class="shows__btnBlock">
          <md-icon class="shows__icon shows__icon--delete">delete</md-icon>
          <div class="shows__userMenu"></div>
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

      <div class="shows__row shows__row--odd" v-for="show in shows">
        <md-checkbox class="shows__cell shows__cell--checkbox md-primary" name="checkbox"
                     v-model="show.checkbox"></md-checkbox>
        <router-link class="show__cell shows__cell--name" to="/dashboard/showdetails">{{ show.name }} @ {{ show.venue }}</router-link>
        <div class="shows__cell shows__cell--date">{{ show.date }}</div>
        <div class="shows__cell shows__cell--contact">{{ show.contact }}</div>
        <div class="shows__cell shows__cell--status">{{ show.status }}</div>
        <div class="shows__cell shows__cell--venue">{{ show.venue }}</div>
        <div class="shows__cell shows__cell--ticketUrl">{{ show.url }}</div>
      </div>
    </div>

  </div>
</template>

<script>
import { API_URL } from '../../../../config/constants'
import auth from '../../../api/user'
import AddShow from './AddShow'
export default {
  name: 'shows',
  components: { AddShow },
  data () {
    return {
      title: 'Shows',
      checkbox: false,
      shows: [
        {
          name: 'RHCP',
          venue: 'Olimpic Stadium',
          date: '11/28/2016',
          contact: 'Boris Condapopuls',
          status: 'confirmed',
          url: 'www.ticketmaster.com',
          checkbox: false
        },
        {
          name: 'RHCP',
          venue: 'Olimpic Stadium',
          date: '11/28/2016',
          contact: 'Matt Dimond First',
          status: 'on sale',
          url: 'Buy ticket',
          checkbox: false
        }
      ]
    }
  },
  computed: {
    userId () {
      return this.$store.state.userId
    },
    activeBandId () {
      return this.$store.state.activeBandId
    }
  },
  methods: {
    toggleAddShowPopup: function (event) {
      this.$refs.AddShow.toggle()
    },
    getBandId () {
      let headers = auth.getAuthHeader()
      console.log(headers)
      this.axios.get(API_URL + '/user')
      .then((response) => {
        console.log(response)
        var v = response.json()
        console.log(v)
      })
      .catch((err) => {
        console.log('Band did NOT added: ', err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../../styles/Dashboard/Shows/shows'

</style>
