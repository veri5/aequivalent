const initProfile = { 
  name: 'Micha Roon',
  did: 'did:vda:0x123...4567',
  avatar: 'micha_roon.jpeg',
  description: '',
  country: ''
}

const state = {
  profile: initProfile,
  isConnected: false,
}

const mutations = {
  setProfile (state, profile) {
    state.profile = Object.assign(state.profile, profile);
  },
  setIsConnected (state, status) {
    state.isConnected = status
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

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}