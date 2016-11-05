import user from '../../api/user'
import * as types from '../mutation-types'

const state = {
  id: '',
  authenticated: false
}

const mutations = {
  [types.LOGIN_USER] (state, credentials) {
    console.log('login user mutations', credentials)
    user.getUser(credentials).then(results => {
      console.log('in user.js', results)
    })
  },

  [types.ADD_USER_ID] (state, userId) {
    console.log('in user', userId)
    state.id = userId
  }
}

export default {
  state,
  mutations
}
