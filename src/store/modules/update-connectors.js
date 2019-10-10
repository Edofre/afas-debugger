import * as types from '../types'
import axios from 'axios'

import createAfasUrl from './../helpers/createAfasUrl'

const state = {
  updateConnectors: [],
  loadingUpdateConnectors: false,
  updateConnectorMetaInfo: [],
  loadingUpdateConnectorMetaInfo: false
}

const getters = {
  updateConnectors: (state) => {
    return state.updateConnectors
  },
  loadingUpdateConnectors: (state) => {
    return state.loadingUpdateConnectors
  },
  updateConnectorMetaInfo() {
    return state.updateConnectorMetaInfo
  },
  loadingUpdateConnectorMetaInfo() {
    return state.loadingUpdateConnectorMetaInfo
  }
}

const mutations = {
  [types.MUTATE_UPDATE_CONNECTORS]: (state, updateConnectors) => {
    state.updateConnectors = updateConnectors
  },
  [types.MUTATE_LOADING_UPDATE_CONNECTORS]: (state, loadingUpdateConnectors) => {
    state.loadingUpdateConnectors = loadingUpdateConnectors
  },
  [types.MUTATE_UPDATE_CONNECTOR_META_INFO]: (state, updateConnectorMetaInfo) => {
    state.updateConnectorMetaInfo = updateConnectorMetaInfo
  },
  [types.MUTATE_LOADING_UPDATE_CONNECTOR_META_INFO]: (state, loadingUpdateConnectorMetaInfo) => {
    state.loadingUpdateConnectorMetaInfo = loadingUpdateConnectorMetaInfo
  }
}

const actions = {
  [types.LOAD_UPDATE_CONNECTORS]: ({ commit, dispatch }, token) => {
    commit(types.MUTATE_LOADING_UPDATE_CONNECTORS, true)

    const encodedToken = btoa(token.token)
    const authorizationHeader = `AfasToken ${encodedToken}`
    const url = createAfasUrl(token, 'metainfo')

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
        console.log('Cannot retrieve updateConnectors because of the following error:')
        console.log(error)
      })
      .finally(() => {
        commit(types.MUTATE_LOADING_UPDATE_CONNECTORS, false)
      })
  },
  [types.LOAD_UPDATE_CONNECTOR_META_INFO]: ({ commit, dispatch }, data) => {
    commit(types.MUTATE_LOADING_UPDATE_CONNECTOR_META_INFO, true)

    const token = data.token
    const updateConnector = data.updateConnector

    const encodedToken = btoa(token.token)
    const authorizationHeader = `AfasToken ${encodedToken}`
    const url = createAfasUrl(token, 'metainfo/update/' + updateConnector.id)

    axios
      .get(url, {
        headers: {
          'Authorization': authorizationHeader
        }
      })
      .then(res => {
        commit(types.MUTATE_UPDATE_CONNECTOR_META_INFO, res.data)
      })
      .catch(error => {
        console.log('Cannot retrieve metainfo because of the following error:')
        console.log(error)
      })
      .finally(() => {
        commit(types.MUTATE_LOADING_UPDATE_CONNECTOR_META_INFO, false)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
