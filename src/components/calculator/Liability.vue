<template>
  <div class="entry liability">
    <p>
      <span>{{ name }}</span> <span>{{ value }}</span>
      monthly obligation: <span>{{ monthlyObligationValue }}</span>
    </p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

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
    ...mapMutations([

    ]),
  },
};
</script>

<style scoped>

</style>
