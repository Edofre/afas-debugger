import * as types from '../types'
import axios from 'axios'

const state = {
  version: null
}

const getters = {
  version: (state) => {
    return state.version
  }
}

const mutations = {
  [types.MUTATE_VERSION]: (state, version) => {
    state.version = version
  }
}

const actions = {
  [types.LOAD_VERSION]: ({ commit, dispatch }, token) => {

    const encodedToken = btoa(token.token)
    const authorizationHeader = `AfasToken ${encodedToken}`

    // TODO, test/acceptance
    const url = `https://${token.id}.rest.afas.online/profitrestservices/profitversion`

    axios
      .get(url, {
        headers: {
          'Authorization': authorizationHeader
        }
      })
      .then(res => {
        commit(types.MUTATE_VERSION, res.data)
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