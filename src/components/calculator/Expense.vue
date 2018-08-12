<template>
  <div class="entry expense">
    <p>
      <span>{{ name }}</span> <span>{{ value }}</span>
    </p>
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
  },
};
</script>

<style scoped>

</style>
