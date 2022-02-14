<template>
  <form-button @click="changeStatusComponent" :buttonText="buttonTetx" ></form-button>
</template>

<script>
import formButton from './formComponents/formButton.vue';

export default {
  components: {
    formButton,
  },
  methods: {
    changeStatusComponent() {
      console.log(this.buttonText);
      this.$store.dispatch('componentInfo/changeComponentStatus');
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
