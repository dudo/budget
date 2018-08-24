<template>
  <form>
    <tr>
      <td>
        <div class="control">
          <input
            placeholder="Name"
            class="input"
            type="text"
            id="expense-name"
            v-model.trim="form.name">
        </div>
      </td>
      <td>
        <div class="control">
          <input
            placeholder="Value"
            class="input"
            type="number"
            id="expense-value"
            v-model.number="form.value"
            @keyup.enter="submit">
        </div>
      </td>
    </tr>
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
        value: '',
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

<style scoped>
form {
  display: contents
}
</style>
