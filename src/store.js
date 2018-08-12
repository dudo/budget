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
      { name: 'rent', value: -1500, type: 'bank' },
      { name: 'car', value: -350, type: 'bank' },
      { name: 'insurance', value: -12, type: 'bank' },
      { name: 'groceries', value: -400, type: 'cc' },
      { name: 'netflix', value: -14, type: 'cc' },
      { name: 'phone', value: -150, type: 'cc' },
      { name: 'misc shopping', value: -200, type: 'cc' },
    ],
    assets: [
    // {name: 'name4', value: 10000, monthlyRevenueType: 0, monthlyRevenueValue: 1000,},
    // {name: 'name6', value: 100000, monthlyRevenueType: 1, monthlyRevenueValue: 0.15,}
    ],
    liabilities: [
      {
        name: 'credit card', value: -4000, monthlyObligationType: 0, monthlyObligationValue: -1000,
      },
      {
        name: 'student loans', value: -8000, monthlyObligationType: 0, monthlyObligationValue: -400,
      },
    ],
  },
  mutations: {

  },
  actions: {

  },
});
