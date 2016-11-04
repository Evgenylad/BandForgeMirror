<template>
  <div class="shows">
    <addShow></addShow>
    <md-button class="shows__btn shows__btn--add" @click="addShow()">Add show</md-button>
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
        <div class="show__cell show__cell--checkbox">
          <input type="checkbox" name="name">
        </div>
        <div class="show__cell show__cell--name">Show Name / Description</div>
        <div class="show__cell show__cell--date">Date</div>
        <div class="show__cell show__cell--contact">Contact</div>
        <div class="show__cell show__cell--status">Status</div>
        <div class="show__cell show__cell--venue">Venue</div>
        <div class="show__cell show__cell--ticketUrl">Ticket URL</div>
      </div>

      <div class="shows__row shows__row--odd" v-for="show in shows">
        <div class="show__cell show__cell--checkbox">
          <input type="checkbox" name="name">
        </div>
        <div class="show__cell show__cell--name">{{ show.name }} @ {{ show.venue }}</div>
        <div class="show__cell show__cell--date">{{ show.date }}</div>
        <div class="show__cell show__cell--contact">{{ show.contact }}</div>
        <div class="show__cell show__cell--status">{{ show.status }}</div>
        <div class="show__cell show__cell--venue">{{ show.venue }}</div>
        <div class="show__cell show__cell--ticketUrl">{{ show.url }}</div>
      </div>
    </div>

    <showDetails></showDetails>
  </div>
</template>

<script>
import { API_URL } from '../../../../config/constants'
import auth from '../../../api/user'
import AddShow from './AddShow'
import ShowDetails from './showDetails'
export default {
  name: 'shows',
  components: { AddShow, ShowDetails },
  data () {
    return {
      title: 'Shows',
      shows: this.$store.state.shows
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
    addShow () {
      let headers = auth.getAuthHeader()
      console.log(headers)
      this.$http.get(API_URL + '/api/band/getBandInfoById/:' + this.$store.state.activeBandId, headers)
      .then((response) => {
        console.log(response)
        var v = response.blob()
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
