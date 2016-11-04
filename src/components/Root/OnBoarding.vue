<template>
  <div class="onBoarding">

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

      <md-button class="onBoarding__btn " @click="submit(), changeCurrentModal('AddMember')">Okay, let's go</md-button>
    </md-whiteframe>


  </div>
</template>

<script>
import auth from '../../api/user'
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
  methods: {
    submit () {
      let localStorage = window.localStorage
      localStorage.setItem('bandName', this.credentials.bandName)
      auth.band.added = true
      let band = {
        name: this.credentials.bandName,
        primary_url: this.credentials.bandSocialUrl
      }
      auth.createNewBand(band, this)
    },
    changeCurrentModal (currentView) {
      this.$store.commit('changeCurrentModal', currentView)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../styles/Root/onBoarding'

</style>
