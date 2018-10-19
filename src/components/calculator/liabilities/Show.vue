<template>
  <tr>
    <td>
      {{ name }}
      <a
        class="delete"
        @click="remove" />
    </td>
    <td>{{ value.toLocaleString('en-us', { style: 'currency', currency: 'USD' }) }}</td>
    <td v-if="monthlyObligationType === balanceSheetEnum.dollars">
      {{
        monthlyObligationValue.toLocaleString(
          'en-us',
          { style: 'currency', currency: 'USD' }
        )
      }}
    </td>
    <td v-if="monthlyObligationType === balanceSheetEnum.percent">
      {{
        monthlyObligationValue.toLocaleString(
          'en-us',
          { style: 'percent', maximumSignificantDigits: 3 }
        )
      }}
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';

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
    ...mapActions([
      'removeEntry',
    ]),
    remove() {
      this.removeEntry({
        index: this.$vnode.key,
        entryType: 'liabilities',
      });
    },
  },
};
</script>
