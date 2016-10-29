<template>
  <div class="login" v-if="this.$store.state.loginPopupVisible && !user.authenticated">

    <md-whiteframe class="login__container">
      <div class="login__box">
        <md-input-container class="login__inputBlock">
          <label class="login__label" for="login__username">Username</label>
          <md-input class="login__input" id="login__username"
                    v-model="credentials.username">
          </md-input>
        </md-input-container>

        <md-input-container class="login__inputBlock">
          <label class="login__label" for="login__pass">Password</label>
          <md-input class="login__input" id="login__pass"
                    v-model="credentials.password">
          </md-input>
        </md-input-container>
      </div>

      <md-button class="login__btn " @click="submit()">login</md-button>

      <div class="login__welcomeText">
        Not a user yet? Sign Up here.
      </div>

    </md-whiteframe>


  </div>
</template>

<script>
import auth from '../api/user'
export default {
  name: 'login',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
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
      auth.loginUser(user, this)
    }
  }
}

</script>

<style scoped lang="stylus">
@import '../styles/colors'
@import '../styles/login'

</style>
