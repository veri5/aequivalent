import { uid } from 'uid';

const state = {}

const mutations = {}

const actions = {
  addNewRequest ({ dispatch }, request) {
    const { type, issuer, element } = request

    const requesterNamespace = 'acme'
    const credential = {
      uid: uid(16),
      type,
      issuer,
      element,
      correct: 'correct',
      valid: 'unknown'
    }
    dispatch(`${requesterNamespace}/credentials/addNewCredential`, credential, { root: true })
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}