import axios from 'axios'
import { API_URL } from '../../config/constants'

const token = window.localStorage.getItem('token')
const headers = {
  headers: {'x-access-token': token}
}

export default {
  addInventory (item) {
    return new Promise((resolve, reject) => {
      axios.post(API_URL + '/api/merch/createProductBasic/', item, headers)
        .then((response) => {
          return resolve(response.data)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  },

  decrementProduct (variantId, amount) {
    return new Promise((resolve, reject) => {
      axios.put(API_URL + '/api/merch/dec_onhand_by/' + variantId + '/' + amount, headers)
        .then((result) => {
          return resolve(result.data)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  },

  incrementProduct (variantId, amount) {
    return new Promise((resolve, reject) => {
      axios.put(API_URL + '/api/merch/inc_onhand_by/' + variantId + '/' + amount, headers)
        .then((result) => {
          return resolve(result.data)
        })
        .catch((err) => {
          return reject(err)
        })
    })
  },

  // updateItem () {
  //
  // },

  activateProduct (id) {
    return new Promise((resolve, reject) => {
      axios.put(API_URL + '/api/merch/reactProd/' + id + '/true', headers)
      .then((result) => {
        return resolve(result.data)
      })
      .catch((err) => {
        return reject(err)
      })
    })
  },

  deactivateProduct (id) {
    return new Promise((resolve, reject) => {
      axios.put(API_URL + '/api/merch/deactProd/' + id + '/true', headers)
      .then((result) => {
        return resolve(result.data)
      })
      .catch((err) => {
        return reject(err)
      })
    })
  },

  activateVariant (id) {
    return new Promise((resolve, reject) => {
      axios.put(API_URL + '/api/merch/reactVariant/' + id, headers)
      .then((result) => {
        return resolve(result.data)
      })
      .catch((err) => {
        return reject(err)
      })
    })
  },

  deactivateVariant (id) {
    return new Promise((resolve, reject) => {
      axios.put(API_URL + '/api/merch/deactVariant/' + id, headers)
      .then((result) => {
        return resolve(result.data)
      })
      .catch((err) => {
        return reject(err)
      })
    })
  }
}
