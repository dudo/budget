<template>
  <div class='calculator wrapper'>
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
      <Totals
        :liability-obligations="liabilityObligations"
        :asset-revenue="assetRevenue"
        :credit-card-obligations="creditCardObligations" />
    </div>
  </div>
</template>

<script>
import Section from '@/components/calculator/Section.vue';
import Totals from '@/components/calculator/Totals.vue';
import { mapState } from 'vuex';

export default {
  name: 'Calculator',
  components: {
    Section,
    Totals,
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
        removable: false,
      };
    },
    assetIncome() {
      return {
        name: 'Revenue from Assets',
        value: this.assetRevenue,
        removable: false,
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
        .reduce((a, b) => a - b, 0);
    },
    creditCardObligations() {
      return this.expenses
        .filter(x => x.type === 'cc')
        .reduce((acc, x) => acc - x.value, 0);
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
          dataKey: 'expenses-bank',
          entries: this.expenses
            .filter(x => x.type === 'bank')
            .concat([this.liabilityExpense]),
        },
        {
          title: 'Credit Card Expenses',
          dataKey: 'expenses-cc',
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
@media (min-width: 1000px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

h2, h3 {
  text-align: center;
}

.column {
  width: 50%;
  margin: 10px auto;
  float: left;
}
</style>
