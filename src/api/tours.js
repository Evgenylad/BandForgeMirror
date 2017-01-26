import axios from 'axios'
import { API_URL } from '../../config/constants'

export default {
  createTour (tour) {
    let bandId = window.localStorage.getItem('active_band_id')
    let token = window.localStorage.getItem('token')
    return new Promise((resolve, reject) => {
      axios.post(API_URL + '/api/bands/' + bandId + '/tours/', tour, {
        headers: {'x-access-token': token}
      })
        .then((result) => {
          return resolve(result.data)
        })
        .catch(err => reject(err))
    })
  },

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
  }
}
