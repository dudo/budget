<template>
   <form>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label
          class="label"
          for="liability-name">Liability</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input
              placeholder="Name"
              class="input"
              type="text"
              id="liability-name"
              v-model.trim="form.name">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input
              placeholder="Total Value"
              class="input"
              type="number"
              id="liability-value"
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
          for="liability-monthly-obligation-value">Obligation</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input
              placeholder="Monthly Obligation"
              class="input"
              type="number"
              id="liability-monthly-obligation-value"
              v-model.number="form.monthlyObligationValue">
          </div>
        </div>
        <div class="field">
          <div class="control">
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
