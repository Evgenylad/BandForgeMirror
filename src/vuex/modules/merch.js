import api from '../../api/merch'
import * as types from '../mutation-types'

const state = {
  merch: [],
  success: false,
  loading: false
}

const actions = {
  addInventory ({commit}, item) {
    commit(types.ADD_INVENTORY_REQUEST, item)
    api.addInventory(item)
      .then(() => commit(types.ADD_INVENTORY_SUCCESS))
      .catch(() => commit(types.ADD_INVENTORY_FAILURE))
  }
}

const mutations = {
  [types.ADD_INVENTORY_REQUEST] (state) {
    state.loading = true
    state.success = false
  },

  [types.ADD_INVENTORY_FAILURE] (state) {
    state.loading = false
    state.success = false
  },

  [types.ADD_INVENTORY_SUCCESS] (state, { item }) {
    state.merch = item
    state.loading = false
    state.success = true
  }
}

export default {
  state, mutations, actions
}
