<template>
  <form>
    <tr>
      <td>
        <BaseInput
          :incomplete="incomplete"
          placeholder="Name"
          type="text"
          :helpText="this.incomplete ? 'Incomplete Income' : ''"
          v-model.trim="form.name"
          @keyup.enter="submit" />
      </td>
      <td>
        <BaseInput
          :incomplete="incomplete"
          placeholder="Value"
          type="number"
          v-model.number="form.value"
          @keyup.enter="submit" />
      </td>
    </tr>
  </form>
</template>

<script>
import BaseInput from '@/components/shared/BaseInput.vue';

export default {
  name: 'IncomeForm',
  data() {
    return {
      form: this.defaults(),
      incomplete: false
    };
  },
  computed: {

  },
  methods: {
    defaults() {
      return {
        name: '',
        value: '',
      };
    },
    submit() {
      this.$store.commit({
        type: 'addEntry',
        entry: this.form,
        entryType: 'incomes',
      });
      this.form = this.defaults();
    },
  },
  components: {
    BaseInput,
  }
};
</script>

<style scoped>
form {
  display: contents
}
</style>
