import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentView: 'Signup'
  },
  mutations: {
    changeCurrentModal: (state, currentView) => {
      state.currentView = currentView
    }
  }
})
