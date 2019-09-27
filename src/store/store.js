import Vue from 'vue'
import Vuex from 'vuex'

import afas from './modules/afas'
import connectors from './modules/connectors'
import modal from './modules/modal'
import token from './modules/token'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    afas,
    connectors,
    modal,
    token
  }
})
