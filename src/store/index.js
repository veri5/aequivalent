import { createStore } from 'vuex'

import acmeUser from './modules/acme/user'
import acmeCompany from './modules/acme/company'
import acmeCredentials from './modules/acme/credentials'
import acmeRequests from './modules/acme/requests'

import aequivalentUser from './modules/aequivalent/user'
import aequivalentCompany from './modules/aequivalent/company'
import aequivalentRequests from './modules/aequivalent/requests'

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
    acme: {
      namespaced: true,
      modules: {
        user: acmeUser,
        company: acmeCompany,
        credentials: acmeCredentials,
        requests: acmeRequests,
        verida
      }
    },
    aequivalent: {
      namespaced: true,
      modules: {
        user: aequivalentUser,
        company: aequivalentCompany,
        requests: aequivalentRequests,
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
    verifive: {
      namespaced: true,
      modules: {
        user: verifiveUser,
        company: verifiveCompany,
        verida,
        elements,
        toolbar
      }
    }
  }
})
