import Vue from 'vue'
import Vuex from 'vuex'

import token from './modules/token'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    token
  }
})
