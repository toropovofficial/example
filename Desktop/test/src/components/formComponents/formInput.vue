<template lang="">
  <div  @click.stop="showStatistiks" :style="randomColor" class="mainForm__wrapper">
    <label class="label">{{ labelText }}</label>
    <input
      @input="sendModelValue($event)"
      :type="inputType"
      :placeholder="placeHolder"
      class="input"
      :class="{'error': checkError}"
      v-mask="inputType === 'tel' ? '# ### ### ## ##' : 'XXXXXXXXXXXXXXX'"
      :disabled="randomColor"
    />
  </div>
</template>
<script>
import { mask } from 'vue-the-mask';

export default {
  name: 'formInput',
  directives: { mask },
  emits: ['update:modelValue'],
  props: {
    inputType: {
      type: String,
      default: 'text',
      validator(value) {
        if (typeof value === 'string') return true;
        return false;
      },
    },
    placeHolder: {
      type: String,
      default: '',
      validator(value) {
        if (typeof value === 'string') return true;
        return false;
      },
    },
    labelText: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
    },
    formIsValid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      error: this.formIsValid,
    };
  },
  methods: {
    sendModelValue({ target }) {
      this.$emit('update:modelValue', target.value);
    },
  },
  computed: {
    checkError() {
      if (!this.formIsValid) {
        if (!this.modelValue) return true;
      }
      return false;
    },
  },
};
</script>
<style lang="scss" scoped>
.error {
  border: solid 1px red;
}
</style>
