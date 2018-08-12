<template>
  <div class="column">
    <Section
      v-for="section in sections"
      v-bind="section"
      :key="section.dataKey" />
  </div>
</template>

<script>
import Section from '@/components/calculator/Section.vue';

export default {
  name: 'Column',
  props: {
    sections: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Section,
  },
};
</script>

<style scoped>

</style>
