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
          :incomplete="errors && !form.monthlyRevenueValue"
          placeholder='Monthly Revenue'
          type='text'
          v-model.trim="form.monthlyRevenueValue"
          @keyup.enter="submit" />
      </td>
    </tr>
  </form>
</template>

<script>
import BaseInput from '@/components/shared/BaseInput.vue';

export default {
  name: 'AssetForm',
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
        monthlyRevenueType: 0,
        monthlyRevenueValue: '',
      };
    },
    inferType() {
      this.errors = false;
      let value = Number(this.form.monthlyRevenueValue.toString().replace(/[^0-9.-]+/g, ''));
      if (this.form.monthlyRevenueValue.includes('%')) {
        // 25%
        this.form.monthlyRevenueType = this.balanceSheetEnum.percent;
        value /= 100.0;
      } else if (this.form.monthlyRevenueValue.includes('$')) {
        // $250
        this.form.monthlyRevenueType = this.balanceSheetEnum.dollars;
      } else if (value < 0 && value <= 1) {
        // 0.25
        this.form.monthlyRevenueType = this.balanceSheetEnum.percent;
      } else if (value >= 1) {
        // 250
        this.form.monthlyRevenueType = this.balanceSheetEnum.dollars;
      } else {
        this.errors = true;
        value = '';
      }
      this.form.monthlyRevenueValue = value;
    },
    submit() {
      this.inferType();
      const { monthlyRevenueType, ...verifiedObject } = this.form;
      if (Object.values(verifiedObject).some(x => !x)) {
        this.errors = true;
      } else {
        this.errors = false;
        this.$store.commit({
          type: 'addEntry',
          entry: this.form,
          entryType: 'assets',
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

