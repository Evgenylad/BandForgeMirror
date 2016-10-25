<template>
  <div class="login">

    <md-whiteframe class="login-container">
      <h1>Login</h1>
      <md-content class="loginbox">
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
      </md-content>

      <md-content>
        <md-button class="md-accent" @click="submit()">Login</md-button>
      </md-content>

      <div class="padded">
        Already a user? Login here.
      </div>

    </md-whiteframe>


  </div>
</template>

<script>
import { API_URL } from '../../config/constants'
export default {
  name: 'login',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      var user = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      this.$http.post(API_URL + '/user/login', user)
      .then((user) => {
        console.log('User logged in')
        console.log(user)
      })
      .catch((err) => {
        console.log(user)
        console.log('Error logging in user: ', err)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../styles/colors'
.md-accent
  background-color: accent-yellow
  color: #fff
.login-container
  color: primary-text-color
  background-color: #fff
  padding: 20px
@media(min-width: 501px)
  .login-container
    width: 400px
    text-align: center
    margin: 100px auto
@media(max-width: 500px)
  .login-container
    width: 100%
    text-align: center
    margin: 20px auto
</style>
