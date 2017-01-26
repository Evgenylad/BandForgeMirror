import axios from 'axios'
import { API_URL } from '../../config/constants'

export default {
  createNewBand (band) {
    return new Promise((resolve, reject) => {
      axios.post(API_URL + '/api/band/createNewBand/', band)
        .then((response) => {
          return resolve(response.data)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  }
}
