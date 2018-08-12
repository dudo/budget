<template>
  <div class="entry liability">
    <p><span>{{ name }}</span><span>{{ value }}</span><span>{{ monthly_obligation }}</span></p>
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
    monthly_obligation: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>

</style>
