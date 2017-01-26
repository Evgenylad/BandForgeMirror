<template>
  <div class="inviteUser"
       v-if="modals.inviteUserPopupVisible">
    <div class="inviteUser__wrapper">
      <md-whiteframe class="inviteUser__container">
        <h4 class="inviteUser__title">Add a user to this tour</h4>
        <p class="inviteUser__content">
          They'll be able to edit and work on this tour.
        </p>
        <p class="inviteUser__content">
          Are you ok with it? If so enter their email below.
        </p>
        <md-input-container class="inviteUser__inputBlock"
                            v-for="member in members">
          <label class="inviteUser__label" for="inviteUser__email">Email</label>
          <md-input class="inviteUser__input" id="inviteUser__email"
                    v-model="member.email">
          </md-input>
        </md-input-container>

        <md-button class="inviteUser__btn inviteUser__btn--add btn-large waves-effect waves-light btn-floating"
                   @click="addMember()">
          <md-icon>add</md-icon>
        </md-button>

        <div class="inviteUser__btnBlock">
          <md-button class="inviteUser__btn inviteUser__btn--cancel"
                     @click="cancel()">Cancel</md-button>
          <md-button class="inviteUser__btn inviteUser__btn--invite"
                     @click="invite()">Give them tour access</md-button>
        </div>

      </md-whiteframe>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'inviteUser',
  data () {
    return {

    }
  },
  computed: mapState({
    modals: state => state.modals
  }),
  methods: {
    cancel () {
      this.$store.dispatch('inviteUser')
    },
    addMember () {
      var newMember = {
        email: ''
      }
      this.members.push(newMember)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../../styles/colors'
@import '../../../styles/App/Tours/inviteUser'

.md-select::after
 color: green-background;

</style>
