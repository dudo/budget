<template>
  <div class="field">
    <label
      v-if="!!label"
      class="label">
      {{ label }}
    </label>
    <div :class="['control', {'has-icons-left': !!iconLeft, 'has-icons-right': incomplete}]">
      <input
        :value="value"
        :class="['input', { 'is-danger': incomplete }]"
        v-bind="$attrs"
        v-on='listeners'>
      <span
        v-if="!!iconLeft"
        class="icon is-small is-left">
        <i :class="['fas', iconLeft]"/>
      </span>
      <span
        v-if="incomplete"
        class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"/>
      </span>
    </div>
    <p
      v-if="!!helpText"
      :class="['help', {'is-danger': incomplete}]">
      {{ helpText }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    value: [Number, String], // eslint-disable-line
    helpText: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    incomplete: {
      type: Boolean,
      default: false,
    },
    iconLeft: {
      type: String,
      default: '',
    },

  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event =>
          this.$emit('input', event.target.value),
      };
    },
  },
};
</script>
