import { API_URL } from '../../config/constants'
import { router } from '../main'

let localStorage = window.localStorage

export default {
  // User object will let us check authentication status
  user: {
    authenticated: false,
    userId: ''
  },

  band: {
    added: false,
    activeBandId: ''
  },

  member: {
    added: false
  },

  getUser (context) {
    context.axios.get(API_URL + '/user')
    .then((user) => {
      console.log('user is: ', user)
    })
    .catch((err) => {
      console.log('Error checking user ', err)
    })
  },

  loginUser (user, context) {
    context.axios.post(API_URL + '/user/login', user)
    .then((user) => {
      localStorage.setItem('token', user.body.token)
      this.user.authenticated = true
      this.user.userId = user.body.user.user_id
      this.band.activeBandId = user.body.user.active_band_id
      this.band.added = true
      this.member.added = true
      this.member.added = true
      console.log('user is: ', this.user.userId)
      console.log('user is: ', this.band.activeBandId)
      router.push('/dashboard/shows')
    })
    .catch((err) => {
      console.log('Error logging in user: ', err)
    })
  },

  signup (user, context) {
    context.axios.post(API_URL + '/user/signup', user)
    .then((user) => {
      console.log('User logged in')
      console.log(user.status)
      localStorage.setItem('token', user.body.token)
      this.user.authenticated = true
      console.log(this.band.added)
      console.log('ifsuccess: ' + this.user.authenticated)
      router.push('onboarding')
    })
    .catch((err) => {
      console.log(user)
      console.log('Error signing up user: ', err)
      // add error handling for error signing up user
      router.push('signup')
    })
  },

  createNewBand (band, context) {
    context.axios.post(API_URL + '/api/band/createNewBand', band)
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
    context.axios.get(API_URL + '/user/logout')
    .then(() => {
      console.log('user logged out')
      localStorage.removeItem('token')
      this.user.authenticated = false
      router.push('/')
    })
  },

  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }

  /* // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  login (context, creds, redirect) {
    context.axios.post(API_URL + '/user', creds, (data) => {
      this.user.authenticated = true
    }).error((err) => {
      context.error = err
    })
  } */

}
