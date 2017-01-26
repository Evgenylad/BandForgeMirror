import * as types from '../mutation-types'

const state = {
  activeBandPopupVisible: false,
  addBandPopupVisible: false,
  addContactPopupVisible: false,
  addInventoryPopupVisible: false,
  addShowPopupVisible: false,
  createTourPopupVisible: false,
  deleteTourPopupVisible: false,
  inviteFriendPopupVisible: false,
  inviteUserPopupVisible: false,
  reportIssuePopupVisible: false,
  tourControlsPopupVisible: false,
  tourId: null
}

const mutations = {
  [types.REPORT_ISSUE] (state) {
    console.log(state.reportIssuePopupVisible)
    if (state.reportIssuePopupVisible) {
      state.reportIssuePopupVisible = false
    } else {
      state.reportIssuePopupVisible = true
    }
  },

  [types.INVITE_FRIEND] (state) {
    console.log(state.inviteFriendPopupVisible)
    if (state.inviteFriendPopupVisible) {
      state.inviteFriendPopupVisible = false
    } else {
      state.inviteFriendPopupVisible = true
    }
  },

  [types.CREATE_TOUR_POPUP] (state) {
    console.log(state.createTourPopupVisible)
    if (state.createTourPopupVisible) {
      state.createTourPopupVisible = false
    } else {
      state.createTourPopupVisible = true
    }
  },

  [types.ADD_BAND_POPUP] (state) {
    console.log(state.addBandPopupVisible)
    if (state.addBandPopupVisible) {
      state.addBandPopupVisible = false
    } else {
      state.addBandPopupVisible = true
    }
  },

  [types.ADD_SHOW_POPUP] (state) {
    console.log(state.addShowPopupVisible)
    if (state.addShowPopupVisible) {
      state.addShowPopupVisible = false
    } else {
      state.addShowPopupVisible = true
    }
  },

  [types.ADD_INVENTORY_POPUP] (state) {
    console.log(state.addInventoryPopupVisible)
    if (state.addInventoryPopupVisible) {
      state.addInventoryPopupVisible = false
    } else {
      state.addInventoryPopupVisible = true
    }
  },

  [types.ADD_CONTACT_POPUP] (state) {
    console.log(state.addContactPopupVisible)
    if (state.addContactPopupVisible) {
      state.addContactPopupVisible = false
    } else {
      state.addContactPopupVisible = true
    }
  },

  [types.TOUR_CONTROLS] (state) {
    console.log(state.tourControlsPopupVisible)
    if (state.tourControlsPopupVisible) {
      state.tourControlsPopupVisible = false
    } else {
      state.tourControlsPopupVisible = true
    }
  },

  [types.TOUR_DELETE] (state, tourId) {
    state.tourId = tourId
    console.log(state.deleteTourPopupVisible)
    if (state.deleteTourPopupVisible) {
      state.deleteTourPopupVisible = false
    } else {
      state.deleteTourPopupVisible = true
    }
  },

  [types.INVITE_USER] (state) {
    console.log(state.inviteUserPopupVisible)
    if (state.inviteUserPopupVisible) {
      state.inviteUserPopupVisible = false
    } else {
      state.inviteUserPopupVisible = true
    }
  },

  [types.ACTIVE_BAND] (state) {
    if (state.activeBandPopup) {
      state.activeBandPopupVisible = false
    } else {
      state.activeBandPopupVisible = true
    }
  }

}

export default {
  state,
  mutations
}
