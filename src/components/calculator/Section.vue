<template>
  <section>
    <h3>{{ title }}</h3>
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
.group {
  margin: 10px auto;
}
.entry {
  display: flex;
  justify-content: flex-end;
}
.entry span:last-of-type {
  width: 100px;
  display: inline-block;
  padding-left: 10px;
}

.swipe-view {
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-coordinate: 0 0;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;
  flex: 1;
  display:flex;
  -webkit-overflow-scrolling: touch;
}
.swipe-view section {
  width: 380px;
  height: 100%;
  flex:0 0 380px;
  scroll-snap-align: start;
}

</style>
