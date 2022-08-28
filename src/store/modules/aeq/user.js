const initProfile = { 
  name: 'Pablo Buitrago',
  did: 'did:vda:0x123...4567',
  avatar: 'pablo_buitrago.jpeg',
  description: '',
  country: '',
  mnemonic: 'canyon hover bronze mask view muscle notice where purchase save shed symbol'
}

const state = {
  profile: initProfile,
  isAuthenticated: false,
  localKey:  '_verida_aeq_is-authenticated'
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