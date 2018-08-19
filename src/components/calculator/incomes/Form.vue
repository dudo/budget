<template>
  <form action="">
    <label for="income-name">Income Name</label>
    <input
      type="text"
      id="income-name"
      v-model.trim="form.name">

    <label for="income-value">Value</label>
    <input
      type="number"
      id="income-value"
      v-model.number="form.value"
      @keyup.enter="submit">
  </form>
</template>

<script>
export default {
  name: 'IncomeForm',
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
        entry: this.form,
        entryType: 'incomes',
      });
    },
  },
};
</script>
