import { API_URL } from '../../config/constants'
import { router } from '../router'
import axios from 'axios'

export default {
  getUser (context) {
    return new Promise((resolve, reject) => {
      axios
        .get(API_URL + '/api/user/')
        .then(result => {
          console.log(result.data)
          return resolve(result.data.user)
        })
        .catch((err) => console.log('Error getting user ', err))
    })
  },

  loginUser (user, context) {
    return new Promise((resolve, reject) => {
      axios
        .post(API_URL + '/user/login', user)
        .then(result => {
          console.log(result)
          resolve(result.data.user)
        })
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
      'x-access-token ': window.localStorage.getItem('token')
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
