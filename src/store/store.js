import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './types'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    tokenDetails: {
      id: null,
      environment: 'test',
      token: null
    },
  },
  getters: {
    tokenDetails: (state) => {
      return state.tokenDetails
    },
    id: (state) => {
      return state.tokenDetails.id
    },
    environment: (state) => {
      return state.tokenDetails.environment
    },
    token: (state) => {
      return state.tokenDetails.token
    },
  },
  mutations: {
    [types.MUTATE_TOKEN_DETAILS]: (state, tokenDetails) => {
      state.tokenDetails.tokenDetails = tokenDetails
    },
    [types.MUTATE_AFAS_ID]: (state, id) => {
      state.tokenDetails.id = id
    },
    [types.MUTATE_ENVIRONMENT]: (state, environment) => {
      state.tokenDetails.environment = environment
    },
    [types.MUTATE_TOKEN]: (state, token) => {
      state.tokenDetails.token = token
    }
  },
  actions: {
    [types.LOAD_TOKEN_DETAILS]: ({ commit }) => {
      let tokenDetails = JSON.parse(localStorage.getItem('tokenDetails'))
      console.log(tokenDetails)

      commit(types.MUTATE_TOKEN_DETAILS, tokenDetails)
    },
    [types.SAVE_TOKEN_DETAILS]: ({ commit }, tokenDetails) => {
      commit(types.MUTATE_TOKEN_DETAILS, tokenDetails)
      localStorage.setItem('tokenDetails', JSON.stringify(tokenDetails))
    },
  }
})
