<template>
  <div class="calculator">
    <Column
      :sections="[
        {title: 'Income', dataKey: 'incomes'},
        {title: 'Bank Expenses', dataKey: 'expenses_bank'},
        {title: 'Credit Card Expenses', dataKey: 'expenses_cc'},]"/>
    <Column
      :sections="[
        {title: 'Assets', dataKey: 'assets'},
        {title: 'Liabilities', dataKey: 'liabilities'},]"/>
  </div>
</template>

<script>
import Column from '@/components/calculator/Column.vue';

export default {
  name: 'Calculator',
  components: {
    Column,
  },
};
</script>

<style scoped>

</style>
