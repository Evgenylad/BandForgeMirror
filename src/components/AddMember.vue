<template>
  <div class="addMember" v-if="user.authenticated && band.added && !member.added">

    <md-whiteframe class="addMember__container">

      <div class="addMember__box">
        <md-input-container class="addMember__inputBlock"
                            v-for="member in members">
          <md-input class="addMember__input" id="addMember__email"
                    v-model="members.credentials.email">
          </md-input>
          <label class="addMember__label" for="addMember__email" required>Member's e-mail</label>
        </md-input-container>

      </div>

      <md-button class="addMember__btn " @click="submit()">Invite them</md-button>
    </md-whiteframe>


  </div>
</template>

<script>
import auth from '../api/user'
export default {
  name: 'addMember',
  data () {
    return {
      members: {
        credentials: {
          email: ''
        }
      },
      user: auth.user,
      band: auth.band,
      member: auth.member
    }
  },
  computed: {
    addMemberPopupVisible () {
      return this.$store.state.addMemberPopupVisible
    }
  },
  methods: {
    submit () {
      var member = {
        email: this.credentials.email
      }
      auth.createNewBand(member, this)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../styles/colors'
@import '../styles/addMember'

</style>
