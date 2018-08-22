<template>
  <form>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label
          class="label"
          for="income-name">Income</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input
              placeholder="Name"
              class="input"
              type="text"
              id="income-name"
              v-model.trim="form.name">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              placeholder="Value"
              class="input"
              type="number"
              id="income-value"
              v-model.number="form.value"
              @keyup.enter="submit">
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label" />
      <div class="field-body">
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-primary">
              Submit
            </a>
          </p>
          <p class="control">
            <a class="button is-light">
              Cancel
            </a>
          </p>
        </div>
      </div>
    </div>
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
