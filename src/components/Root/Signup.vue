<template>
  <div class="signup">
    <md-whiteframe class="signup__container">
      <div class="signup__box">
        <md-input-container class="signup__inputBlock md-input-invalid">
          <label class="signup__label" for="signup__username">
            Username
          </label>
          <md-input
            class="signup__input"
            id="signup__username"
            required
            v-model="credentials.username"
            @input="validateEmail"
          ></md-input>
          <span class="signup__error md-error" v-if="!emailValid">
            Please enter valid e-mail
          </span>
        </md-input-container>

        <md-input-container class="signup__inputBlock">
          <label class="signup__label" for="signup__pass">Password</label>
          <md-input
            class="signup__input"
            id="signup__pass"
            type="password"
            v-model="credentials.password"
            @input="validatePasswordMatch"
          ></md-input>
        </md-input-container>

        <md-input-container class="signup__inputBlock">
          <label class="signup__label" for="signup__conf_pass">
            Confirm Password
          </label>
          <md-input
            class="signup__input"
            id="signup__conf_pass"
            type="password"
            v-model="credentials.confirmPassword"
            @input="validatePasswordMatch"
          ></md-input>
          <span
            class="signup__error password-match"
            v-show="credentials.password && !passwordsMatch"
          >
            Passwords do not match
          </span>
        </md-input-container>
      </div>

      <md-button
        class="signup__btn "
        @click="submit"
        :disabled="!emailValid || !passwordsMatch"
      >
        Sign Up
      </md-button>

      <div class="signup__welcomeText">
        Already a user? <router-link to="login">Login</router-link>
      </div>
    </md-whiteframe>
  </div>
</template>

<script>
import { emailValidation } from '../../utils-convenience'

export default {
  name: 'signup',
  data () {
    return {
      credentials: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      passwordsMatch: false,
      emailValid: false
    }
  },
  methods: {
    submit () {
      var user = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      this.$store.dispatch('signupUser', user)
    },
    validateEmail () {
      this.emailValid = emailValidation(this.credentials.username)
    },
    validatePasswordMatch () {
      console.log('validating')
      if (this.credentials.password !== this.credentials.confirmPassword) {
        this.passwordsMatch = false
      } else {
        this.passwordsMatch = true
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../styles/colors'
@import '../../styles/Root/signup'

.password-match
  font-size 12px
  margin-right 90px
</style>
