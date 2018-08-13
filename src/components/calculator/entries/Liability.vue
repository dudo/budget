<template>
  <div class="group">
    <div class="entry liability">
      <span>{{ name }}</span>
      <span>{{ value.toLocaleString('en', { style: 'currency', currency: 'USD' }) }}</span>
    </div>
    <div class="entry obligation">
      <span>monthly obligation</span>
      <span>{{ monthlyObligationValue }}</span>
    </div>
    <form action="">
      <label for="liability-name">Asset Name</label>
      <input
        type="text"
        id="liability-name"
        v-model.trim="name">

      <label for="liability-value">Value</label>
      <input
        type="number"
        id="liability-value"
        v-model.number="value">

      <p>Monthly Obligation</p>
      <input
        type="radio"
        id="liability-monthly-obligation-type-dollars"
        value="0"
        v-model.number="monthlyObligationType">
      <label for="liability-monthly-obligation-type-dollars">Dollars</label>
      <br>
      <input
        type="radio"
        id="liability-monthly-obligation-type-percent"
        value="1"
        v-model.number="monthlyObligationType">
      <label for="liability-monthly-obligation-type-percent">Percent</label>

      <label for="liability-monthly-obligation-value">Monthly Obligation</label>
      <input
        type="number"
        id="liability-monthly-obligation-value"
        v-model.number="monthlyObligationValue">
    </form>
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
