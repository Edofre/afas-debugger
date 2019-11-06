import * as types from '../types'
import axios from 'axios'

import createAfasUrl from './../helpers/createAfasUrl'

const state = {
  getConnectors: [],
  loadingGetConnectors: false,
  getConnectorMetaInfo: [],
  loadingGetConnectorMetaInfo: false,
  responseGetConnector: null,
  executingGetConnector: false,
  // Requests
  skip: 0,
  take: 100,
  sortingFields: [],
  filters: [
    { removable: false, field: null, operator: null, value: null }
  ]
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
  },
  skip() {
    return state.skip
  },
  take() {
    return state.take
  },
  sortingFields() {
    return state.sortingFields
  },
  filters() {
    return state.filters
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
  },
  [types.MUTATE_SKIP]: (state, skip) => {
    state.skip = skip
  },
  [types.MUTATE_TAKE]: (state, take) => {
    state.take = take
  },
  [types.MUTATE_SORTING_FIELDS]: (state, sortingFields) => {
    state.sortingFields = sortingFields
  },
  [types.MUTATE_ADD_SORTING_FIELD]: (state, sortingField) => {
    let sortingFieldObject = this.fields.find(x => x.id === sortingField)
    sortingFieldObject.direction = 'asc'
    this.sortingFields.push(sortingFieldObject)
  },
  [types.MUTATE_REMOVE_SORTING_FIELD]: (state, sortingField) => {
    state.sortations = state.sortations.filter(function(x) {
      return x.id !== sortingField.id
    })
  },
  [types.MUTATE_FILTERS]: (state, filters) => {
    state.filters = filters
  },
  [types.MUTATE_ADD_FILTER]: (state, filter) => {
    state.filters.push(filter)
  },
  [types.MUTATE_REMOVE_FILTER]: (state, filter) => {
    state.filters.splice(state.filters.indexOf(filter), 1)
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
    const url = createAfasUrl(token, 'connectors/' + getConnector.id + '?skip=' + data.skip + '&take=' + data.take, data.sortingFields, data.filters)

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
  },
  [types.RESET_GET_CONNECTOR_REQUEST_DATA]: ({ commit }) => {
    commit(types.MUTATE_SKIP, 0)
    commit(types.MUTATE_TAKE, 100)
    commit(types.MUTATE_SORTING_FIELDS, [{ removable: false, field: null, operator: null, value: null }])
    commit(types.MUTATE_FILTERS, [])

  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
