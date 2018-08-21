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
          <span v-if="monthsOfDebtRemaining < 0">∞</span>
          <span v-else-if="cashFlow < 0">∞</span>
          <span v-else>{{ Math.round(monthsOfDebtRemaining) }}</span>
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