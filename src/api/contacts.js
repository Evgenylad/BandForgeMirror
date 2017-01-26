import axios from 'axios'
import { API_URL } from '../../config/constants'

export default {
  addContact (contact) {
    let token = window.localStorage.getItem('token')
    return new Promise((resolve, reject) => {
      axios.post(API_URL + '/api/contact/create_contact', contact, {
        headers: {'x-access-token': token}
      })
        .then((response) => {
          return resolve(response.data)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }
}
