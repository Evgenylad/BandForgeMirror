import * as types from '../mutation-types'
const localStorage = window.localStorage

const state = {
  active_band_id: null,
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
  },

  [types.SET_USER] (state, user) {
    for (let key in state) {
      if (state[key] === user[key]) state[key] = user[key]
    }
    localStorage.setItem('token', user.token)
  },

  [types.SET_AUTHENTICATION] (state, authorized) {
    console.log('changing authorization to:', authorized)
    state.authenticated = authorized
  }
}

export default {
  state,
  mutations
}
