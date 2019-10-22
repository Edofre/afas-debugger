import * as types from '../types'
import axios from 'axios'

import createAfasUrl from './../helpers/createAfasUrl'

const state = {
  getConnectors: [],
  loadingGetConnectors: false,
  getConnectorMetaInfo: [],
  loadingGetConnectorMetaInfo: false,
  responseGetConnector: null,
  executingGetConnector: false
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
  responseGetConnector() {
    return state.responseGetConnector
  },
  executingGetConnector() {
    return state.executingGetConnector
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
  [types.MUTATE_RESPONSE_GET_CONNECTOR]: (state, responseGetConnector) => {
    state.responseGetConnector = responseGetConnector
  },
  [types.MUTATE_EXECUTING_GET_CONNECTOR]: (state, executingGetConnector) => {
    state.executingGetConnector = executingGetConnector
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
  [types.EXECUTE_GET_CONNECTOR]: ({ commit, dispatch }, data) => {
    commit(types.MUTATE_EXECUTING_GET_CONNECTOR, true)

    const token = data.token
    const getConnector = data.getConnector

    const encodedToken = btoa(token.token)
    const authorizationHeader = `AfasToken ${encodedToken}`
    const url = createAfasUrl(token, 'connectors/' + getConnector.id + '?skip=' + data.skip + '&take=' + data.take)

    axios
      .get(url, {
        headers: {
          'Authorization': authorizationHeader
        }
      })
      .then(res => {
        commit(types.MUTATE_RESPONSE_GET_CONNECTOR, res.data)
      })
      .catch(error => {
        console.log('Cannot execute GetConnector because of the following error:')
        console.log(error)
      })
      .finally(() => {
        commit(types.MUTATE_EXECUTING_GET_CONNECTOR, false)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
