import Vue from 'vue'
import Vuex from 'vuex'

import afas from './modules/afas'
import getConnectors from './modules/get-connectors'
import updateConnectors from './modules/update-connectors'
import token from './modules/token'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    afas,
    getConnectors,
    updateConnectors,
    token
  }
})
