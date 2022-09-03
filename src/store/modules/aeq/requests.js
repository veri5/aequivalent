const Statuses = {
  processing: 'Processing',
  rejected: 'Rejected',
  issued: 'Issued',
}

const tableData = [{
  type: 'University Diploma',
  requester: 'John Doe',
  status: Statuses.processing
}]

const typeOptions = [
  {
    value: 'university_diploma',
    label: 'University diploma - Aequivalent - aequivalent.ch',
    upload: true,
    disabled: false,
  },
  {
    value: 'fake_university_diploma',
    label: 'University diploma - Aequivalent - aequivalent.com',
    upload: true,
    disabled: false
  },
  {
    value: 'credit_report',
    label: 'Credit report - Experian - experian.com',
    upload: false,
    disabled: false
  },
  {
    value: 'score_report',
    label: 'Score report - Equifax - equifax.com',
    upload: false,
    disabled: false
  },
  {
    value: 'pink_slip',
    label: 'eSafety (or Pink slip) - NRMA - nrma.com.au',
    upload: false,
    disabled: false
  }
]

const entities = [
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    type: 'University Diploma',
    element: 'university_diploma',
    name: 'Aequivalent',
    url: 'aequivalent.ch',
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    type: 'University Diploma (fake)',
    element: 'university_diploma_fake',
    name: 'Aequivalent',
    url: 'aequivalent.com',
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    type: 'Credit Report',
    element: 'credit_report',
    name: 'Experian',
    url: 'experian.com',
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    type: 'Score Report',
    element: 'score_report',
    name: 'Equifax',
    url: 'equifax.com',
  },
  {
    did: 'did:vda:0x37ACB36C4D316076F598CBFC1F4F234e3c20e769',
    type: 'eSafety (or Pink Slip)',
    element: 'pink_slip',
    name: 'NRMA',
    url: 'nrma.com.au',
  }
]

const state = {
  tableData: tableData,
  typeOptions: typeOptions,
  isModalVisible: false,
  currentRow: null
}

const mutations = {
  setIsModalVisible (state, status) {
    state.isModalVisible = status
  },
  confirmIssuance (state, request) {
    const entity = entities.find(({ element }) => element == request.element)
    const row = {
      type: entity.type,
      issuer: entity.name,
      expiry: '',
      status: Statuses.issued
    }
    state.tableData.push(row)
  },
  setCurrentRow (state, row) {
    state.currentRow = row
  },
  removeCurrentRow (state) {
    state.tableData.splice(state.tableData.indexOf(state.currentRow), 1)
    state.currentRow = null
  }
}

const actions = {
  viewCurrentRow ({ commit }) {
    commit('setIsModalVisible', true)
  },
  closeModal ({ commit }) {
    commit('setIsModalVisible', false)
  },
  confirmIssuance ({ commit }, request) {
    commit('confirmIssuance', request)
  },
  setCurrentRow ({ commit }, row) {
    commit('setCurrentRow', row)
  },
  removeCurrentRow ({ commit }) {
    commit('removeCurrentRow')
  },
  clearSelection ({ commit }) {
    commit('setCurrentRow', null)
  },
}

const getters = {
  isModalVisible (state) {
    return state.isModalVisible === true
  },
  currentRow (state) {
    return state.currentRow
  },
  isRowSelected (state) {
    return state.currentRow != null
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}