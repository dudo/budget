<template>
  <section>
    <h3>Totals</h3>
    <div class="group">
      <div class="entry total">
        <div>
          <span>cashflow</span>
          <span>
            {{
              cashFlow.toLocaleString('en', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0
              })
            }}
          </span>
        </div>
      </div>
    </div>
    <div class="group">
      <div class="entry total">
        <div>
          <span>dscr</span>
          <span>{{ dscr.toPrecision(3) }}</span>
        </div>
      </div>
    </div>
    <div class="group">
      <div class="entry total">
        <div>
          <span>months of debt remaining</span>
          <span>{{ Math.round(monthsOfDebtRemaining) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Totals',
  props: {
    assetRevenue: {
      type: Number,
      default: 0,
    },
    liabilityObligations: {
      type: Number,
      default: 0,
    },
    creditCardObligations: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    totals() {
      return {
        income: this.incomes
          .reduce((acc, x) => acc + x.value, 0) + this.assetRevenue,
        expensesBank: this.expenses
          .filter(x => x.type === 'bank')
          .reduce((acc, x) => acc - x.value, 0) + this.liabilityObligations,
        expensesCc: this.expenses
          .filter(x => x.type === 'cc')
          .reduce((acc, x) => acc - x.value, 0),
        assets: this.assets
          .reduce((acc, x) => acc + x.value, 0),
        liabilities: this.liabilities
          .reduce((acc, x) => acc - x.value, 0),
      };
    },
    cashFlow() {
      return this.totals.income - this.totals.expensesBank;
    },
    dscr() {
      return this.totals.income / this.totals.expensesBank;
    },
    monthsOfDebtRemaining() {
      return this.totals.liabilities / (this.liabilityObligations - this.creditCardObligations);
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

<style>

</style>
