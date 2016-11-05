import * as types from './mutation-types'

export const addUserId = ({ commit }, userId) => {
  console.log('in action', userId)
  commit(types.ADD_USER_ID, userId)
}

export const loginUser = ({ commit }, credentials) => {
  commit(types.LOGIN_USER, credentials)
}

export const loginSuccess = ({ commit }, user) => {
  commit(types.SET_USER_ID, user.id)
  commit(types.SET_BAND, user.bandId)
}
