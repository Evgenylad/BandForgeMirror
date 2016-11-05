import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentView: 'Signup',
    shows: [],
    userId: '',
    activeBandId: '',
    emailValid: false
  },
  mutations: {
    changeCurrentModal: (state, currentView) => {
      state.currentView = currentView
    },
    addActiveBandId: (state, bandId) => {
      state.activeBandId = bandId
    },
    addUserId: (state, userId) => {
      state.userId = userId
    },
    emailValidation: (state, email) => {
      let regExp = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
      if (regExp.test(email)) {
        console.log('true')
        state.emailValid = true
      } else {
        state.emailValid = false
      }
    }
  }
})
