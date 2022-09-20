// - Mock data
import { requests as mockRequests } from "./mockdata.json"
///

const Statuses = {
  UnderReview: 'Under Review',
  Rejected: 'Rejected',
  Approved: 'Approved',
}

const state = {
  requests: mockRequests,
  isReviewRequestModalVisible: false,
  isViewRequestModalVisible: false,
  selectedRequest: null
}

const mutations = {
  setIsReviewRequestModalVisible (state, status) {
    state.isReviewRequestModalVisible = status
  },
  setIsViewRequestModalVisible (state, status) {
    state.isViewRequestModalVisible = status
  },
  setSelectedRequest (state, request) {
    state.selectedRequest = request
  },
  approveSelectedRequest (state) {
    state.selectedRequest.status = Statuses.Approved
  },
  rejectSelectedRequest (state) {
    state.selectedRequest.status = Statuses.Rejected
  }
}

const actions = {
  setSelectedRequest ({ commit }, request) {
    commit('setSelectedRequest', request)
  },
  approveSelectedRequest({ commit }) {
    commit('approveSelectedRequest')
  },
  rejectSelectedRequest({ commit }) {
    commit('rejectSelectedRequest')
  },
  clearSelectedRequest ({ commit }) {
    commit('setSelectedRequest', null)
  },
  showReviewRequestModal ({ commit }) {
    commit('setIsReviewRequestModalVisible', true)
  },
  closeReviewRequestModal ({ commit }) {
    commit('setIsReviewRequestModalVisible', false)
  },
  showViewRequestModal ({ commit }) {
    commit('setIsViewRequestModalVisible', true)
  },
  closeViewRequestModal ({ commit }) {
    commit('setIsViewRequestModalVisible', false)
  }
}

const getters = {
  requests(state) {
    return state.requests
  },
  isReviewRequestModalVisible (state) {
    return state.isReviewRequestModalVisible === true
  },
  isViewRequestModalVisible (state) {
    return state.isViewRequestModalVisible === true
  },
  selectedRequest (state) {
    return state.selectedRequest
  },
  Statuses (state) {
    return Statuses
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}