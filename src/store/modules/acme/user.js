const initProfile = { 
  name: 'John Doe',
  did: 'did:vda:0x123...4567',
  avatar: 'john_doe.png',
  description: '',
  country: ''
}

const state = {
  profile: initProfile,
  isConnected: true,
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

const getters = {
  isConnected (state) {
    return state.isConnected === 'true'
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