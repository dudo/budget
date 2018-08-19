<template>
  <form action="">
    <label for="expense-name">Expense Name</label>
    <input
      type="text"
      id="expense-name"
      v-model.trim="form.name">

    <label for="expense-value">Value</label>
    <input
      type="number"
      id="expense-value"
      v-model.number="form.value"
      @keyup.enter="submit">
  </form>
</template>

<script>
export default {
  name: 'ExpenseForm',
  props: {
    expenseType: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    form: {
      name: '',
      value: 0,
    },
  }),
  methods: {
    submit() {
      this.$store.commit({
        type: 'addEntry',
        entry: Object.assign({ type: this.expenseType }, this.form),
        entryType: 'expenses',
      });
    },
  },
};
</script>
