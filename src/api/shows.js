import axios from 'axios'
import { API_URL } from '../../config/constants'

export default {
  getShowsList (context) {
    return new Promise((resolve, reject) => {
      axios.get(API_URL + '/api/show/getShowsForUser/1000/0')
        .then((result) => {
          console.log('api/shows: ', result)
          return resolve(result.data)
        })
        .catch(err => reject(err))
    })
  },

  getShowInfo (id, context) {
    return new Promise((resolve, reject) => {
      axios.get(API_URL + '/api/shows/' + id)
        .then((result) => {
          return resolve(result.data)
        })
        .catch(err => reject(err))
    })
  },

  createShow (show, context) {
    return new Promise((resolve, reject) => {
      axios.post(API_URL + '/api/show/createNewShow', show)
        .then((result) => {
          return resolve(result.data)
        })
        .catch(err => reject(err))
    })
  },

  deleteShow (id, context) {
    return new Promise((resolve, reject) => {
      axios.delete(API_URL + '/api/show/deleteShow/' + id)
        .then((result) => {
          return resolve(result.data)
        })
        .catch(err => reject(err))
    })
  }

}
