<template>
  <div class="onBoarding" v-if="user.authenticated && !band.added">

    <md-whiteframe class="onBoarding__container">

      <div class="onBoarding__box">
        <md-input-container class="onBoarding__inputBlock">
          <md-input class="onBoarding__input" id="onBoarding__bandName"
                    v-model="credentials.bandName">
          </md-input>
          <label class="onBoarding__label" for="onBoarding__bandName" required>Your band's name</label>
        </md-input-container>

        <md-input-container class="onBoarding__inputBlock">
          <md-input class="onBoarding__input" id="onBoarding__bandSocialUrl"
                    v-model="credentials.bandSocialUrl">
          </md-input>
          <label class="onBoarding__label" for="onBoarding__bandSocialUrl" required>URL to your band's social media page</label>
        </md-input-container>

        <md-input-container class="onBoarding__inputBlock">
          <md-input class="onBoarding__input" id="onBoarding__bandPhone"
                    v-model="credentials.phone">
          </md-input>
          <label class="onBoarding__label" for="onBoarding__conf_pass">Your phone number (optional)</label>
        </md-input-container>
      </div>

      <md-button class="onBoarding__btn " @click="submit()">Okay, let's go</md-button>
    </md-whiteframe>


  </div>
</template>

<script>
import auth from '../api/user'
export default {
  name: 'onBoarding',
  data () {
    return {
      credentials: {
        bandName: '',
        bandSocialUrl: '',
        phone: ''
      },
      user: auth.user,
      band: auth.band
    }
  },
  computed: {
    addMemberPopupVisible () {
      return this.$store.state.addMemberPopupVisible
    }
  },
  methods: {
    submit () {
      var band = {
        bandName: this.credentials.bandName,
        bandSocialUrl: this.credentials.bandSocialUrl,
        phone: this.credentials.phone
      }
      auth.createNewBand(band, this)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../styles/colors'
@import '../styles/onBoarding'

</style>
