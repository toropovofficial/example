<template>
  <button class="btn" @click="changeStatusComponent" >{{buttonTetx}}</button>
</template>

<script>

export default {
  name: 'backLight',
  methods: {
    changeStatusComponent() {
      this.$store.dispatch('componentInfo/changeComponentStatus');
      this.$store.dispatch('mainForm/changeStatusForm', 'open');
    },
  },
  computed: {
    buttonTetx() {
      if (this.$store.getters['componentInfo/getComponentStatus']) return 'вернуть обратно';
      return 'подсветить компоненты';
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 20%;
}
</style>
