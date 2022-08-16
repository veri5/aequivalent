const state = {
  profile: { 
    name: 'Micha Roon',
    did: 'did:vda:0x123...4567',
    avatar: 'micha_roon.jpeg'
  },
  isAuthenticated: false,
}

const mutations = {
  setIsAuthenticated (state, status) {
    state.isAuthenticated = status
  }
}

const actions = {
  connect ({ commit }) {
    commit('setIsAuthenticated', true)
  },
  disconnect ({ commit }) {
    commit('setIsAuthenticated', false)
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