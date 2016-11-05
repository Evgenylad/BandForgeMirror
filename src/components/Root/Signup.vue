<template>
  <div class="signup">

    <md-whiteframe class="signup__container">

      <div class="signup__box">
        <md-input-container class="signup__inputBlock md-input-invalid">
          <label class="signup__label" for="signup__username">Username</label>
          <md-input class="signup__input" id="signup__username" required
                    v-model="credentials.username"
                    @input="emailValidation()">
          </md-input>
          <span class="signup__error md-error"
                v-if="!this.$store.state.emailValid">Please enter valid e-mail</span>
        </md-input-container>

        <md-input-container class="signup__inputBlock">
          <label class="signup__label" for="signup__pass">Password</label>
          <md-input class="signup__input" id="signup__pass" type="password"
                    v-model="credentials.password">
          </md-input>
        </md-input-container>

        <md-input-container class="signup__inputBlock">
          <label class="signup__label" for="signup__conf_pass">Confirm Password</label>
          <md-input class="signup__input" id="signup__conf_pass" type="password"
                    v-model="credentials.confirmPassword">
          </md-input>
        </md-input-container>
      </div>

      <md-button class="signup__btn "
                 @click="submit(), changeCurrentModal('OnBoarding')"
                 :disabled="!this.$store.state.emailValid">Sign UP</md-button>

      <div class="signup__welcomeText">
        Not a user yet? Sign Up here.
      </div>

    </md-whiteframe>


  </div>
</template>

<script>
import auth from '../../api/user'
export default {
  name: 'signup',
  data () {
    return {
      credentials: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      user: auth.user
    }
  },
  methods: {
    submit () {
      var user = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      auth.signup(user, this)
    },
    changeCurrentModal (currentView) {
      this.$store.commit('changeCurrentModal', currentView)
    },
    emailValidation () {
      this.$store.commit('emailValidation', this.credentials.username)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../styles/colors'
@import '../../styles/Root/signup'

</style>
