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
    dataKey: {
      type: String,
      default: 'expensesBank',
    },
  },
  data() {
    return {
      form: this.defaults(),
    };
  },
  methods: {
    defaults() {
      return {
        name: '',
        value: 0,
      };
    },
    submit() {
      this.$store.commit({
        type: 'addEntry',
        entry: this.form,
        entryType: this.dataKey,
      });
      this.form = this.defaults();
    },
  },
};
</script>