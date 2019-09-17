import * as types from '../types'
import axios from 'axios'

const state = {
  tokenDetails: null,
  testingConnection: false,
  tokenSuccessfullyConnected: false
}

const getters = {
  tokenDetails: (state) => {
    return state.tokenDetails
  },
  testingConnection: (state) => {
    return state.testingConnection
  },
  tokenSuccessfullyConnected: (state) => {
    return state.tokenSuccessfullyConnected
  }
}

const mutations = {
  [types.MUTATE_TOKEN_DETAILS]: (state, tokenDetails) => {
    state.tokenDetails = tokenDetails
  },
  [types.MUTATE_TESTING_CONNECTION]: (state, token) => {
    state.testingConnection = token
  },
  [types.MUTATE_TOKEN_SUCCESSFULLY_CONNECTED]: (state, token) => {
    state.tokenSuccessfullyConnected = token
  }
}

const actions = {
  [types.LOAD_TOKEN_DETAILS]: ({ commit }, tokenDetails) => {
    commit(types.MUTATE_TOKEN_DETAILS, JSON.parse(tokenDetails))
  },
  [types.CLEAR_TOKEN_DETAILS]: ({ commit }, tokenDetails) => {
    localStorage.removeItem('tokenDetails')
    commit(types.MUTATE_TOKEN_DETAILS, null)
  },
  [types.SAVE_TOKEN_DETAILS]: ({ commit }, tokenDetails) => {
    commit(types.MUTATE_TOKEN_DETAILS, tokenDetails)
    localStorage.setItem('tokenDetails', JSON.stringify(tokenDetails))
  },
  [types.TEST_CONNECTION]: ({ commit, dispatch }, tokenDetails) => {
    commit(types.MUTATE_TESTING_CONNECTION, true)
    commit(types.MUTATE_TOKEN_SUCCESSFULLY_CONNECTED, false)

    const token = btoa(tokenDetails.token)
    const authorizationHeader = `AfasToken ${token}`
    // TODO, test/acceptance
    const url = `https://${tokenDetails.id}.resttest.afas.online/profitrestservices/metainfo`

    axios
      .get(url, {
        headers: {
          'Authorization': authorizationHeader
        }
      })
      .then(res => {
        console.log(res.data)
        commit(types.MUTATE_TOKEN_SUCCESSFULLY_CONNECTED, true)
      })
      .catch(error => {
        console.log(error) // TODO
      })
      .finally(() => {
        commit(types.MUTATE_TESTING_CONNECTION, false)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
