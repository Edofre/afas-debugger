import * as types from '../types'

const state = {
  openModal: false
}

const getters = {
  openModal: (state) => {
    return state.openModal
  }
}

const mutations = {
  [types.MUTATE_MODAL_OPEN]: (state, openModal) => {
    state.openModal = openModal
  }
}

const actions = {
  [types.OPEN_MODAL]: ({ commit }) => {
    commit(types.MUTATE_MODAL_OPEN, true)
  },
  [types.CLOSE_MODAL]: ({ commit }) => {
    commit(types.MUTATE_MODAL_OPEN, false)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
