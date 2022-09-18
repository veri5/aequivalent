
// - Mock data
const mockTableData = [
  {
    type: 'Passport',
    requester: 'John Doe',
    status: 'Rejected'
  },
  {
    type: 'Criminal Records',
    requester: 'John Doe',
    status: 'Approved'
  }
]
///

const Statuses = {
  ureview: 'Under Review',
  rejected: 'Rejected',
  approved: 'Approved',
}

const state = {
  tableData: mockTableData,
  isModalVisible: false,
  isViewModalVisible: false,
  selected: null
}

const mutations = {
  setIsViewModalVisible (state, status) {
    state.isViewModalVisible = status
  },
  setSelected (state, row) {
    state.selected = row
  },
  removeSelected (state) {
    state.tableData.splice(state.tableData.indexOf(state.selected), 1)
    state.selected = null
  }
}

const actions = {
  setSelected ({ commit }, row) {
    commit('setSelected', row)
  },
  remove ({ commit }) {
    commit('removeSelected')
  },
  clear ({ commit }) {
    commit('setSelected', null)
  },
  showViewModal ({ commit }) {
    commit('setIsViewModalVisible', true)
  },
  closeViewModal ({ commit }) {
    commit('setIsViewModalVisible', false)
  },
}

const getters = {
  isViewModalVisible (state) {
    return state.isViewModalVisible === true
  },
  selected (state) {
    return state.selected
  },
  statuses (state) {
    return Statuses
  }
}

// Helpers
const randomProperty = (obj) => {
  var keys = Object.keys(obj);
  return obj[keys[ keys.length * Math.random() << 0]];
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}