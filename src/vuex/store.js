import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginPopupVisible: true,
    signUpPopupVisible: true
  },
  mutations: {
    showLoginPopup: state => {
      if (state.loginPopupVisible) {
        state.loginPopupVisible = false
      } else {
        state.loginPopupVisible = true
      }
      return state.loginPopupVisible
    },
    showSignUpPopup: state => {
      if (state.signUpPopupVisible) {
        state.signUpPopupVisible = false
      } else {
        state.signUpPopupVisible = true
      }
      return state.signUpPopupVisible
    }
  }
})
