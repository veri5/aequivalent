// - Helpers
const randomProperty = (obj) => {
  var keys = Object.keys(obj);
  return obj[keys[ keys.length * Math.random() << 0]];
}

const elements = [
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    label: 'University Diploma',
    name: 'university_diploma',
    owner: 'Aequivalent',
    expiry: '2028-07-01'
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    label: 'University Diploma',
    name: 'university_diploma_fake',
    owner: 'Aequivalent',
    expiry: '2028-07-01'
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    label: 'Credit Report',
    name: 'credit_report',
    owner: 'Experian',
    expiry: '2028-07-01'
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    label: 'Score Report',
    name: 'score_report',
    owner: 'Equifax',
    expiry: '2028-07-01'
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    label: 'eSafety (or Pink Slip)',
    name: 'pink_slip',
    owner: 'NRMA',
    expiry: '2028-07-01'
  }
]

const tableData = elements.map(element => ({
  name: element.label,
  owner: element.owner,
  did: element.did,
  expiry: element.expiry,
}))
///

const Statuses = {
  processing: 'Processing',
  revoked: 'Revoked',
  legit: 'Legit',
}

const typeOptions = [
  {
    value: 'university_diploma',
    label: 'University Diploma '
  },
  {
    value: 'credit_report',
    label: 'Credit Report'
  },
  {
    value: 'score_report',
    label: 'Score Report'
  },
  {
    value: 'pink_slip',
    label: 'eSafety (or Pink slip) - NRMA'
  }
]

const state = {
  tableData: tableData,
  typeOptions: typeOptions,
  isNewElementModalVisible: false,
  isViewModalVisible: false,
  selected: null
}

const mutations = {
  setIsNewElementModalVisible (state, status) {
    state.isNewElementModalVisible = status
  },
  setIsViewModalVisible (state, status) {
    state.isViewModalVisible = status
  },
  confirmNewElement (state, element) {
    state.tableData.push(element)
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
  showNewElementModal ({ commit }) {
    commit('setIsNewElementModalVisible', true)
  },
  closeNewElementModal ({ commit }) {
    commit('setIsNewElementModalVisible', false)
  },
  confirmNewElement ({ commit }, element) {
    commit('confirmNewElement', element)
  },
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
  isNewElementModalVisible (state) {
    return state.isNewElementModalVisible === true
  },
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

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}