<template>
  <form action="">
    <label for="asset-name">Asset Name</label>
    <input
      type="text"
      id="asset-name"
      v-model.trim="form.name">

    <label for="asset-value">Value</label>
    <input
      type="number"
      id="asset-value"
      v-model.number="form.value"
      @keyup.enter="submit">

    <p>Monthly Revenue</p>
    <input
      type="radio"
      id="asset-monthly-revenue-type-dollars"
      value="0"
      v-model.number="form.monthlyRevenueType">
    <label for="asset-monthly-revenue-type-dollars">Dollars</label>
    <br>
    <input
      type="radio"
      id="asset-monthly-revenue-type-percent"
      value="1"
      v-model.number="form.monthlyRevenueType">
    <label for="asset-monthly-revenue-type-percent">Percent</label>

    <label for="asset-monthly-revenue-value">Monthly Revenue</label>
    <input
      type="number"
      id="asset-monthly-revenue-value"
      v-model.number="form.monthlyRevenueValue">
  </form>
</template>

<script>
export default {
  name: 'AssetForm',
  data: () => ({
    form: {
      name: '',
      value: 0,
      monthlyRevenueType: 0,
      monthlyRevenueValue: 0,
    },
  }),
  methods: {
    submit() {
      this.$store.commit({
        type: 'addEntry',
        entry: this.form,
        entryType: 'assets',
      });
    },
  },
};
</script>
