import api from '../../api/bands'
import * as types from '../mutation-types'

const state = {
  bands: [],
  success: false,
  loading: false
}

const actions = {
  createNewBand ({commit}, band) {
    commit(types.CREATE_BAND_REQUEST, band)
    api.createNewBand(band)
      .then(() => commit(types.CREATE_BAND_SUCCESS))
      .catch(() => commit(types.CREATE_BAND_FAILURE))
  }
}

const mutations = {
  [types.CREATE_BAND_REQUEST] (state) {
    state.loading = true
    state.success = false
  },

  [types.CREATE_BAND_FAILURE] (state) {
    state.loading = false
    state.success = false
  },

  [types.CREATE_BAND_SUCCESS] (state, { band }) {
    state.band = band
    state.loading = false
    state.success = true
  }
}

export default {
  actions,
  state,
  mutations
}
