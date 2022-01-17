<template lang="">
  <button class="btn">{{ buttonText }}</button>
</template>
<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: 'сохранить',
    },
  },
};
</script>
<style lang=""></style>
