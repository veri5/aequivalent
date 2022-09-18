import { createStore } from 'vuex'

import acmeUser from './modules/acme/user'
import acmeCompany from './modules/acme/company'
import credentials from './modules/acme/credentials'

import aeqUser from './modules/aeq/user'
import aeqCompany from './modules/aeq/company'
import aeqRequests from './modules/aeq/requests'

import fedpolUser from './modules/fedpol/user'
import fedpolCompany from './modules/fedpol/company'
import fedpolRequests from './modules/fedpol/requests'

import verifiveUser from './modules/verifive/user'
import verifiveCompany from './modules/verifive/company'
import elements from './modules/verifive/elements'
import toolbar from './modules/verifive/toolbar'
import verida from './modules/vda/verida'

export default createStore({
  modules: {
    verifive: {
      namespaced: true,
      modules: {
        user: verifiveUser,
        company: verifiveCompany,
        verida,
        elements,
        toolbar
      }
    },
    aeq: {
      namespaced: true,
      modules: {
        user: aeqUser,
        company: aeqCompany,
        requests: aeqRequests,
        verida,
      }
    },
    fedpol: {
      namespaced: true,
      modules: {
        user: fedpolUser,
        company: fedpolCompany,
        requests: fedpolRequests,
        verida,
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
