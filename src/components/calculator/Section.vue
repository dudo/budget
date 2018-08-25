<template>
  <section>
    <table class="table is-striped is-fullwidth">
      <thead>
        <th>{{ title }}</th>
        <th>Value</th>
        <th v-if="dataKey === 'assets'">Revenue</th>
        <th v-else-if="dataKey === 'liabilities'">Obligation</th>
      </thead>
      <tbody>
        <Income
          v-if="dataKey === 'incomes'"
          v-for="(entry, index) in entries"
          v-bind="entry"
          :key="index" />
        <Expense
          v-if="dataKey.startsWith('expenses')"
          v-for="(entry, index) in entries"
          v-bind="entry"
          :data-key="dataKey"
          :key="index" />
        <Asset
          v-if="dataKey === 'assets'"
          v-for="(entry, index) in entries"
          v-bind="entry"
          :balance-sheet-enum="balanceSheetEnum"
          :key="index" />
        <Liability
          v-if="dataKey === 'liabilities'"
          v-for="(entry, index) in entries"
          v-bind="entry"
          :balance-sheet-enum="balanceSheetEnum"
          :key="index" />
        <IncomeForm
          v-if="dataKey === 'incomes'" />
        <ExpenseForm
          v-if="dataKey.startsWith('expenses')"
          :data-key="dataKey" />
        <AssetForm
          v-if="dataKey === 'assets'" />
        <LiabilityForm
          v-if="dataKey === 'liabilities'" />
      </tbody>
    </table>
  </section>
</template>

<script>
import Income from '@/components/calculator/incomes/Show.vue';
import IncomeForm from '@/components/calculator/incomes/Form.vue';
import Expense from '@/components/calculator/expenses/Show.vue';
import ExpenseForm from '@/components/calculator/expenses/Form.vue';
import Asset from '@/components/calculator/assets/Show.vue';
import AssetForm from '@/components/calculator/assets/Form.vue';
import Liability from '@/components/calculator/liabilities/Show.vue';
import LiabilityForm from '@/components/calculator/liabilities/Form.vue';

export default {
  name: 'Section',
  props: {
    title: {
      type: String,
      default: '',
    },
    dataKey: {
      type: String,
      default: '',
    },
    balanceSheetEnum: {
      type: Object,
      default: () => {},
    },
    entries: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Income,
    Expense,
    Asset,
    Liability,
    IncomeForm,
    ExpenseForm,
    AssetForm,
    LiabilityForm,
  },
};
</script>

<style>
p.help {
  height: 18px;
}
</style>
