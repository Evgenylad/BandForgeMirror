import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginPopupVisible: false,
    signUpPopupVisible: true,
    onBoardingPopupVisible: false,
    addMemberPopupVisible: false
  },
  mutations: {
    showLoginPopup: state => {
      if (state.loginPopupVisible) {
        state.loginPopupVisible = true
      } else {
        state.loginPopupVisible = true
        state.signUpPopupVisible = false
      }
      return {
        state: {
          signUpPopupVisible: state.signUpPopupVisible,
          loginPopupVisible: state.loginPopupVisible}
      }
    },
    showSignUpPopup: state => {
      if (state.signUpPopupVisible) {
        state.signUpPopupVisible = true
      } else {
        state.signUpPopupVisible = true
        state.loginPopupVisible = false
      }
      return {
        state: {
          signUpPopupVisible: state.signUpPopupVisible,
          loginPopupVisible: state.loginPopupVisible}
      }
    },
    showOnBoardingPopup: state => {
      if (state.signUpPopupVisible) {
        state.onBoardingPopupVisible = true
        state.signUpPopupVisible = false
      }
      return {
        state: {
          onBoardingPopupVisible: state.onBoardingPopupVisible,
          addMemberPopupVisible: state.signUpPopupVisible}
      }
    },
    showAddMemberPopup: state => {
      if (state.onBoardingPopupVisible) {
        state.onBoardingPopupVisible = false
        state.addMemberPopupVisible = true
      } else {
        state.addMemberPopupVisible = false
      }
      return {
        state: {
          onBoardingPopupVisible: state.onBoardingPopupVisible,
          addMemberPopupVisible: state.addMemberPopupVisible}
      }
    }
  }
})
