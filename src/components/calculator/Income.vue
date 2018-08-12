<template>
  <div class="entry income">
    <p><span>{{ name }}</span><span>{{ value }}</span></p>
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
