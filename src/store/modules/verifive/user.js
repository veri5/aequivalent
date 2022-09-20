const initProfile = { 
  name: 'Micha Roon',
  did: 'did:vda:0x123...4567',
  avatar: 'micha_roon.jpeg',
  description: '',
  country: '',
  mnemonic: 'shiver demand typical energy range absent rug face federal marine fold sauce'
}

const state = {
  profile: initProfile,
  isAuthenticated: true,
  localKey:  '_verida_verifive_is-authenticated'
}

const mutations = {
  setProfile (state, profile) {
    state.profile = Object.assign(state.profile, profile);
  },
  setIsAuthenticated (state, status) {
    state.isAuthenticated = status
    localStorage.setItem(state.localKey, status);
  }
}

const actions = {
  setProfile ({ commit }, profile) {
    commit('setProfile', profile)
  },
  signIn ({ commit }) {
    commit('setIsAuthenticated', true)
  },
  signOut ({ commit }) {
    commit('setProfile', initProfile)
    commit('setIsAuthenticated', false)
  }
}

const getters = {
  isAuthenticated (state) {
    return localStorage.getItem(state.localKey) === 'true'
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}