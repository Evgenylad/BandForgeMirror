import { API_URL } from '../../config/constants'

export default {
  getUser () {
    this.$http.get(API_URL + '/user')
    .then((user) => {
      console.log('user is: ', user)
    })
    .catch((err) => {
      console.log('Error checking user ', err)
    })
  },

  loginUser (user, context) {
    console.log(this)
    context.$http.post(API_URL + '/user/login', user)
    .then((user) => {
      console.log('User logged in')
      console.log(user)
    })
    .catch((err) => {
      console.log('Error logging in user: ', err)
    })
  },

  signup (user, context) {
    context.$http.post(API_URL + '/user/signup', user)
    .then((user) => {
      console.log('User logged in')
      console.log(user)
    })
    .catch((err) => {
      console.log(user)
      console.log('Error logging in user: ', err)
    })
  },

  logoutUser () {
    this.$http.post(API_URL + '/logout')
    .then(() => {
      console.log('user logged out')
    })
  }

  /* // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  login (context, creds, redirect) {
    context.$http.post(API_URL + '/user', creds, (data) => {
      this.user.authenticated = true
    }).error((err) => {
      context.error = err
    })
  } */

}
