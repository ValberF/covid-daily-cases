import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cases: [],
    country: ''
  },
  getters: {
  },
  mutations: {
    setCases(state, payload) {
      state.cases = payload
    },
    setCountry(state, payload) {
      state.country = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
