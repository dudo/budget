<template>
  <div class="entry asset">
    <p><span>{{ name }}</span><span>{{ value }}</span></p>
  </div>
</template>

<script>
export default {
  name: 'Asset',
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 0,
    },
    monthly_return_type: {
      type: Number,
      default: 0,
    },
    monthly_return_type_enum: {
      type: Object,
      default: () => Object.freeze({ dollars: 0, percent: 1 }),
    },
    monthly_return_value: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>

</style>
