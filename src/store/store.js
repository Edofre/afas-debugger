import Vue from 'vue'
import Vuex from 'vuex'

import afas from './modules/afas'
import connectors from './modules/connectors'
import token from './modules/token'

import createAfasUrlPlugin from './plugins/createAfasUrl'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    afas,
    connectors,
    token
  },
  plugins: [createAfasUrlPlugin]
})
