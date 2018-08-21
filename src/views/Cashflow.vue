<template>
  <section>
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Calculator
          </h1>
          <h2 class="subtitle">
            Numbers!
          </h2>
        </div>
      </div>
    </div>
    <Calculator/>
  </section>
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