import * as types from './mutation-types'
import { router } from '../main'
import userRoute from '../api/user'

export const loginUser = ({ commit }, credentials) => {
  userRoute.loginUser(credentials).then(user => {
    commit(types.SET_AUTHENTICATION, true)
    commit(types.SET_USER, user)
    router.push('/dashboard/shows')
  })
}

export const signupUser = ({ commit }, userInfo) => {
  userRoute.signup(userInfo).then(user => {
    console.log('signing up user', user)
    commit(types.SET_AUTHENTICATION, true)
    commit(types.SET_USER, user)
    router.push('onboarding')
  })
}

export const logoutUser = ({ commit }) => {
  userRoute.logoutUser().then(() => {
    commit(types.LOGOUT_USER)
    router.push('/')
  })
}
