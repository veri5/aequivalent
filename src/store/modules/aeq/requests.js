const Statuses = {
  ureview: 'Under review',
  rejected: 'Rejected',
  approved: 'Approved',
}

const tableData = [
  {
    type: 'University diploma',
    requester: 'John Doe',
    status: Statuses.approved
  },
  {
    type: 'University diploma',
    requester: 'Pablo Buitrago',
    status: Statuses.ureview
  },
  {
    type: 'University diploma',
    requester: 'Micha Roon',
    status: Statuses.rejected
  }
]

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

const state = {
  tableData: [],
  typeOptions: typeOptions,
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