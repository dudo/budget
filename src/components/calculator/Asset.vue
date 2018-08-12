<template>
  <div class="entry asset">
    <p>
      <span>{{ name }}</span> <span>{{ value }}</span>
      monthly revenue: <span>{{ monthlyRevenueValue }}</span>
    </p>
    <form action=""/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

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
    monthlyRevenueType: {
      type: Number,
      default: 0,
    },
    monthlyRevenueValue: {
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
