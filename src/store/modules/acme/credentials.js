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
  verifiveSelectedCredential (state, valid) {
    state.credentials = [
      ...state.credentials.filter(({ uid }) => state.selectedCredential.uid !== uid),
      Object.assign({}, { ...state.selectedCredential }, { correct: Statuses.Correct, valid })
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
  async verifiveSelectedCredential ({ commit, rootGetters }) {
    const elementsNamespace = 'verifive'
    const elements = rootGetters[`${elementsNamespace}/elements/elements`]
    const ElementsStatuses = rootGetters[`${elementsNamespace}/elements/Statuses`]
    const isValid = elements.some(({ name, parent, status }) => 
      state.selectedCredential.element === `${parent}.${name}` && 
      ElementsStatuses.Retired !== status
    )
    
    const valid = isValid ? Statuses.Valid : Statuses.Invalid
    commit('verifiveSelectedCredential', valid)

    return isValid
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