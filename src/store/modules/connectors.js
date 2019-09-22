import * as types from '../types'
import axios from 'axios'

const state = {
  getConnectors: []
}

const getters = {
  getConnectors: (state) => {
    return state.getConnectors
  }
}

const mutations = {
  [types.MUTATE_GET_CONNECTORS]: (state, getConnectors) => {
    state.getConnectors = getConnectors
  }
}

const actions = {
  [types.LOAD_GET_CONNECTORS]: ({ commit, dispatch }, token) => {

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
        commit(types.MUTATE_GET_CONNECTORS, res.data.getConnectors)
      })
      .catch(error => {
        console.log('Cannot retrieve version because of the following error:')
        console.log(error)
      })
      .finally(() => {
        console.log('finally')
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}