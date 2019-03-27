<template>
  <section>
    <table class="table is-striped is-fullwidth">
      <thead>
        <th>Totals</th>
        <th>Value</th>
      </thead>
      <tbody>
        <tr>
          <td>Cashflow</td>
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
          <td>Debt to Income Ratio</td>
          <td>
            {{
              debtToIncomeRatio.toLocaleString(
                'en-us',
                { style: 'percent', maximumSignificantDigits: 3 }
              )
            }}
            (assuming {{
              minimumLiabilityPercent.toLocaleString(
                'en-us',
                { style: 'percent', maximumSignificantDigits: 1 }
              )
            }} minimum payment)
          </td>
        </tr>
        <tr>
          <td>Months of Debt Remaining</td>
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
    minimumLiabilityPercent: {
      type: Number,
      default: 0.0,
    },
    minimumMonthlyLiabilityPayment: {
      type: Number,
      default: 0,
    },
    liabilitiesTotal: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapState([
      'incomes',
      'expensesBank',
      'liabilities',
    ]),
    incomeTotal() {
      return this.incomes.reduce((acc, x) => acc + x.value, 0)
        + this.assetRevenue;
    },
    expensesBankTotal() {
      return this.expensesBank.reduce((acc, x) => acc + x.value, 0)
        + this.liabilityObligations;
    },
    cashFlow() {
      return this.incomeTotal
        - this.expensesBankTotal;
    },
    debtToIncomeRatio() {
      if (this.incomeTotal === 0) {
        return 0;
      }
      return this.minimumMonthlyLiabilityPayment
        / this.incomeTotal;
    },
    monthsOfDebtRemaining() {
      const payments = this.liabilityObligations - this.creditCardObligations;
      if (payments === 0) {
        return 0;
      }
      return this.liabilitiesTotal
        / payments;
    },
  },
};
</script>
