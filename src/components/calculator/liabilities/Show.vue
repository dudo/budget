<template>
  <div class="group">
    <div class="entry liability">
      <span>{{ name }}</span>
      <span>{{ value.toLocaleString('en-us', { style: 'currency', currency: 'USD' }) }}</span>
      <button
        type="button"
        @click="remove">remove</button>
    </div>
    <div class="entry obligation">
      <span>monthly obligation</span>
      <span v-if="monthlyObligationType === balanceSheetEnum.dollars">
        {{
          monthlyObligationValue.toLocaleString(
            'en-us',
            { style: 'currency', currency: 'USD' }
          )
        }}
      </span>
      <span v-if="monthlyObligationType === balanceSheetEnum.percent">
        {{
          monthlyObligationValue.toLocaleString(
            'en-us',
            { style: 'percent', maximumSignificantDigits: 3 }
          )
        }}
      </span>
    </div>
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
    monthlyObligationType: {
      type: Number,
      default: 0,
    },
    monthlyObligationValue: {
      type: Number,
      default: 0,
    },
    balanceSheetEnum: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    remove() {
      this.$store.commit({
        type: 'removeEntry',
        index: this.$vnode.key,
        entryType: 'liabilities',
      });
    },
  },
};
</script>

<style scoped>

</style>
