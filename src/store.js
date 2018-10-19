import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'BudgetCalculator',
  storage: localStorage,
});

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    incomes: [],
    expensesBank: [],
    expensesCC: [],
    assets: [],
    liabilities: [],
  },
  getters: {

  },
  mutations: {
    ADD_ENTRY(state, payload) {
      state[payload.entryType].push(payload.entry);
    },
    UPDATE_ENTRY(state, payload) {
      Vue.set(state[payload.entryType][payload.index], payload.attribute, payload.value);
    },
    REMOVE_ENTRY(state, payload) {
      state[payload.entryType].splice(payload.index, 1);
    },
  },
  actions: {
    addEntry({ commit }, payload) {
      commit('ADD_ENTRY', payload);
    },
    updateEntry({ commit }, payload) {
      commit('UPDATE_ENTRY', payload);
    },
    removeEntry({ commit }, payload) {
      commit('REMOVE_ENTRY', payload);
    },
  },
});
