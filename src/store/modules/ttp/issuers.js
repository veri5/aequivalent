// - Helpers
const elements = [
  {
    label: 'University Diploma',
    name: 'university-diploma'
  },
  {
    label: 'Credit Report',
    name: 'credit-report'
  },
  {
    label: 'Score Report',
    name: 'score-report'
  },
  {
    label: 'eSafety (or Pink Slip)',
    name: 'pink-slip'
  }
]

const issuers = [
  {
    name: 'Aequivalent',
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    element: 'university-diploma',
    expiry: '2028-07-01'
  },
  {
    name: 'Experian',
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    element: 'credit-report',
    expiry: '2028-07-01'
  },
  {
    name: 'Equifax',
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    element: 'score-report',
    expiry: '2028-07-01'
  },
  {
    name: 'NRMA',
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    element: 'pink-slip',
    expiry: '2028-07-01'
  }
]

const tableData = issuers.map(issuer => ({
  name: issuer.name,
  did: issuer.did,
  element: elements.find(({ name }) => name === issuer.element).label,
  expiry: issuer.expiry
}))
///

const elementOptions = elements.map(element => ({
  label: element.label,
  value: element.name
}))

const state = {
  tableData: tableData,
  elementOptions: elementOptions,
  isNewIssuerModalVisible: false,
  isViewModalVisible: false,
  selected: null
}

const mutations = {
  setIsNewIssuerModalVisible (state, status) {
    state.isNewIssuerModalVisible = status
  },
  setIsViewModalVisible (state, status) {
    state.isViewModalVisible = status
  },
  confirmNewIssuer (state, issuer) {
    issuer.element = elements.find(({ name }) => name === issuer.element).label
    state.tableData.push(issuer)
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
  showNewIssuerModal ({ commit }) {
    commit('setIsNewIssuerModalVisible', true)
  },
  closeNewIssuerModal ({ commit }) {
    commit('setIsNewIssuerModalVisible', false)
  },
  confirmNewIssuer ({ commit }, issuer) {
    commit('confirmNewIssuer', issuer)
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
  }
}

const getters = {
  isNewIssuerModalVisible (state) {
    return state.isNewIssuerModalVisible === true
  },
  isViewModalVisible (state) {
    return state.isViewModalVisible === true
  },
  selected (state) {
    return state.selected
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}