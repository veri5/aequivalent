// - Mock data
import { issuers, credentials as mockCredentials } from "./mockdata.json"
///

const Statuses = {
  Valid: 'Valid',
  Retired: 'Retired',
  UnderReview: 'Under Review'
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
  confirmNewCredential (state, credential) {
    state.credentials.push(credential)
  },
  setSelectedCredential (state, credential) {
    state.selectedCredential = credential
  }
}

const actions = {
  confirmNewCredential ({ commit }, credential) {
    commit('confirmNewCredential', credential)
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
  credentials(state) {
    return state.credentials
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
  Statuses (state) {
    return Statuses
  },
  issuers (state) {
    return issuers
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}