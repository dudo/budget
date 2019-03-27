<template>
  <tr>
    <td colspan=2>
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
  name: 'ExpenseForm',
  components: {
    BaseInput,
  },
  props: {
    dataKey: {
      type: String,
      default: 'expensesBank',
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
    ]),
    defaults() {
      return {
        name: '',
        value: '',
      };
    },
    submit() {
      if (Object.values(this.form).some(x => !x)) {
        this.errors = true;
      } else {
        this.errors = false;
        this.addEntry({
          entry: this.form,
          entryType: this.dataKey,
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
