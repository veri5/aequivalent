const Statuses = {
  accepted: 'Accepted',
  pending: 'Pending',
  issued: 'Issued'
}

const tableData = [
  {
    type: 'University Diploma',
    issuer: 'Aequivalent - aequivalent.ch',
    expiry: '2018-03-04',
    status: Statuses.issued
  },
  {
    type: 'University Diploma',
    issuer: 'Aequivalent - aequivalent.com',
    expiry: '2022-07-28',
    status: Statuses.accepted

  },
  {
    type: 'Credit Report',
    issuer: 'Experian - experian.com',
    expiry: '',
    status: Statuses.pending
  },
  {
    type: 'Score Report',
    issuer: 'Equifax - equifax.com',
    expiry: '',
    status: Statuses.pending
  },
  {
    type: 'eSafety (or Pink slip)',
    issuer: 'NRMA - nrma.com.au',
    expiry: '',
    status: Statuses.pending
  }
]

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
    disabled: true
  },
  {
    value: 'pink_slip',
    label: 'eSafety (or Pink slip) - NRMA - nrma.com.au',
    upload: false,
    disabled: true
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
  setCurrentRow (state, row) {
    state.currentRow = row
  },
  removeCurrentRow (state) {
    state.tableData.splice(state.tableData.indexOf(state.currentRow), 1)
    state.currentRow = null
  }
}

const actions = {
  newRequest ({ commit }) {
    commit('setIsModalVisible', true)
  },
  closeModal ({ commit }) {
    commit('setIsModalVisible', false)
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