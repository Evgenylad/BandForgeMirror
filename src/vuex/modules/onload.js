import api from '../../api/onload'
import * as types from '../mutation-types'
const state = {
  tours: [],
  contacts: [],
  bands: [],
  merch: [],
  bandInfor: [],
  success: false,
  loading: false,
  toursLoaded: false,
  contactLoaded: false,
  inventoryLoaded: false,
  showsLoaded: false,
  bandsLoades: false
}

const actions = {
  getToursList ({commit}) {
    api.getToursList()
      .then((tours) => {
        commit(types.RECEIVE_TOURS, tours)
      }).catch((err) => {
        console.error('Error receiving tours: ', err)
        commit(types.RECEIVE_TOURS_ERROR)
      })
  },

  getInventory ({commit}) {
    api.getInventory()
      .then((items) => {
        commit(types.RECEIVE_INVENTORY, items)
      })
      .catch((err) => {
        console.error('Error receiving inventory: ', err)
        commit(types.RECEIVE_INVENTORY_ERROR)
      })
  },

  getBands ({commit}) {
    api.getBands()
      .then((bands) => {
        commit(types.RECEIVE_BANDS, bands)
      })
      .catch((err) => {
        console.error('Error receiving bands: ', err)
        commit(types.RECEIVE_BANDS_ERROR)
      })
  },

  getContacts ({commit}) {
    api.getContacts()
      .then((contacts) => {
        commit(types.RECEIVE_CONTACTS, contacts)
      })
      .catch((err) => {
        console.error('Error receiving bands: ', err)
        commit(types.RECEIVE_CONTACTS_ERROR)
      })
  },

  getBandInfo ({commit}) {
    api.getBandInfo()
    .then((band) => {
      commit(types.GET_BAND_INFO, band)
    })
    .catch((err) => {
      console.error('Error receiving bandInfo: ', err)
      commit(types.GET_BAND_INFO)
    })
  },

  getShows ({commit}) {
    api.getShows()
      .then((shows) => {
        commit(types.RECEIVE_SHOWS, shows)
      })
      .catch((err) => {
        console.error('Error receiving bands: ', err)
        commit(types.RECEIVE_SHOWS_ERROR)
      })
  }
}

const mutations = {
  [types.RECEIVE_TOURS] (state, tours) {
    state.tours = tours
    state.toursLoaded = true
    console.log(state.tours)
    console.log(state.toursLoaded)
  },

  [types.RECEIVE_INVENTORY] (state, items) {
    state.items = items
    console.log(state.inventoryLoaded)
  },

  [types.RECEIVE_BANDS] (state, bands) {
    state.bands = bands
    state.bandsLoaded = true
    console.log(state.bandsLoaded)
  },

  [types.RECEIVE_CONTACTS] (state, contacts) {
    state.contacts = contacts
    state.contactsLoaded = true
    console.log(state.contactsLoaded)
    console.log(state.contacts)
  },

  [types.RECEIVE_SHOWS] (state, shows) {
    state.shows = shows
    state.showsLoaded = true
    console.log(state.showsLoaded)
    console.log(state.shows)
  },

  [types.GET_BAND_INFO] (state, band) {
    state.bandInfo = band
  }
}

export default {
  state, mutations, actions
}
