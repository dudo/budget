<template>
  <section>
    <table class="table is-striped is-fullwidth">
      <thead>
        <th>Totals</th>
        <th>Value</th>
      </thead>
      <tbody>
        <tr>
          <td>cashflow</td>
          <td>
            {{
              cashFlow.toLocaleString('en', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0
              })
            }}
          </td>
        </tr>
        <tr>
          <td>dscr</td>
          <td>{{ dscr.toPrecision(3) }}</td>
        </tr>
        <tr>
          <td>months of debt remaining</td>
          <td v-if="monthsOfDebtRemaining < 0">∞</td>
          <td v-else-if="cashFlow < 0">∞</td>
          <td v-else>{{ Math.round(monthsOfDebtRemaining) }}</td>
        </tr>
      </tbody>
    </table>
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
    creditCardObligations: {
      type: Number,
      default: 0,
    },
    liabilityObligations: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    incomeTotal() {
      return this.incomes.reduce((acc, x) => acc + x.value, 0)
        + this.assetRevenue;
    },
    expensesBankTotal() {
      return this.expensesBank.reduce((acc, x) => acc + x.value, 0)
        + this.liabilityObligations;
    },
    liabilitiesTotal() {
      return this.liabilities.reduce((acc, x) => acc + x.value, 0);
    },
    cashFlow() {
      return this.incomeTotal
        - this.expensesBankTotal;
    },
    dscr() {
      return this.incomeTotal
        / this.expensesBankTotal;
    },
    monthsOfDebtRemaining() {
      const payments = this.liabilityObligations - this.creditCardObligations;
      if (payments === 0) {
        return 0;
      }
      return this.liabilitiesTotal
        / payments;
    },
    ...mapState([
      'incomes',
      'expensesBank',
      'liabilities',
    ]),
  },
};
</script>
