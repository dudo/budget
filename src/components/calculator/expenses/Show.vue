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
export default {
  name: 'Expense',
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
    dataKey: {
      type: String,
      default: 'expensesBank',
    },
  },
  methods: {
    remove() {
      this.$store.commit({
        type: 'removeEntry',
        index: this.$vnode.key,
        entryType: this.dataKey,
      });
    },
  },
};
</script>
