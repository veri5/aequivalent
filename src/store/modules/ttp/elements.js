// - Helpers
const randomProperty = (obj) => {
  var keys = Object.keys(obj);
  return obj[keys[ keys.length * Math.random() << 0]];
}

const elements = [
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    name: 'University Diploma',
    elementId: 'university_diploma',
    owner: 'Aequivalent',
    expiry: '28-07-01',
    url: 'https://www.aequivalent.ch',
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    name: 'University Diploma',
    elementId: 'university_diploma_fake',
    owner: 'Aequivalent',
    expiry: '28-07-01',
    url: 'https://www.aequivalent.com',
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    name: 'Credit Report',
    elementId: 'credit_report',
    owner: 'Experian',
    expiry: '28-07-01',
    url: 'https://www.experian.com',
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    name: 'Score Report',
    elementId: 'score_report',
    owner: 'Equifax',
    expiry: '28-07-01',
    url: 'https://www.equifax.com',
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    name: 'eSafety (or Pink Slip)',
    elementId: 'pink_slip',
    owner: 'NRMA',
    expiry: '28-07-01',
    url: 'https://www.nrma.com.au',
  }
]

const tableData = elements.map(element => ({
  name: element.name,
  owner: element.owner,
  expiry: element.expiry,
  url: element.url,
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
  confirmNewElement (state, request) {
    const element = elements.find(({ elementId }) => elementId == request.elementId)
    const row = {
      name: element.name,
      owner: element.owner,
      expiry: element.expiry,
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