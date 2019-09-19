import Vue from 'vue'
import Vuex from 'vuex'

import afas from './modules/afas'
import token from './modules/token'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    afas,
    token
  }
})
