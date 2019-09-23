import * as types from '../types'
import axios from 'axios'

import createAfasUrl from './../helpers/createAfasUrl'

const state = {
  getConnectors: [],
  updateConnectors: []
}

const getters = {
  getConnectors: (state) => {
    return state.getConnectors
  },
  updateConnectors: (state) => {
    return state.updateConnectors
  }
}

const mutations = {
  [types.MUTATE_GET_CONNECTORS]: (state, getConnectors) => {
    state.getConnectors = getConnectors
  },
  [types.MUTATE_UPDATE_CONNECTORS]: (state, updateConnectors) => {
    state.updateConnectors = updateConnectors
  }
}

const actions = {
  [types.LOAD_GET_CONNECTORS]: ({ commit, dispatch }, token) => {
    const encodedToken = btoa(token.token)
    const authorizationHeader = `AfasToken ${encodedToken}`

    // TODO, test/acceptance
    const url = createAfasUrl(token, 'metainfo')

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
        console.log('Cannot retrieve getconnectors because of the following error:')
        console.log(error)
      })
      .finally(() => {
        console.log('finally')
      })
  },
  [types.LOAD_UPDATE_CONNECTORS]: ({ commit, dispatch }, token) => {
    const encodedToken = btoa(token.token)
    const authorizationHeader = `AfasToken ${encodedToken}`
    const environment = token.environment

    // TODO, test/acceptance
    const url = `https://${token.id}.${environment}.afas.online/profitrestservices/metainfo`

    axios
      .get(url, {
        headers: {
          'Authorization': authorizationHeader
        }
      })
      .then(res => {
        commit(types.MUTATE_UPDATE_CONNECTORS, res.data.updateConnectors)
      })
      .catch(error => {
        console.log('Cannot retrieve updateconnectors because of the following error:')
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
