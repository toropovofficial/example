<template lang="">
  <button :style="randomColor"  class="btn">{{ buttonText }}</button>
</template>
<script>
export default {
  name: 'formButton',
  props: {
    buttonText: {
      type: String,
      default: 'сохранить',
    },
  },
};
</script>
<style lang=""></style>
