// - Helpers
const randomProperty = (obj) => {
  var keys = Object.keys(obj);
  return obj[keys[ keys.length * Math.random() << 0]];
}

const entities = [
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

const tableData = entities.map(entity => ({
  element: entity.type,
  entity: entity.name,
  url: entity.url,
  status: randomProperty({
    revoked: 'Revoked',
    legit: 'Legit',
  })
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
    label: 'University diploma - Aequivalent',
    upload: true
  },
  {
    value: 'credit_report',
    label: 'Credit report - Experian',
    upload: false
  },
  {
    value: 'score_report',
    label: 'Score report - Equifax',
    upload: false
  },
  {
    value: 'pink_slip',
    label: 'eSafety (or Pink slip) - NRMA',
    upload: false
  }
]

const state = {
  tableData: tableData,
  typeOptions: typeOptions,
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
    const entity = entities.find(({ element }) => element == request.element)
    const row = {
      type: entity.type,
      issuer: entity.name,
      url: entity.url,
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