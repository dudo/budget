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
      :key="index" />
    <Asset
      v-if="dataKey === 'assets'"
      v-for="(entry, index) in entries"
      v-bind="entry"
      :key="index" />
    <Liability
      v-if="dataKey === 'liabilities'"
      v-for="(entry, index) in entries"
      v-bind="entry"
      :key="index" />
  </section>
</template>

<script>
import Income from '@/components/calculator/entries/Income.vue';
import Expense from '@/components/calculator/entries/Expense.vue';
import Asset from '@/components/calculator/entries/Asset.vue';
import Liability from '@/components/calculator/entries/Liability.vue';

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

</style>
