<template>
  <div class="cashflow">
    <h1>Calculator</h1>
    <Calculator/>
  </div>
</template>

<script>
// @ is an alias to /src
import Calculator from '@/components/calculator/Calculator.vue';

export default {
  name: 'Cashflow',
  components: {
    Calculator,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
