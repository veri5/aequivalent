import { createStore } from 'vuex'
import acmeUser from './modules/acme/user'
import acmeCompany from './modules/acme/company'
import credentials from './modules/acme/credentials'

import aeqUser from './modules/aeq/user'
import aeqCompany from './modules/aeq/company'
import requests from './modules/aeq/requests'

import verifiveUser from './modules/verifive/user'
import verifiveCompany from './modules/verifive/company'
import issuers from './modules/verifive/issuers'
import verida from './modules/vda/verida'

export default createStore({
  modules: {
    verifive: {
      namespaced: true,
      modules: {
        user: verifiveUser,
        company: verifiveCompany,
        verida,
        issuers
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
    acme: {
      namespaced: true,
      modules: {
        user: acmeUser,
        company: acmeCompany,
        verida,
        credentials
      }
    }
  }
})
