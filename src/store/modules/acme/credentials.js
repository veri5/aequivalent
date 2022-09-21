// - Mock data
import { issuers, credentials as mockCredentials } from "./mockdata.json"
///

const Statuses = {
  UnderReview: 'Under Review',
  Valid: 'Valid',
  NotValid: 'Not Valid',
  Rejected: 'Rejected',
  Approved: 'Approved'
}

const state = {
  credentials: [],
  isNewCredentialModalVisible: false,
  isViewCredentialModalVisible: false,
  selectedCredential: null
}

const mutations = {
  setIsNewCredentialModalVisible (state, status) {
    state.isNewCredentialModalVisible = status
  },
  setIsViewCredentialModalVisible (state, status) {
    state.isViewCredentialModalVisible = status
  },
  addNewCredential (state, credential) {
    state.credentials.push(credential)
  },
  setSelectedCredential (state, credential) {
    state.selectedCredential = credential
  }
}

const actions = {
  addNewCredential ({ commit }, credential) {
    commit('addNewCredential', credential)
  },
  setSelectedCredential ({ commit }, credential) {
    commit('setSelectedCredential', credential)
  },
  clearSelectedCredential ({ commit }) {
    commit('setSelectedCredential', null)
  },
  showNewCredentialModal ({ commit }) {
    commit('setIsNewCredentialModalVisible', true)
  },
  closeNewCredentialModal ({ commit }) {
    commit('setIsNewCredentialModalVisible', false)
  },
  showViewCredentialModal ({ commit }) {
    commit('setIsViewCredentialModalVisible', true)
  },
  closeViewCredentialModal ({ commit }) {
    commit('setIsViewCredentialModalVisible', false)
  }
}

const getters = {
  credentials(state, getters, rootState, rootGetters) {
    const aequivalentRequests = rootGetters['aequivalent/requests/requests']
    const fedpolRequests = rootGetters['fedpol/requests/requests']
    
    return [...aequivalentRequests, ...fedpolRequests]
  },
  isNewCredentialModalVisible (state) {
    return state.isNewCredentialModalVisible === true
  },
  isViewCredentialModalVisible (state) {
    return state.isViewCredentialModalVisible === true
  },
  selectedCredential (state) {
    return state.selectedCredential
  },
  issuers (state) {
    return issuers
  },
  Statuses (state) {
    return Statuses
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}