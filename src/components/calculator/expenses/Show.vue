<template>
  <tr>
    <td>
      <span
        contenteditable
        @keydown.enter="update"
        data-attribute="name">
        {{ name }}
      </span>
      <a
        v-if="removable"
        class="delete"
        @click="remove" />
    </td>
    <td contenteditable>
      {{ value.toLocaleString('en', { style: 'currency', currency: 'USD' }) }}
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';

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
    ...mapActions([
      'removeEntry',
      'updateEntry',
    ]),
    remove() {
      this.removeEntry({
        index: this.$vnode.key,
        entryType: this.dataKey,
      });
    },
    update(e) {
      e.preventDefault();
      this.updateEntry({
        index: this.$vnode.key,
        entryType: this.dataKey,
        attribute: e.target.dataset.attribute,
        value: e.target.innerText,
      });
    },
  },
};
</script>
