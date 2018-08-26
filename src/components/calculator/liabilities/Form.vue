<template>
  <form>
    <tr>
      <td>
        <BaseInput
          :incomplete="errors && !form.name"
          placeholder='Name'
          type='text'
          v-model.trim="form.name"
          @keyup.enter="submit" />
      </td>
      <td>
        <BaseInput
          :incomplete="errors && !form.value"
          placeholder='Total Value'
          type='number'
          v-model.number="form.value"
          @keyup.enter="submit" />
      </td>
      <td>
        <BaseInput
          :incomplete="errors && !form.monthlyObligationValue"
          placeholder='Monthly Obligation'
          type='text'
          v-model.trim="form.monthlyObligationValue"
          @keyup.enter="submit" />
      </td>
    </tr>
  </form>
</template>

<script>
import BaseInput from '@/components/shared/BaseInput.vue';

export default {
  name: 'LiabilityForm',
  components: {
    BaseInput,
  },
  props: {
    balanceSheetEnum: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      form: this.defaults(),
      errors: false,
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
    inferType() {
      this.errors = false;
      let value = Number(this.form.monthlyObligationValue.toString().replace(/[^0-9.-]+/g, ''));
      if (this.form.monthlyObligationValue.includes('%')) {
        // 25%
        this.form.monthlyObligationType = this.balanceSheetEnum.percent;
        value /= 100.0;
      } else if (this.form.monthlyObligationValue.includes('$')) {
        // $250
        this.form.monthlyObligationType = this.balanceSheetEnum.dollars;
      } else if (value < 0 && value <= 1) {
        // 0.25
        this.form.monthlyObligationType = this.balanceSheetEnum.percent;
      } else if (value >= 1) {
        // 250
        this.form.monthlyObligationType = this.balanceSheetEnum.dollars;
      } else {
        this.errors = true;
        value = '';
      }
      this.form.monthlyObligationValue = value;
    },
    submit() {
      this.inferType();
      const { monthlyObligationType, ...verifiedObject } = this.form;
      if (Object.values(verifiedObject).some(x => !x)) {
        this.errors = true;
      } else {
        this.errors = false;
        this.$store.commit({
          type: 'addEntry',
          entry: this.form,
          entryType: 'liabilities',
        });
        this.form = this.defaults();
      }
    },
  },
};
</script>

<style scoped>
form {
  display: contents
}
</style>
