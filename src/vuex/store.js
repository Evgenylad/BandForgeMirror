import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentView: 'Signup',
    shows: [],
    userId: '',
    activeBandId: ''
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
    }
  }
})
