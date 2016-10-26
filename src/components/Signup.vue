<template>
  <div class="signup">

    <md-whiteframe class="signup-container">
      <h1>Sign Up</h1>
      <md-content class="signupbox">
        <md-input-container>
          <!-- <label>Username</label> -->
          <md-input placeholder="Username"
                    v-model="credentials.username">
          </md-input>
        </md-input-container>

        <md-input-container>
          <!-- <label>Password</label> -->
          <md-input placeholder="Password"
                    v-model="credentials.password">
          </md-input>
        </md-input-container>

        <md-input-container>
          <!-- <label>Password</label> -->
          <md-input placeholder="Confirm Password"
                    v-model="credentials.confirmPassword">
          </md-input>
        </md-input-container>
      </md-content>

      <md-content>
        <md-button class="md-accent" @click="submit()">Sign UP</md-button>
      </md-content>

      <div class="padded">
        Not a user yet? Sign Up here.
      </div>

    </md-whiteframe>


  </div>
</template>

<script>
import auth from '../api/user'
export default {
  name: 'signup',
  data () {
    return {
      credentials: {
        username: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    submit () {
      var user = {
        username: this.credentials.username,
        password: this.credentials.password,
        confirmPassword: this.credentials.confirmPassword
      }
      auth.signup(user, this)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../styles/colors'
.md-accent
  background-color: accent-yellow
  color: #fff
.signup-container
  color: primary-text-color
  background-color: #fff
  padding: 20px
@media(min-width: 501px)
  .signup-container
    width: 400px
    text-align: center
    margin: 100px auto
@media(max-width: 500px)
  .signup-container
    width: 100%
    text-align: center
    margin: 20px auto
</style>
