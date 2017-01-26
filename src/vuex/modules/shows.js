import api from '../../api/shows'
import * as types from '../mutation-types'

const state = {
  shows: [],
  success: false,
  loading: false
}

const getters = {
  shows: (state) => state.shows
}

const actions = {
  createShow ({commit}, show) {
    commit(types.CREATE_SHOW_REQUEST)
    api.createShow(show)
      .then(() => commit(types.CREATE_SHOW_SUCCESS))
      .catch(() => commit(types.CREATE_SHOW_FAILURE))
  },

  getShowInfo ({commit}) {
    api.getShowInfo()
      .then((info) => {
        commit(types.RECEIVE_SHOW_INFO, {info})
      })
  },

  deleteShow ({commit}) {
    api.deleteShow()
      .then(() => commit(types.DELETE_SHOW))
  }
}

const mutations = {

  [types.CREATE_SHOW_REQUEST] (state) {
    state.loading = true
    state.success = false
  },

  [types.CREATE_SHOW_FAILURE] (state) {
    state.loading = false
    state.success = false
  },

  [types.CREATE_SHOW_SUCCESS] (state) {
    state.loading = false
    state.success = true
  }
}

export default {
  actions,
  getters,
  state,
  mutations
}
