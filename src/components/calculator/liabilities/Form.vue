<template>
  <tr>
    <td colspan=3>
      <form>
        <div class="field is-horizontal">
          <div class="field-body">
            <BaseInput
              :incomplete="errors && !form.name"
              placeholder='Name'
              type='text'
              v-model.trim="form.name"
              @keyup.enter="submit" />
            <BaseInput
              :incomplete="errors && !form.value"
              placeholder='Amount'
              type='number'
              v-model.number="form.value"
              @keyup.enter="submit" />
            <BaseInput
              :incomplete="errors && !form.monthlyObligationValue"
              placeholder='Monthly Payment'
              type='text'
              v-model.trim="form.monthlyObligationValue"
              @keyup.enter="submit" />
          </div>
        </div>
      </form>
    </td>
  </tr>
</template>

<script>
import BaseInput from '@/components/shared/BaseInput.vue';
import { mapActions } from 'vuex';

export default {
  name: 'LiabilityForm',
  components: {
    BaseInput,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 0,
    },
    monthlyObligationType: {
      type: Number,
      default: 0,
    },
    monthlyObligationValue: {
      type: Number,
      default: 0,
    },
    balanceSheetEnum: {
      type: Object,
      default: () => {},
    },
    update: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: this.defaults(),
      errors: false,
    };
  },
  methods: {
    ...mapActions([
      'addEntry',
      'updateEntry',
    ]),
    defaults() {
      return {
        name: this.name || '',
        value: this.value || '',
        monthlyObligationType: this.monthlyObligationType || 0,
        monthlyObligationValue: this.monthlyObligationValue || '',
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
    submit(e) {
      this.inferType();
      const { monthlyObligationType, ...verifiedObject } = this.form;
      if (Object.values(verifiedObject).some(x => !x)) {
        this.errors = true;
      } else if (this.update) {
        this.errors = false;
        this.updateEntry({
          entry: this.form,
          index: this.$vnode.key,
          entryType: 'liabilities',
          value: e.target.innerText,
        });
      } else {
        this.errors = false;
        this.addEntry({
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
