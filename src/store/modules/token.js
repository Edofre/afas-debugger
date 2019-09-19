import * as types from '../types'
import axios from 'axios'

const state = {
  token: null,
  tokenConnection: {
    status: types.STATUS_INIT,
    message: null,
    success: false
  }
}

const getters = {
  token: (state) => {
    return state.token
  },
  tokenConnection: (state) => {
    return state.tokenConnection
  }
}

const mutations = {
  [types.MUTATE_TOKEN]: (state, token) => {
    state.token = token
  },
  [types.MUTATE_TOKEN_CONNECTION]: (state, tokenConnection) => {
    state.tokenConnection = tokenConnection
  },
  [types.MUTATE_TOKEN_CONNECTION_SUCCESS]: (state, success) => {
    state.tokenConnection.success = success
  },
  [types.MUTATE_TOKEN_CONNECTION_STATUS]: (state, status) => {
    state.tokenConnection.status = status
  },
  [types.MUTATE_TOKEN_CONNECTION_MESSAGE]: (state, message) => {
    state.tokenConnection.message = message
  }
}

const actions = {
  [types.LOAD_TOKEN]: ({ commit }, token) => {
    commit(types.MUTATE_TOKEN, token)
  },
  [types.CLEAR_TOKEN]: ({ commit }, token) => {
    localStorage.removeItem('afas_token')
    commit(types.MUTATE_TOKEN, null)
  },
  [types.SAVE_TOKEN]: ({ commit }, token) => {
    commit(types.MUTATE_TOKEN, token)
    localStorage.setItem('afas_token', JSON.stringify(token))

    // Remove connection details
    commit(types.MUTATE_TOKEN_CONNECTION, {
      status: types.STATUS_INIT,
      message: null,
      success: false
    })
  },
  [types.TEST_CONNECTION]: ({ commit, dispatch }, token) => {
    commit(types.MUTATE_TOKEN_CONNECTION, {
      status: types.STATUS_LOADING,
      message: null,
      success: false
    })

    const encodedToken = btoa(token.token)
    const authorizationHeader = `AfasToken ${encodedToken}`

    // TODO, test/acceptance
    const url = `https://${token.id}.resttest.afas.online/profitrestservices/metainfo`

    axios
      .get(url, {
        headers: {
          'Authorization': authorizationHeader
        }
      })
      .then(res => {
        commit(types.MUTATE_TOKEN_CONNECTION_SUCCESS, true)
        commit(types.MUTATE_TOKEN_CONNECTION_MESSAGE, res.data)
      })
      .catch(error => {
        commit(types.MUTATE_TOKEN_CONNECTION_SUCCESS, false)
        commit(types.MUTATE_TOKEN_CONNECTION_MESSAGE, error)
      })
      .finally(() => {
        commit(types.MUTATE_TOKEN_CONNECTION_STATUS, types.STATUS_FINISHED)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
