import { API_URL } from '../../config/constants'
import { router } from '../main'

let localStorage = window.localStorage

export default {
  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  band: {
    added: false
  },

  member: {
    added: false
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
    context.$http.post(API_URL + '/user/login', user)
    .then((user) => {
      console.log('User logged in')

      localStorage.setItem('token', user.body.token)
      this.user.authenticated = true
      this.band.added = true
      this.member.added = true
      this.member.added = true

      router.push('/dashboard')
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
      localStorage.setItem('token', user.body.token)
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

  checkAuth () {
    var jwt = localStorage.getItem('token')
    if (jwt) {
      this.user.authenticated = true
      console.log(router)
      console.log('AUTH true')
    } else {
      this.user.authenticated = false
      console.log('AUTH false')
    }
  },

  logoutUser (context) {
    context.$http.get(API_URL + '/user/logout')
    .then(() => {
      console.log('user logged out')
      localStorage.removeItem('token')
      this.user.authenticated = false
      router.push('/')
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
