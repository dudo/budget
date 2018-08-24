<template>
  <form>
    <tr>
      <td class="control">
        <input
          placeholder="Name"
          class="input"
          type="text"
          id="income-name"
          v-model.trim="form.name">
      </td>
      <td class="control">
        <input
          placeholder="Value"
          class="input"
          type="number"
          id="income-value"
          v-model.number="form.value"
          @keyup.enter="submit">
      </td>
    </tr>
  </form>
</template>

<script>
export default {
  name: 'IncomeForm',
  data() {
    return {
      form: this.defaults(),
    };
  },
  methods: {
    defaults() {
      return {
        name: '',
        value: '',
      };
    },
    submit() {
      this.$store.commit({
        type: 'addEntry',
        entry: this.form,
        entryType: 'incomes',
      });
      this.form = this.defaults();
    },
  },
};
</script>

<style scoped>
form {
  display: contents
}
</style>
