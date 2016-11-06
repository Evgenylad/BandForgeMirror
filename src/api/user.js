import { API_URL } from '../../config/constants'
import { router } from '../main'
import axios from 'axios'

export default {
  getUser (context) {
    return new Promise((resolve, reject) => {
      axios
        .get(API_URL + '/user')
        .then(result => resolve(result.data.user))
        .catch((err) => console.log('Error getting user ', err))
    })
  },

  loginUser (user, context) {
    return new Promise((resolve, reject) => {
      axios
        .post(API_URL + '/user/login', user)
        .then(result => resolve(result.data.user))
        .catch((err) => console.log('Error logging in user: ', err))
    })
  },

  signup (user, context) {
    return new Promise((resolve, reject) => {
      axios
        .post(API_URL + '/user/signup', user)
        .then(result => resolve(result.data.user))
        .catch((err) => {
          console.log('Error signing up user: ', err)
          // add error handling for error signing up user
          router.push('signup')
        })
    })
  },

  createNewBand (band, context) {
    return new Promise((resolve, reject) => {
      axios
        .post(API_URL + '/api/band/createNewBand', band)
        .then(result => resolve(result))
        .catch((err) => {
          console.log(band)
          console.log('Band did NOT added: ', err)
        })
    })
  },

  logoutUser () {
    return new Promise((resolve, reject) => {
      axios
        .get(API_URL + '/user/logout')
        .then(() => resolve(true))
        .catch(err => reject(err))
    })
  },

  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + window.localStorage.getItem('token')
    }
  }

  /* // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  login (context, creds, redirect) {
    axios.post(API_URL + '/user', creds, (data) => {
      this.user.authenticated = true
    }).error((err) => {
      error = err
    })
  } */

}
