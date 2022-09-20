// - Mock data
import { elements as mockElements } from "./mockdata.json"
///

const Statuses = {
  Valid: 'Valid',
  Retired: 'Retired'
}

const state = {
  elements: mockElements,
  isNewElementModalVisible: false,
  isViewElementModalVisible: false,
  selectedElement: null
}

const mutations = {
  setIsNewElementModalVisible (state, status) {
    state.isNewElementModalVisible = status
  },
  setIsViewElementModalVisible (state, status) {
    state.isViewElementModalVisible = status
  },
  confirmNewElement (state, element) {
    state.elements.push(element)
  },
  setSelectedElement (state, element) {
    state.selectedElement = element
  },
  retireSelectedElement (state, commit) {
    const [now] = (new Date()).toISOString().split('T');
    
    state.elements = state.elements.map(element => {
      if(state.selectedElement.name === element.name)
        return Object.assign({}, { ...element}, { validUntil: now, status: Statuses.Retired })
      return element
    })
    state.selectedElement = null
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
  setSelectedElement ({ commit }, element) {
    commit('setSelectedElement', element)
  },
  retireSelectedElement ({ commit }) {
    commit('retireSelectedElement')
  },
  clearSelectedElement ({ commit }) {
    commit('setSelectedElement', null)
  },
  showViewElementModal ({ commit }) {
    commit('setIsViewElementModalVisible', true)
  },
  closeViewElementModal ({ commit }) {
    commit('setIsViewElementModalVisible', false)
  }
}

const getters = {
  elements(state) {
    return state.elements
  },
  elementOptions (state) {
    return []
  },
  isNewElementModalVisible (state) {
    return state.isNewElementModalVisible === true
  },
  isViewElementModalVisible (state) {
    return state.isViewElementModalVisible === true
  },
  selectedElement (state) {
    return state.selectedElement
  },
  Statuses (state) {
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