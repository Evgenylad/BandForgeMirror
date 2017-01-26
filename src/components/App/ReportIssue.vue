<template>
  <div class="reportIssue"
       v-if="modals.reportIssuePopupVisible">
    <div class="reportIssue__wrapper">
      <md-whiteframe class="reportIssue__container">
        <h4 class="reportIssue__title">Find a bug? Have a suggestion?</h4>
        <p class="reportIssue__content">
          Let us know how we’re doing.
        </p>

        <md-input-container class="reportIssue__inputBlock">
          <label class="reportIssue__label" for="reportIssue__comment">Comments</label>
          <md-input class="reportIssue__input" id="reportIssue__comment"
                    v-model="comment">
          </md-input>
        </md-input-container>

        <div class="reportIssue__btnBlock">
          <md-button class="reportIssue__btn reportIssue__btn--cancel"
                     @click="cancel()">Cancel</md-button>
          <md-button class="reportIssue__btn reportIssue__btn--invite"
                     @click="reportIssue()">Send comment</md-button>
        </div>

      </md-whiteframe>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'reportIssue',
  data () {
    return {
      comment: null
    }
  },
  computed: mapState({
    modals: state => state.modals
  }),
  methods: {
    cancel () {
      this.$store.dispatch('reportIssue')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../styles/colors'
@import '../../styles/App/reportIssue'

.md-select::after
 color: green-background;

</style>
