<template>
  <tr>
    <div>
      <span>{{ name }}</span>
      <span>{{ value.toLocaleString('en', { style: 'currency', currency: 'USD' }) }}</span>
      <a
        v-if="removable"
        class="delete"
        @click="remove" />
    </div>
  </tr>
</template>

<script>
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
    remove() {
      this.$store.commit({
        type: 'removeEntry',
        index: this.$vnode.key,
        entryType: 'incomes',
      });
    },
  },
};
</script>
