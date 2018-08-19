<template>
  <div class="group">
    <div class="entry expense">
      <span>{{ name }}</span>
      <span>{{ value.toLocaleString('en', { style: 'currency', currency: 'USD' }) }}</span>
      <button
        v-if="removable"
        type="button"
        @click="remove">remove</button>
    </div>
  </div>
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
    type: {
      type: String,
      default: '',
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
        entryType: 'expenses',
      });
    },
  },
};
</script>

<style scoped>

</style>
