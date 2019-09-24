import * as types from '../types'
import axios from 'axios'

import createAfasUrl from './../helpers/createAfasUrl'

const state = {
  getConnectors: [],
  loadingGetConnectors: false,
  getConnectorMetaInfo: [],
  loadingGetConnectorMetaInfo: false,
  updateConnectors: [],
  loadingUpdateConnectors: false
}

const getters = {
  getConnectors: (state) => {
    return state.getConnectors
  },
  loadingGetConnectors: (state) => {
    return state.loadingGetConnectors
  },
  getConnectorMetaInfo() {
    return state.getConnectorMetaInfo
  },
  loadingGetConnectorMetaInfo() {
    return state.loadingGetConnectorMetaInfo
  },
  updateConnectors: (state) => {
    return state.updateConnectors
  },
  loadingUpdateConnectors: (state) => {
    return state.loadingUpdateConnectors
  }
}

const mutations = {
  [types.MUTATE_GET_CONNECTORS]: (state, getConnectors) => {
    state.getConnectors = getConnectors
  },
  [types.MUTATE_LOADING_GET_CONNECTORS]: (state, loadingGetConnectors) => {
    state.loadingGetConnectors = loadingGetConnectors
  },
  [types.MUTATE_GET_CONNECTOR_META_INFO]: (state, getConnectorMetaInfo) => {
    state.getConnectorMetaInfo = getConnectorMetaInfo
  },
  [types.MUTATE_LOADING_GET_CONNECTOR_META_INFO]: (state, loadingGetConnectorMetaInfo) => {
    state.loadingGetConnectorMetaInfo = loadingGetConnectorMetaInfo
  },
  [types.MUTATE_UPDATE_CONNECTORS]: (state, updateConnectors) => {
    state.updateConnectors = updateConnectors
  },
  [types.MUTATE_LOADING_UPDATE_CONNECTORS]: (state, loadingUpdateConnectors) => {
    state.loadingUpdateConnectors = loadingUpdateConnectors
  }
}

const actions = {
  [types.LOAD_GET_CONNECTORS]: ({ commit, dispatch }, token) => {
    commit(types.MUTATE_LOADING_GET_CONNECTORS, true)

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
        commit(types.MUTATE_GET_CONNECTORS, res.data.getConnectors)
      })
      .catch(error => {
        console.log('Cannot retrieve getconnectors because of the following error:')
        console.log(error)
      })
      .finally(() => {
        commit(types.MUTATE_LOADING_GET_CONNECTORS, false)
      })
  },
  [types.LOAD_GET_CONNECTOR_META_INFO]: ({ commit, dispatch }, data) => {
    commit(types.MUTATE_LOADING_GET_CONNECTOR_META_INFO, true)

    const token = data.token
    const getConnector = data.getConnector

    const encodedToken = btoa(token.token)
    const authorizationHeader = `AfasToken ${encodedToken}`
    const url = createAfasUrl(token, 'metainfo/get/' + getConnector.id)

    axios
      .get(url, {
        headers: {
          'Authorization': authorizationHeader
        }
      })
      .then(res => {
        commit(types.MUTATE_GET_CONNECTOR_META_INFO, res.data)
      })
      .catch(error => {
        console.log('Cannot retrieve metainfo because of the following error:')
        console.log(error)
      })
      .finally(() => {
        commit(types.MUTATE_LOADING_GET_CONNECTOR_META_INFO, false)
      })
  },
  [types.LOAD_UPDATE_CONNECTORS]: ({ commit, dispatch }, token) => {
    commit(types.MUTATE_LOADING_UPDATE_CONNECTORS, false)

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
        console.log('Cannot retrieve updateconnectors because of the following error:')
        console.log(error)
      })
      .finally(() => {
        commit(types.MUTATE_LOADING_UPDATE_CONNECTORS, true)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
