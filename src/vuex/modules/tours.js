import api from '../../api/tours'
import * as types from '../mutation-types'
const state = {
  tours: [],
  success: false,
  loading: false,
  tourDetails: {}
}

const actions = {
  createTour ({commit}, tour) {
    commit(types.CREATE_TOUR_REQUEST, tour)
    api.createTour(tour)
      .then(() => commit(types.CREATE_TOUR_SUCCESS))
      .catch(() => commit(types.CREATE_TOUR_FAILURE))
  },

  getTourDetails ({commit}, tourId) {
    console.log('getTour tourId: ', tourId)
    commit(types.TOUR_DETAILS, tourId)
    api.getTourDetails(tourId)
      .then(() => commit(types.TOUR_DETAILS))
      .catch(() => commit(types.TOUR_DETAILS_FAILURE))
  },

  getTourList ({commit}) {
    commit(types.FETCH_TOUR_LIST)
    api.getTourList()
      .then(() => commit(types.UPDATE_TOUR_LIST))
      .catch(() => commit(types.FETCH_TOURS_FAILURE))
  }
}

const mutations = {
  [types.TOUR_DETAILS] (state, tourDetails) {
    state.tourDetails = tourDetails
  },

  [types.FETCH_TOUR_LIST] (state, tours) {
    state.tours = tours
  },

  [types.CREATE_TOUR_REQUEST] (state, tour) {
    console.log(tour)
    state.loading = true
    state.success = false
  },

  [types.CREATE_TOUR_FAILURE] (state) {
    state.loading = false
    state.success = false
  },

  [types.CREATE_TOUR_SUCCESS] (state) {
    state.loading = false
    state.success = true
  }
}

export default {
  state, mutations, actions
}
