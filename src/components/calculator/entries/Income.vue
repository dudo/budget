<template>
  <div class="group">
    <div class="entry income">
      <span>{{ name }}</span>
      <span>{{ value.toLocaleString('en', { style: 'currency', currency: 'USD' }) }}</span>
    </div>
    <form action="">
      <label for="income-name">Income Name</label>
      <input
        type="text"
        id="income-name"
        v-model.trim="name">

      <label for="income-value">Value</label>
      <input
        type="number"
        id="income-value"
        v-model.number="value">
    </form>
  </div>
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
  },
};
</script>

<style scoped>

</style>
