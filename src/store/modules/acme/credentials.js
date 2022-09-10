// - Helpers
const randomProperty = (obj) => {
  var keys = Object.keys(obj);
  return obj[keys[ keys.length * Math.random() << 0]];
}

const elements = [
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    type: 'University Diploma',
    element: 'university_diploma',
    name: 'Aequivalent',
    url: 'https://www.aequivalent.ch',
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    type: 'University Diploma (fake)',
    element: 'university_diploma_fake',
    name: 'Aequivalent',
    url: 'https://www.aequivalent.com',
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    type: 'Credit Report',
    element: 'credit_report',
    name: 'Experian',
    url: 'https://www.experian.com',
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    type: 'Score Report',
    element: 'score_report',
    name: 'Equifax',
    url: 'https://www.equifax.com',
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    type: 'eSafety (or Pink Slip)',
    element: 'pink_slip',
    name: 'NRMA',
    url: 'https://www.nrma.com.au',
  }
]

const tableData = elements.map(element => ({
  type: element.type,
  issuer: element.name,
  url: element.url,
  status: randomProperty({
    revoked: 'Revoked',
    issued: 'Issued',
  })
}))
///

const Statuses = {
  processing: 'Processing',
  revoked: 'Revoked',
  issued: 'Issued',
}

const issuerOptions = [
  {
    value: 'aequivalent',
    label: 'Aequivalent',
  },
  {
    value: 'experian',
    label: 'Experian',
  },
  {
    value: 'equifax',
    label: 'Equifax',
  },
  {
    value: 'nrma',
    label: 'NRMA',
  }
]

const typeOptions = [
  {
    value: 'university_diploma',
    label: 'University diploma',
    upload: true
  },
  {
    value: 'credit_report',
    label: 'Credit report',
    upload: false
  },
  {
    value: 'score_report',
    label: 'Score report',
    upload: false
  },
  {
    value: 'pink_slip',
    label: 'eSafety (or Pink slip)',
    upload: false
  }
]

const state = {
  tableData: [],
  typeOptions: typeOptions,
  issuerOptions: issuerOptions,
  isNewRequestModalVisible: false,
  isViewModalVisible: false,
  selected: null
}

const mutations = {
  setIsNewRequestModalVisible (state, status) {
    state.isNewRequestModalVisible = status
  },
  setIsViewModalVisible (state, status) {
    state.isViewModalVisible = status
  },
  confirmNewRequest (state, request) {
    const element = elements.find(({ element }) => element == request.element)
    const row = {
      type: element.type,
      issuer: element.name,
      url: element.url,
      status: randomProperty(Statuses)
    }
    state.tableData.push(row)
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
  showNewRequestModal ({ commit }) {
    commit('setIsNewRequestModalVisible', true)
  },
  closeNewRequestModal ({ commit }) {
    commit('setIsNewRequestModalVisible', false)
  },
  confirmNewRequest ({ commit }, request) {
    commit('confirmNewRequest', request)
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
  view ({ commit }) {
    commit('setIsViewModalVisible', true)
  },
  showViewModal ({ commit }) {
    commit('setIsViewModalVisible', true)
  },
  closeViewModal ({ commit }) {
    commit('setIsViewModalVisible', false)
  },
}

const getters = {
  isNewRequestModalVisible (state) {
    return state.isNewRequestModalVisible === true
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