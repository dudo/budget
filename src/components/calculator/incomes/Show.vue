<template>
  <tr>
    <td>
      {{ name }}
      <a
        v-if="removable"
        class="delete"
        @click="remove" />
    </td>
    <td>{{ value.toLocaleString('en', { style: 'currency', currency: 'USD' }) }}</td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Income',
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 0,
    },
    removable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    ...mapActions([
      'removeEntry',
      'updateEntry',
    ]),
    remove() {
      this.removeEntry({
        index: this.$vnode.key,
        entryType: 'incomes',
      });
    },
  },
};
</script>
