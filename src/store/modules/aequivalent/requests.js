import { uid } from 'uid';
// - Mock data
import { requests as mockRequests } from "./mockdata.json"
///

const Statuses = {
  UnderReview: 'under review',
  Rejected: 'rejected',
  Issued: 'issued'
}

const state = {
  requests: [],
  isReviewRequestModalVisible: false,
  isViewRequestModalVisible: false,
  selectedRequest: null
}

const mutations = {
  addNewRequest (state, request) {
    state.requests.push(request)
  },
  setIsReviewRequestModalVisible (state, status) {
    state.isReviewRequestModalVisible = status
  },
  setIsViewRequestModalVisible (state, status) {
    state.isViewRequestModalVisible = status
  },
  setSelectedRequest (state, request) {
    state.selectedRequest = request
  },
  issueSelectedRequest (state) {
    state.requests = [
      ...state.requests.filter(({ uid }) => state.selectedRequest.uid !== uid),
      Object.assign({}, { ...state.selectedRequest }, { status: Statuses.Issued })
    ]
    state.selectedRequest = null
  },
  rejectSelectedRequest (state) {
    state.requests = [
      ...state.requests.filter(({ uid }) => state.selectedRequest.uid !== uid),
      Object.assign({}, { ...state.selectedRequest }, { status: Statuses.Rejected })
    ]
    state.selectedRequest = null
  }
}

const actions = {
  addNewRequest ({ commit }, request) {
    commit('addNewRequest', request)
  },
  setSelectedRequest ({ commit }, request) {
    commit('setSelectedRequest', request)
  },
  issueSelectedRequest({ commit, state, dispatch }) {
    const { type, issuer } = state.selectedRequest
    const credential = {
      uid: uid(16),
      type,
      issuer,
      correct: 'true',
      valid: 'false'
    }
    dispatch('acme/credentials/addNewCredential', credential, { root: true })

    commit('issueSelectedRequest')
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