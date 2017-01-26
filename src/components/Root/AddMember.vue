<template>
  <div class="addMember">

    <md-whiteframe class="addMember__container">

      <div class="addMember__box">
        <md-input-container class="addMember__inputBlock"
                            v-for="member in members">
          <md-input class="addMember__input" id="addMember__email"
                    v-model="member.email">
          </md-input>
          <label class="addMember__label" for="addMember__email" required>Member's e-mail</label>
        </md-input-container>


        <md-button class="btn-large waves-effect waves-light btn-floating addMember__btn addMember__btn--add"
                   @click="addMember()">
          <md-icon>add</md-icon>
        </md-button>

        <span class="addMember__commit">Click to add more members</span>
      </div>

      <md-button class="addMember__btn addMember__btn--submit " @click="submit()">Invite them</md-button>

      <div class="addMember__declineBlock">
        <md-button class="addMember__btnDecline"
                   @click="openDashboard()">No thanks, just take me to the app.</md-button>
      </div>
    </md-whiteframe>
  </div>
</template>

<script>
import auth from '../../api/user'
import { router } from '../../router'

export default {
  name: 'addMember',
  data () {
    return {
      members: [
        {
          email: ''
        }
      ],
      user: auth.user,
      band: auth.band,
      member: auth.member
    }
  },
  methods: {
    submit () {
      var member = {
        email: this.credentials.email
      }
      auth.createNewBand(member, this)
    },
    addMember () {
      var newMember = {
        email: ''
      }
      this.members.push(newMember)
    },
    openDashboard () {
      router.push('/index/shows')
      this.$store.commit('changeCurrentModal', 'Login')
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../styles/Root/addMember'

</style>
