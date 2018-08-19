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
    addEntry(state, payload) {
      state[payload.entryType].push(payload.entry);
    },
    removeEntry(state, payload) {
      state[payload.entryType].splice(payload.index, 1);
    },
  },
  actions: {

  },
});


// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     user: null,
//     megaMenuOpen: false
//   },
//   getters: {
//     getUser: state => {
//       return state.user
//     },
//     megaMenuOpen: state => state.megaMenuOpen
//   },
//   mutations: {
//     SET_USER(state, user) {
//       state.user = user
//     },
//     TOGGLE_MENU(state, forceClose) {
//       if (forceClose) state.megaMenuOpen = false
//       else state.megaMenuOpen = !state.megaMenuOpen
//     }
//   },
//   actions: {
//     login({ commit }, user) {
//       commit('SET_USER', user)
//     },
//     toggleMegaMenu({ commit }, forceClose) {
//       commit('TOGGLE_MENU', forceClose)
//     }
//   },
// })

// export default store
