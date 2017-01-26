<template>
  <div class="createTour"
       v-if="modals.createTourPopupVisible" @click="close()">
    <div class="createTour__wrapper" @click.stop>
      <md-whiteframe class="createTour__container">
        <h4 class="createTour__title">Create a tour</h4>
        <p class="createTour__content">
          Give us the detail.
        </p>

        <md-input-container class="createTour__inputBlock">
          <label class="createTour__label" for="createTour__tour">Name of tour</label>
          <md-input class="createTour__input" id="createTour__tour" required
                    v-model="tour.name">
          </md-input>
        </md-input-container>

        <md-input-container class="createTour__inputBlock">
          <label class="createTour__label" for="createTour__manager">Tour Manager</label>
          <md-input class="createTour__input" id="createTour__manager"
                    v-model="tour.manager">
          </md-input>
        </md-input-container>

        <md-input-container class="createTour__inputBlock">
          <label class="createTour__label" for="createTour__agent">Booking agent</label>
          <md-input class="createTour__input" id="createTour__agent"
                    v-model="tour.agent">
          </md-input>
        </md-input-container>

        <div class="createTour__btnBlock">
          <md-button class="createTour__btn createTour__btn--cancel"
                     @click="close()">Cancel</md-button>
          <md-button class="createTour__btn createTour__btn--add"
                     @click="book()">Start booking</md-button>
        </div>

      </md-whiteframe>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'createTour',
  data () {
    return {
      tour: {
        name: null,
        description: null,
        agent: null,
        manager: null,
        primary_image_url: null,
        primary_address_id: null,
        primary_social_id: null,
        primary_url: null
      }
    }
  },
  computed: mapState({
    modals: state => state.modals
  }),
  methods: {
    close () {
      this.$store.dispatch('createTourPopup')
    },
    // Create new tour. Property for the tour picture will be added later as soon as API endpoind will be ready for that.
    // description, primary_image_url, primary_address_id, primary_url and primary_social_id needs to be added to the view
    // tour-manager and agent have to be added to endpoint
    book () {
      let tour = this.tour
      this.$store.dispatch('createTour', tour)
      console.log('band added')
      this.close()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../../styles/colors'
@import '../../../styles/App/Tours/createTour'

.createTour__btnBlock
  padding: 15px 0px

.createTour__btn
  padding: 0px 15px

.md-select::after
  color: green-background;

</style>
