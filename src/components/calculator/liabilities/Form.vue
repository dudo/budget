<template>
  <form>
    <tr>
      <td class="control">
        <input
          placeholder="Name"
          class="input"
          type="text"
          id="liability-name"
          v-model.trim="form.name">
      </td>
      <td class="control">
        <input
          placeholder="Total Value"
          class="input"
          type="number"
          id="liability-value"
          v-model.number="form.value"
          @keyup.enter="submit">
      </td>
      <td class="control">
        <input
          placeholder="Monthly Obligation"
          class="input"
          type="number"
          id="liability-monthly-obligation-value"
          v-model.number="form.monthlyObligationValue">
      </td>
      <!-- <td class="control">
        TODO idea... parse text to determine type. 5% or $100
        <label class="radio">
          <input
            type="radio"
            name="liability-monthly-obligation-type"
            id="liability-monthly-obligation-type-dollars"
            value="0"
            v-model.number="form.monthlyObligationType">
          Dollars
        </label>
        <label class="radio">
          <input
            type="radio"
            name="liability-monthly-obligation-type"
            id="liability-monthly-obligation-type-percent"
            value="1"
            v-model.number="form.monthlyObligationType">
          Percent
        </label>
      </td> -->
    </tr>
  </form>
</template>

<script>
export default {
  name: 'LiabilityForm',
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
        monthlyObligationType: 0,
        monthlyObligationValue: '',
      };
    },
    submit() {
      this.$store.commit({
        type: 'addEntry',
        entry: this.form,
        entryType: 'liabilities',
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
