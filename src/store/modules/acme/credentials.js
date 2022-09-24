// - Mock data
import { credentials as mockCredentials } from "./mockdata.json"
///

const Statuses = {
  Correct: 'correct',
  Incorrect: 'incorrect',
  Valid: 'valid',
  Invalid: 'invalid',
  Unknown: 'unknown'
}

const state = {
  credentials: [],
  isVerifiveCredentialModalVisible: false,
  isViewCredentialModalVisible: false,
  selectedCredential: null
}

const mutations = {
  setIsVerifiveCredentialModalVisible (state, status) {
    state.isVerifiveCredentialModalVisible = status
  },
  setIsViewCredentialModalVisible (state, status) {
    state.isViewCredentialModalVisible = status
  },
  addNewCredential (state, credential) {
    state.credentials.push(credential)
  },
  verifiveSelectedCredential (state) {
    state.credentials = [
      ...state.credentials.filter(({ uid }) => state.selectedCredential.uid !== uid),
      Object.assign({}, { ...state.selectedCredential }, { correct: Statuses.Correct, valid: Statuses.Valid })
    ]
    state.selectedCredential = null
  },
  setSelectedCredential (state, credential) {
    state.selectedCredential = credential
  }
}

const actions = {
  addNewCredential ({ commit }, credential) {
    commit('addNewCredential', credential)
  },
  verifiveSelectedCredential ({ commit }) {
    commit('verifiveSelectedCredential')
  },
  setSelectedCredential ({ commit }, credential) {
    commit('setSelectedCredential', credential)
  },
  clearSelectedCredential ({ commit }) {
    commit('setSelectedCredential', null)
  },
  showVerifiveCredentialModal ({ commit }) {
    commit('setIsVerifiveCredentialModalVisible', true)
  },
  closeVerifiveCredentialModal ({ commit }) {
    commit('setIsVerifiveCredentialModalVisible', false)
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
  isVerifiveCredentialModalVisible (state) {
    return state.isVerifiveCredentialModalVisible === true
  },
  isViewCredentialModalVisible (state) {
    return state.isViewCredentialModalVisible === true
  },
  selectedCredential (state) {
    return state.selectedCredential
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