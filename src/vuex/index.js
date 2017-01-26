import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import bands from './modules/bands'
import contacts from './modules/contacts'
import merch from './modules/merch'
import modals from './modules/modals'
import onload from './modules/onload'
import shows from './modules/shows'
import tours from './modules/tours'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    bands,
    contacts,
    merch,
    modals,
    onload,
    shows,
    tours,
    user
  }
})
