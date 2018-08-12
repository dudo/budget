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
      :key="index"
      :type="dataKey.split('_')[dataKey.split('_').length - 1]" />
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
import Income from '@/components/calculator/Income.vue';
import Expense from '@/components/calculator/Expense.vue';
import Asset from '@/components/calculator/Asset.vue';
import Liability from '@/components/calculator/Liability.vue';

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
  },
  components: {
    Income,
    Expense,
    Asset,
    Liability,
  },
  computed: {
    entries(dataKey) {
      // TODO
      // return this.$store.entries[dataKey];
      return [{}, {}];
    },
  },
};
</script>

<style scoped>

</style>
