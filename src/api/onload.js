import axios from 'axios'
import { API_URL } from '../../config/constants'

export default {
  getToursList () {
    return new Promise((resolve, reject) => {
      let bandId = window.localStorage.getItem('active_band_id')
      let token = window.localStorage.getItem('token')
      axios.get(API_URL + '/api/bands/' + bandId + '/tours/', {
        headers: {'x-access-token': token}
      })
        .then((result) => {
          return resolve(result.data)
        })
        .catch(err => reject(err))
    })
  },

  getInventory () {
    return new Promise((resolve, reject) => {
      let token = window.localStorage.getItem('token')
      axios.get(API_URL + '/api/merch/listProductForUser/1000/0', {
        headers: {'x-access-token': token}
      })
        .then((response) => {
          let items = response.data
          return resolve(items)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  },

  getContacts () {
    return new Promise((resolve, reject) => {
      let token = window.localStorage.getItem('token')
      axios.get(API_URL + '/api/contact/get_contacts_for_user/1000/0', {
        headers: {'x-access-token': token}
      })
        .then((response) => {
          console.log(response.data)
          let contacts = response.data
          return resolve(contacts)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  },

  getBands () {
    return new Promise((resolve, reject) => {
      let token = window.localStorage.getItem('token')
      axios.get(API_URL + '/api/band/getBandsForUser/1000/0', {
        headers: {'x-access-token': token}
      })
        .then((response) => {
          console.log(response.data)
          let bands = response.data
          return resolve(bands)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  },

  getBandInfo (id, context) {
    return new Promise((resolve, reject) => {
      let token = window.localStorage.getItem('token')
      let bandId = window.localStorage.getItem('active_band_id')
      axios.get(API_URL + '/api/band/getBandInfoById/' + bandId, {
        headers: {'x-access-token': token}
      })
        .then((response) => {
          console.log(response.data)
          let band = response.data
          return resolve(band)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  },

  getShows () {
    return new Promise((resolve, reject) => {
      let token = window.localStorage.getItem('token')
      axios.get(API_URL + '/api/show/getAllShows/1000/0', {
        headers: {'x-access-token': token}
      })
        .then((response) => {
          console.log(response.data)
          let shows = response.data
          return resolve(shows)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }
}
