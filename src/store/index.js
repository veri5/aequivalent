import { createStore } from 'vuex'
import ttpUser from './modules/ttp/user'
import ttpCompany from './modules/ttp/company'
import aeqUser from './modules/aeq/user'
import aeqCompany from './modules/aeq/company'
import veriUser from './modules/veri/user'
import veriCompany from './modules/veri/company'

export default createStore({
  modules: {
    ttp: {
      namespaced: true,
      modules: {
        user: ttpUser,
        company: ttpCompany
      }
    },
    aeq: {
      namespaced: true,
      modules: {
        user: aeqUser,
        company: aeqCompany
      }
    },
    veri: {
      namespaced: true,
      modules: {
        user: veriUser,
        company: veriCompany
      }
    }
  }
})
