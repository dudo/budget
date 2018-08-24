<template>
  <form>
    <tr>
      <td class="control">
        <input
          placeholder="Name"
          class="input"
          type="text"
          id="asset-name"
          v-model.trim="form.name">
      </td>
      <td class="control">
        <input
          placeholder="Total Value"
          class="input"
          type="number"
          id="asset-value"
          v-model.number="form.value"
          @keyup.enter="submit">
      </td>
      <td class="control">
        <input
          placeholder="Monthly Revenue"
          class="input"
          type="number"
          id="asset-monthly-revenue-value"
          v-model.number="form.monthlyRevenueValue">
      </td>
      <!-- <td class="control">
        TODO idea... parse text to determine type. 5% or $100
        <label class="radio">
          <input
            type="radio"
            name="asset-monthly-revenue-type"
            id="asset-monthly-revenue-type-dollars"
            value="0"
            v-model.number="form.monthlyRevenueType">
          Dollars
        </label>
        <label class="radio">
          <input
            type="radio"
            name="asset-monthly-revenue-type"
            id="asset-monthly-revenue-type-percent"
            value="1"
            v-model.number="form.monthlyRevenueType">
          Percent
        </label>
      </td> -->
    </tr>
  </form>
</template>

<script>
export default {
  name: 'AssetForm',
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
        monthlyRevenueType: 0,
        monthlyRevenueValue: '',
      };
    },
    submit() {
      this.$store.commit({
        type: 'addEntry',
        entry: this.form,
        entryType: 'assets',
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

