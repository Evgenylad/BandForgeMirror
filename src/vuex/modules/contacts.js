import api from '../../api/contacts'
import * as types from '../mutation-types'

const state = {
  contacts: [],
  success: false,
  loading: false
}

const actions = {
  addContact ({commit}, contact) {
    console.log(contact)
    commit(types.ADD_CONTACT_REQUEST, contact)
    api.addContact(contact)
      .then(() => commit(types.ADD_CONTACT_SUCCESS))
      .catch(() => commit(types.ADD_CONTACT_FAILURE))
  }
}

const mutations = {
  [types.ADD_CONTACT_REQUEST] (state) {
    state.loading = true
    state.success = false
  },

  [types.ADD_CONTACT_FAILURE] (state) {
    state.loading = false
    state.success = false
  },

  [types.ADD_CONTACT_SUCCESS] (state, { contact }) {
    state.contacts = contact
    state.loading = false
    state.success = true
  }
}

export default {
  state, mutations, actions
}
