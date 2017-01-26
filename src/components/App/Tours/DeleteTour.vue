<template>
  <div class="deleteTour"
       v-if="modals.deleteTourPopupVisible">
    <div class="deleteTour__wrapper">
      <md-whiteframe class="deleteTour__container">
        <h4 class="deleteTour__title">Delete tour</h4>
        <p class="deleteTour__content">
          Are you sure you want to delete this tour? You won't be able to get it back after this.
        </p>
        <p class="deleteTour__content">
          Type the name of the tour below to delete it.
        </p>
        <md-input-container class="deleteTour__inputBlock">
          <label class="deleteTour__label" for="deleteTour__tourName">Type the name of the tour</label>
          <md-input class="deleteTour__input" id="deleteTour__tourName"
                    v-model="tourName">
          </md-input>
        </md-input-container>

        <div class="deleteTour__btnBlock">
          <md-button class="deleteTour__btn deleteTour__btn--cancel"
                     @click="cancel()">Keep this tour</md-button>
          <md-button class="deleteTour__btn deleteTour__btn--keep"
                     @click="deleteTour()">Delete the tour</md-button>
        </div>

      </md-whiteframe>
    </div>
  </div>
</template>

<script>
import { API_URL } from '../../../../config/constants'
import { mapState } from 'vuex'
export default {
  name: 'deleteTour',
  data () {
    return {
      tourName: null
    }
  },
  computed: mapState({
    modals: state => {
      return state.modals
    }
  }),
  methods: {
    cancel () {
      this.$store.dispatch('deleteTour')
    },
    deleteTour () {
      let bandId = window.localStorage.getItem('active_band_id')
      let token = window.localStorage.getItem('token')
      let tourId = this.$store.state.modals.tourId
      this.axios.delete(API_URL + '/api/bands/' + bandId + '/tours/' + tourId, {
        headers: {'x-access-token': token}
      }).then((response) => {
        console.log('Tour deleted')
        this.close()
      })
      .catch((err) => {
        console.log('Tour was not deleted: ', err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../../styles/colors'
@import '../../../styles/App/Tours/deleteTour'

.md-select::after
 color: green-background;

</style>
