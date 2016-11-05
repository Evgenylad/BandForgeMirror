import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import shows from './modules/shows'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    shows,
    user
  },
  strict: debug
})
/*
state: {
  shows: [],
  activeBandId: '',
  emailValid: false
},
mutations: {
  addActiveBandId: (state, bandId) => {
    state.activeBandId = bandId
  }
}
*/
