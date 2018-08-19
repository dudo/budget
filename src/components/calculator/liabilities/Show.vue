<template>
  <div class="group">
    <div class="entry liability">
      <span>{{ name }}</span>
      <span>{{ value.toLocaleString('en', { style: 'currency', currency: 'USD' }) }}</span>
      <button
        type="button"
        @click="remove">remove</button>
    </div>
    <div class="entry obligation">
      <span>monthly obligation</span>
      <span>{{ monthlyObligationValue }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Liability',
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
  },
  methods: {
    remove() {
      this.$store.commit({
        type: 'removeEntry',
        index: this.$vnode.key,
        entryType: 'liabilities',
      });
    },
  },
};
</script>

<style scoped>

</style>
