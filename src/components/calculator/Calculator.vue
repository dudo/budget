<template>
  <div class='calculator'>
    <div class='wrapper'>
      <div class='column'>
        <Section
          v-for="section in incomeStatement"
          v-bind="section"
          :key="section.dataKey" />
      </div>
      <div class='column'>
        <Section
          v-for="section in balanceSheet"
          v-bind="section"
          :key="section.dataKey" />
        <div>cashflow: {{ cashFlow }}</div>
        <div>dscr: {{ dscr }}</div>
        <div>months of debt remaining: {{ monthsOfDebtRemaining }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Section from '@/components/calculator/Section.vue';
import { mapState } from 'vuex';

export default {
  name: 'Calculator',
  components: {
    Section,
  },
  methods: {

  },
  computed: {
    balanceSheetEnum() {
      return Object.freeze({ dollars: 0, percent: 1 });
    },
    liabilityExpense() {
      return {
        name: 'Liability Obligations',
        value: Math.min(this.liabilityObligations, this.creditCardObligations),
        type: 'bank',
      };
    },
    assetIncome() {
      return {
        name: 'Revenue from Assets',
        value: this.assetRevenue,
      };
    },
    assetRevenue() {
      const values = [];
      this.assets.forEach((x) => {
        switch (x.monthlyRevenueType) {
          case this.balanceSheetEnum.dollars:
            values.push(x.monthlyRevenueValue);
            break;
          case this.balanceSheetEnum.percent:
            values.push(x.monthlyRevenueValue * x.value);
            break;
          default:
            values.push(0);
        }
      });
      return values
        .reduce((a, b) => a + b, 0);
    },
    liabilityObligations() {
      const values = [];
      this.liabilities.forEach((x) => {
        switch (x.monthlyObligationType) {
          case this.balanceSheetEnum.dollars:
            values.push(x.monthlyObligationValue);
            break;
          case this.balanceSheetEnum.percent:
            values.push(x.monthlyObligationValue * x.value);
            break;
          default:
            values.push(0);
        }
      });
      return values
        .reduce((a, b) => a + b, 0);
    },
    creditCardObligations() {
      return this.expenses
        .filter(x => x.type === 'cc')
        .reduce((acc, x) => acc + x.value, 0);
    },
    totals() {
      return {
        income: this.incomes
          .reduce((acc, x) => acc + x.value, 0) + this.assetRevenue,
        expensesBank: this.expenses
          .filter(x => x.type === 'bank')
          .reduce((acc, x) => acc + x.value, 0) + this.liabilityObligations,
        expensesCc: this.expenses
          .filter(x => x.type === 'cc')
          .reduce((acc, x) => acc + x.value, 0),
        assets: this.assets
          .reduce((acc, x) => acc + x.value, 0),
        liabilities: this.liabilities
          .reduce((acc, x) => acc + x.value, 0),
      };
    },
    cashFlow() {
      return this.totals.income + this.totals.expensesBank;
    },
    dscr() {
      return this.totals.income / -this.totals.expensesBank;
    },
    monthsOfDebtRemaining() {
      return this.totals.liabilities / (this.liabilityObligations - this.creditCardObligations);
    },
    incomeStatement() {
      return [
        {
          title: 'Income',
          dataKey: 'incomes',
          entries: this.incomes
            .concat([this.assetIncome]),
        },
        {
          title: 'Bank Expenses',
          dataKey: 'expensesBank',
          entries: this.expenses
            .filter(x => x.type === 'bank')
            .concat([this.liabilityExpense]),
        },
        {
          title: 'Credit Card Expenses',
          dataKey: 'expensesCc',
          entries: this.expenses
            .filter(x => x.type === 'cc'),
        },
      ];
    },
    balanceSheet() {
      return [
        {
          title: 'Assets',
          dataKey: 'assets',
          entries: this.assets,
        },
        {
          title: 'Liabilities',
          dataKey: 'liabilities',
          entries: this.liabilities,
        },
      ];
    },
    ...mapState([
      'incomes',
      'expenses',
      'assets',
      'liabilities',
    ]),
  },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr;
}
@media (min-width: 1000px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
.column {
  width: 50%;
  margin: 10px auto;
  float: left;
}
</style>
