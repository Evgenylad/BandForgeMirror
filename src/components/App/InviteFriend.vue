<template>
  <div class="inviteFriend"
       v-if="modals.inviteFriendPopupVisible">
    <div class="inviteFriend__wrapper">
      <md-whiteframe class="inviteFriend__container">
        <h4 class="inviteFriend__title">Invite a Friend</h4>

        <md-input-container class="inviteFriend__inputBlock">
          <label class="inviteFriend__label" for="inviteFriend__email">Email</label>
          <md-input class="inviteFriend__input" id="inviteFriend__email"
                    v-model="email">
          </md-input>
        </md-input-container>

        <div class="inviteFriend__btnBlock">
          <md-button class="inviteFriend__btn inviteFriend__btn--cancel"
                     @click="cancel()">Cancel</md-button>
          <md-button class="inviteFriend__btn inviteFriend__btn--invite"
                     @click="inviteFriend()">Invite A friend</md-button>
        </div>

      </md-whiteframe>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'inviteFriend',
  data () {
    return {
      email: null
    }
  },
  computed: mapState({
    modals: state => state.modals
  }),
  methods: {
    cancel () {
      this.$store.dispatch('inviteFriend')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../../styles/colors'
@import '../../styles/App/inviteFriend'

.md-select::after
 color: green-background;

</style>
