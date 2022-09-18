const Roles = {
  Owner: 'owner',
  // Controller: 'controller',
  // Issuer: 'issuer',
  // Revoker: 'revoker',
}

const roleOptions = Object.keys(Roles).map(key =>({
  label: key,
  value: key.toLocaleLowerCase()
}))

const state = {
  Roles: Roles,
  roleOptions: roleOptions,
  selectedRole: Roles.Owner
}

const mutations = {
  setSelectedRole (state, role) {
    state.selectedRole = role
  },
}

const actions = {
  setSelectedRole ({ commit }, role) {
    commit('setSelectedRole', role)
  },
}

const getters = {
  selectedRole (state) {
    return state.selectedRole
  },
  Roles (state) {
    return state.Roles
  },
  roleOptions (state) {
    return state.roleOptions
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}