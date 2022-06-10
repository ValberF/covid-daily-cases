import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cases: [],
    country: "",
    variants: [],
  },
  getters: {},
  mutations: {
    setCases(state, payload) {
      state.cases = payload;
    },
    setCountry(state, payload) {
      state.country = payload;
    },
    setVariants(state, payload) {
      state.variants = payload;
    },
  },
  actions: {},
  modules: {},
});
