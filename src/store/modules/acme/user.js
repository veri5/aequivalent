const initProfile = { 
  name: 'John Doe',
  did: 'did:vda:0x123...4567',
  avatar: 'john_doe.png',
  description: '',
  country: ''
}

const state = {
  profile: initProfile,
  isConnected: false,
  // Wallet detoured
  localKey: '_verida_acme_is-authenticated'
}

const mutations = {
  setProfile (state, profile) {
    state.profile = Object.assign(state.profile, profile);
  },
  setIsConnected (state, status) {
    state.isConnected = status
    localStorage.setItem(state.localKey, status);
  }
}

const actions = {
  setProfile ({ commit }, profile) {
    commit('setProfile', profile)
  },
  connect ({ commit }) {
    commit('setIsConnected', true)
  },
  disconnect ({ commit }) {
    commit('setProfile', initProfile)
    commit('setIsConnected', false)
  }
}

const getters = {
  isConnected (state) {
    // Wallet detoured
    // return state.isConnected === 'true'
    return localStorage.getItem(state.localKey) === 'true'
  },
  profile (state) {
    return state.profile
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}