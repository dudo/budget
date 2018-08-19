<template>
  <form action="">
    <label for="liability-name">Liability Name</label>
    <input
      type="text"
      id="liability-name"
      v-model.trim="form.name">

    <label for="liability-value">Value</label>
    <input
      type="number"
      id="liability-value"
      v-model.number="form.value"
      @keyup.enter="submit">

    <p>Monthly Obligation</p>
    <input
      type="radio"
      id="liability-monthly-obligation-type-dollars"
      value="0"
      v-model.number="form.monthlyObligationType">
    <label for="liability-monthly-obligation-type-dollars">Dollars</label>
    <br>
    <input
      type="radio"
      id="liability-monthly-obligation-type-percent"
      value="1"
      v-model.number="form.monthlyObligationType">
    <label for="liability-monthly-obligation-type-percent">Percent</label>

    <label for="liability-monthly-obligation-value">Monthly Obligation</label>
    <input
      type="number"
      id="liability-monthly-obligation-value"
      v-model.number="form.monthlyObligationValue">
  </form>
</template>

<script>
export default {
  name: 'LiabilityForm',
  data: () => ({
    form: {
      name: '',
      value: 0,
      monthlyObligationType: 0,
      monthlyObligationValue: 0,
    },
  }),
  methods: {
    submit() {
      this.$store.commit({
        type: 'addEntry',
        entry: this.form,
        entryType: 'liabilities',
      });
    },
  },
};
</script>
