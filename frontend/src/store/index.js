import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cases: [],
    country: "",
    variants: [],
    globalDate: "",
    flagAccumulated: false,
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
    setGlobalDate(state, payload) {
      state.globalDate = payload;
    },
    setFlagAccumulated(state, payload) {
      state.flagAccumulated = payload;
    },
  },
  actions: {},
  modules: {},
});
