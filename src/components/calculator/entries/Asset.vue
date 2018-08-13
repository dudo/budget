<template>
  <div class="group">
    <div class="entry asset">
      <span>{{ name }}</span>
      <span>{{ value.toLocaleString('en', { style: 'currency', currency: 'USD' }) }}</span>
    </div>
    <div class="entry revenue">
      <span>monthly revenue</span>
      <span>{{ monthlyRevenueValue }}</span>
    </div>
    <form action="">
      <label for="asset-name">Asset Name</label>
      <input
        type="text"
        id="asset-name"
        v-model.trim="name">

      <label for="asset-value">Value</label>
      <input
        type="number"
        id="asset-value"
        v-model.number="value">

      <p>Monthly Revenue</p>
      <input
        type="radio"
        id="asset-monthly-revenue-type-dollars"
        value="0"
        v-model.number="monthlyRevenueType">
      <label for="asset-monthly-revenue-type-dollars">Dollars</label>
      <br>
      <input
        type="radio"
        id="asset-monthly-revenue-type-percent"
        value="1"
        v-model.number="monthlyRevenueType">
      <label for="asset-monthly-revenue-type-percent">Percent</label>

      <label for="asset-monthly-revenue-value">Monthly Revenue</label>
      <input
        type="number"
        id="asset-monthly-revenue-value"
        v-model.number="monthlyRevenueValue">
    </form>
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
