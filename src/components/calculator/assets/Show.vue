<template>
  <div class="group">
    <div class="entry asset">
      <span>{{ name }}</span>
      <span>{{ value.toLocaleString('en-us', { style: 'currency', currency: 'USD' }) }}</span>
      <button
        type="button"
        @click="remove">remove</button>
    </div>
    <div class="entry revenue">
      <span>monthly revenue</span>
      <span v-if="monthlyRevenueType === balanceSheetEnum.dollars">
        {{
          monthlyRevenueValue.toLocaleString(
            'en-us',
            { style: 'currency', currency: 'USD' }
          )
        }}
      </span>
      <span v-if="monthlyRevenueType === balanceSheetEnum.percent">
        {{
          monthlyRevenueValue.toLocaleString(
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
        entryType: 'assets',
      });
    },
  },
};
</script>