<template>
  <div class="group">
    <div class="entry expense">
      <span>{{ name }}</span>
      <span>{{ value.toLocaleString('en', { style: 'currency', currency: 'USD' }) }}</span>
    </div>
    <form action="">
      <label for="expense-name">Expense Name</label>
      <input
        type="text"
        id="expense-name"
        v-model.trim="name">

      <label for="expense-value">Value</label>
      <input
        type="number"
        id="expense-value"
        v-model.number="value">

      <input
        type="hidden"
        id="expense-type"
        v-model="type">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Expense',
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>

</style>
