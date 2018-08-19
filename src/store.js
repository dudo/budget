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
    incomes: [{ name: 'paycheck', value: 6000 }],
    expenses: [
      { name: 'rent', value: 1500, type: 'bank' },
      { name: 'car', value: 350, type: 'bank' },
      { name: 'insurance', value: 12, type: 'bank' },
      { name: 'groceries', value: 400, type: 'cc' },
      { name: 'netflix', value: 14, type: 'cc' },
      { name: 'phone', value: 150, type: 'cc' },
      { name: 'misc shopping', value: 200, type: 'cc' },
    ],
    assets: [
    // {name: 'name4', value: 10000, monthlyRevenueType: 0, monthlyRevenueValue: 1000,},
    // {name: 'name6', value: 100000, monthlyRevenueType: 1, monthlyRevenueValue: 0.15,}
    ],
    liabilities: [
      {
        name: 'credit card', value: 4000, monthlyObligationType: 0, monthlyObligationValue: 1000,
      },
      {
        name: 'student loans', value: 8000, monthlyObligationType: 0, monthlyObligationValue: 400,
      },
    ],
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
