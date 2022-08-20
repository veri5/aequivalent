import { EnvironmentType } from '@verida/client-ts'

const state = {
  logoUrl: 'https://assets.verida.io/verida_login_request_logo_170x170.png',
  environmentType: EnvironmentType.TESTNET,
  veridaTestnetDefaultServer: 'https://db.testnet.verida.io:5002/',
  veridaTestnetDidServer: 'https://dids.testnet.verida.io:5001',
  contextName: 'Verida: Vault'
}

const mutations = {}

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}