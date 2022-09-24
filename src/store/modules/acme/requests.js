// - Mock data
import { issuers } from "./mockdata.json"
///

const Statuses = {
  UnderReview: 'under review',
  Rejected: 'rejected',
  Issued: 'issued'
}

const state = {
  isNewRequestModalVisible: false,
  isViewRequestModalVisible: false,
  selectedRequest: null
}

const mutations = {
  setIsNewRequestModalVisible (state, status) {
    state.isNewRequestModalVisible = status
  },
  setIsViewRequestModalVisible (state, status) {
    state.isViewRequestModalVisible = status
  },
  setSelectedRequest (state, credential) {
    state.selectedRequest = credential
  }
}

const actions = {
  setSelectedRequest ({ commit }, credential) {
    commit('setSelectedRequest', credential)
  },
  clearSelectedRequest ({ commit }) {
    commit('setSelectedRequest', null)
  },
  showNewRequestModal ({ commit }) {
    commit('setIsNewRequestModalVisible', true)
  },
  closeNewRequestModal ({ commit }) {
    commit('setIsNewRequestModalVisible', false)
  },
  showViewRequestModal ({ commit }) {
    commit('setIsViewRequestModalVisible', true)
  },
  closeViewRequestModal ({ commit }) {
    commit('setIsViewRequestModalVisible', false)
  }
}

const getters = {
  requests(state, getters, rootState, rootGetters) {
    const aequivalentRequests = rootGetters['aequivalent/requests/requests']
    const fedpolRequests = rootGetters['fedpol/requests/requests']
    
    return [...aequivalentRequests, ...fedpolRequests]
  },
  isNewRequestModalVisible (state) {
    return state.isNewRequestModalVisible === true
  },
  isViewRequestModalVisible (state) {
    return state.isViewRequestModalVisible === true
  },
  selectedRequest (state) {
    return state.selectedRequest
  },
  issuers (state) {
    return issuers
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