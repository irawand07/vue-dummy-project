import Vue from "vue";
import Vuex from "vuex";
import Auth from './store/Auth'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  plugins: [createPersistedState()],
  actions: {},
  modules: {
    Auth,
  }
});
