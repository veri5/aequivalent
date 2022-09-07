import { createStore } from 'vuex'
import veriUser from './modules/veri/user'
import veriCompany from './modules/veri/company'
import credentials from './modules/veri/credentials'

import aeqUser from './modules/aeq/user'
import aeqCompany from './modules/aeq/company'
import requests from './modules/aeq/requests'

import ttpUser from './modules/ttp/user'
import ttpCompany from './modules/ttp/company'
import elements from './modules/ttp/elements'
import verida from './modules/vda/verida'

export default createStore({
  modules: {
    ttp: {
      namespaced: true,
      modules: {
        user: ttpUser,
        company: ttpCompany,
        verida,
        elements
      }
    },
    aeq: {
      namespaced: true,
      modules: {
        user: aeqUser,
        company: aeqCompany,
        verida,
        requests
      }
    },
    veri: {
      namespaced: true,
      modules: {
        user: veriUser,
        company: veriCompany,
        verida,
        credentials
      }
    }
  }
})
