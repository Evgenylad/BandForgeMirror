<template>
  <div class="login" v-show="!user.authenticated">

    <md-whiteframe class="login__container">
      <div class="login__box">
        <md-input-container class="login__inputBlock md-input-invalid">
          <label class="login__label" for="login__username">Username</label>
          <md-input
            class="login__input"
            id="login__username"
            required
            v-model="credentials.username"
            @input="validateEmail"
          ></md-input>
          <span
            class="login__error md-error"
            v-if="!emailValid"
          >
            Please enter valid e-mail
          </span>
        </md-input-container>

        <md-input-container class="login__inputBlock">
          <label class="login__label" for="login__pass">Password</label>
          <md-input
            class="login__input"
            id="login__pass"
            type="password"
            required
            v-model="credentials.password"
          ></md-input>
        </md-input-container>
      </div>

      <md-button
        class="login__btn "
        @click="submit()"
        :disabled="!emailValid"
      >
        login
      </md-button>


      <div class="login__welcomeText">
        Not a user yet? <router-link to="signup">Sign Up</router-link>
      </div>

    </md-whiteframe>


  </div>
</template>

<script>
import auth from '../../api/user'
import { emailValidation } from '../../utils-convenience'

export default {
  name: 'login',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      emailValid: false,
      user: auth.user,
      userId: auth.user.userId,
      activeBandId: auth.band.activeBandId
    }
  },
  methods: {
    submit () {
      var user = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      auth.loginUser(user, this)
      this.$store.dispatch('addUserId', this.userId)
      this.$store.commit('addActiveBandId', this.activeBandId)
    },
    validateEmail () {
      this.emailValid = emailValidation(this.credentials.username)
    }
  }
}

</script>

<style scoped lang="stylus">
@import '../../styles/Root/login'

</style>
