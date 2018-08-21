<template>
  <div class='columns'>
    <div class='column'>
      <Section
        v-for="section in incomeStatement"
        v-bind="section"
        :balance-sheet-enum="balanceSheetEnum()"
        :key="section.dataKey" />
    </div>
    <div class='column'>
      <Section
        v-for="section in balanceSheet"
        v-bind="section"
        :balance-sheet-enum="balanceSheetEnum()"
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
    balanceSheetEnum() {
      return Object.freeze({ dollars: 0, percent: 1 });
    },
  },
  computed: {
    liabilityExpense() {
      return {
        name: 'Liability Obligations',
        value: this.liabilityObligations,
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
          case this.balanceSheetEnum().dollars:
            values.push(x.monthlyRevenueValue);
            break;
          case this.balanceSheetEnum().percent:
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
          case this.balanceSheetEnum().dollars:
            values.push(x.monthlyObligationValue);
            break;
          case this.balanceSheetEnum().percent:
            values.push(x.monthlyObligationValue * x.value);
            break;
          default:
            values.push(0);
        }
      });
      return Math.max(values.reduce((a, b) => a + b, 0), this.creditCardObligations);
    },
    creditCardObligations() {
      return this.expensesCC
        .reduce((acc, x) => acc + x.value, 0);
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
          entries: this.expensesBank
            .concat([this.liabilityExpense]),
        },
        {
          title: 'Credit Card Expenses',
          dataKey: 'expensesCC',
          entries: this.expensesCC,
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
      'expensesBank',
      'expensesCC',
      'assets',
      'liabilities',
    ]),
  },
};
</script>

<style scoped>

</style>
