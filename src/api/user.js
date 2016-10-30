import { API_URL } from '../../config/constants'

export default {
  // User object will let us check authentication status
  user: {
    authenticated: true
  },

  band: {
    added: true
  },

  member: {
    added: true
  },

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
    let localStorage = window.localStorage
    context.$http.post(API_URL + '/user/login', user)
    .then((user) => {
      console.log('User logged in')

      localStorage.setItem('token', user.body.token)
      this.user.authenticated = true
      this.band.added = true
      this.member.added = true
      this.member.added = true
    })
    .catch((err) => {
      console.log('Error logging in user: ', err)
    })
  },

  signup (user, context) {
    context.$http.post(API_URL + '/user/signup', user)
    .then((user) => {
      console.log('User logged in')
      console.log(user.status)
      this.user.authenticated = true
      console.log('ifsuccess: ' + this.user.authenticated)
    })
    .catch((err) => {
      console.log(user)
      console.log('Error logging in user: ', err)
    })
  },

  createNewBand (band, context) {
    context.$http.post(API_URL + '/api/band/createNewBand', band)
    .then((user) => {
      console.log('User logged in')
      console.log(band)
      this.band.added = true
      console.log('ifsuccess: ' + this.user.authenticated)
    })
    .catch((err) => {
      console.log(band)
      console.log('Band did NOT added: ', err)
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
