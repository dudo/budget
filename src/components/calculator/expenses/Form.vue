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
          placeholder='Amount'
          type='number'
          v-model.number="form.value"
          @keyup.enter="submit" />
      </td>
    </tr>
  </form>
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
