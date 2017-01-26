<template>
  <div class="addBand"
       v-if="modals.addBandPopupVisible">
    <div class="addBand__wrapper">
      <md-whiteframe class="addBand__container">
        <h4 class="addBand__title">Create a band</h4>

        <md-input-container class="addBand__inputBlock">
          <label class="addBand__label" for="addBand__tour">Band name</label>
          <md-input class="addBand__input" id="addBand__tour"
                    v-model="bandName">
          </md-input>
        </md-input-container>

        <md-input-container class="addBand__inputBlock addBand__inputBlock--last">
          <label class="addBand__label" for="addBand__manager">Social media / URL</label>
          <md-input class="addBand__input" id="addBand__manager"
                    v-model="bandLink">
          </md-input>
        </md-input-container>

        <div class="addBand__btnBlock">
          <md-button class="addBand__btn addBand__btn--cancel"
                     @click="cancel()">Cancel</md-button>
          <md-button class="addBand__btn addBand__btn--add"
                     @click="add()">Create</md-button>
        </div>

      </md-whiteframe>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'addBand',
  data () {
    return {
      bandName: null,
      bandLink: null
    }
  },
  computed: mapState({
    modals: state => state.modals
  }),
  methods: {
    cancel () {
      this.$store.dispatch('addBandPopup')
    },
    // Create new tour. Property for the tour picture will be added later as soon as API endpoind will be ready for that
    add () {
      let band = {
        band_name: this.bandName,
        band_link: this.bandLink
      }
      this.$store.dispatch('createTour', band)
      console.log('band added')
      this.cancel()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../../styles/colors'
@import '../../../styles/App/Bands/addBand'

.md-select::after
 color: green-background;

</style>
