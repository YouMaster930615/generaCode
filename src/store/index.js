import { createStore } from 'vuex'
import home from './modules/home'
import getters from './getter'

export default createStore({
  modules: {
    home
  },
  state: {
    userName: '董小姐'
  },
  actions: {
    changeName ({ commit, state }, params = {}) {
      commit('CHANGENAME', Math.random() * 200)
    }
  },
  mutations: {
    CHANGENAME (state, params) {
      state.userName = params
    }
  },
  getters
})
