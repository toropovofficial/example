<template>
 <div class="mainForm__wrapper">
    <label class="label">{{ labelText }}</label>
     <select class="select" @change="sendValue($event)" >
      <option :value="item.name"
        v-for="(item, index) in usersForSelect"
        :key="index">
        {{item.name}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
    },
    usersForSelect: {
      type: Object,
    },
    labelText: {
      type: String,
    },
  },
  methods: {
    sendValue({ target }) {
      this.$emit('update:modelValue', target.value);
    },
  },
};
</script>
