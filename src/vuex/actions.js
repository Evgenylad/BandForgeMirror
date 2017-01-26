import * as types from './mutation-types'
import { router } from '../router'
import userRoute from '../api/user'

export const loginUser = ({ commit }, credentials) => {
  userRoute.loginUser(credentials).then(user => {
    commit(types.SET_AUTHENTICATION, true)
    commit(types.SET_USER, user)
    router.push('/index/shows')
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

export const reportIssue = ({ commit }) => {
  commit(types.REPORT_ISSUE)
}

export const inviteFriend = ({ commit }) => {
  commit(types.INVITE_FRIEND)
}

export const createTourPopup = ({ commit }) => {
  commit(types.CREATE_TOUR_POPUP)
}

export const addShowPopup = ({ commit }) => {
  commit(types.ADD_SHOW_POPUP)
}

export const addInventoryPopup = ({ commit }) => {
  commit(types.ADD_INVENTORY_POPUP)
}

export const addBandPopup = ({ commit }) => {
  commit(types.ADD_BAND_POPUP)
}

export const addContactPopup = ({ commit }) => {
  commit(types.ADD_CONTACT_POPUP)
}

export const tourControlsModal = ({ commit }) => {
  commit(types.TOUR_CONTROLS)
}

export const deleteTour = ({ commit }, tourId) => {
  commit(types.TOUR_DELETE, tourId)
}

export const inviteUser = ({ commit }) => {
  commit(types.INVITE_USER)
}

export const getBandById = ({ commit }, bandName) => {
  commit(types.GET_BAND_BY_ID, bandName)
}
