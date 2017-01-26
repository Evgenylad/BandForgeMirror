import * as types from '../mutation-types'
const localStorage = window.localStorage

const state = {
  administrator: false,
  first_name: null,
  last_name: null,
  onboarded: false,
  user_id: null,
  authenticated: false
}

const mutations = {
  // this might be incomplete. Need to clear entire store
  [types.LOGOUT_USER] (state) {
    for (let key in state) {
      state[key] = null
    }
    localStorage.removeItem('token')
    localStorage.removeItem('email')
  },

  [types.SET_USER] (state, user) {
    for (let key in state) {
      if (state[key] === user[key]) state[key] = user[key]
    }
    state.active_band_id = user.active_band_id
    localStorage.setItem('email', user.username)
    localStorage.setItem('token', user.token)
    localStorage.setItem('active_band_id', user.active_band_id)
  },

  [types.SET_AUTHENTICATION] (state, authorized) {
    console.log('changing authorization to:', authorized)
    state.authenticated = authorized
  }
}

const actions = {
  loadData ({commit}) {
    commit(types.DATA_LOADED)
  }
}

export default {
  state,
  mutations,
  actions
}
