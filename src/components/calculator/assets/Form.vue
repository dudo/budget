<template>
  <form>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label
          class="label"
          for="asset-name">Asset</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input
              placeholder="Name"
              class="input"
              type="text"
              id="asset-name"
              v-model.trim="form.name">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              placeholder="Total Value"
              class="input"
              type="number"
              id="asset-value"
              v-model.number="form.value"
              @keyup.enter="submit">
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label
          class="label"
          for="asset-monthly-revenue-value">Revenue</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input
              placeholder="Monthly Revenue"
              class="input"
              type="number"
              id="asset-monthly-revenue-value"
              v-model.number="form.monthlyRevenueValue">
          </div>
        </div>
        <div class="field">
          <div class="control">
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
