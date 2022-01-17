<template>
  <div class="home">
    <home-table></home-table>
    <app-form></app-form>
  </div>
</template>

<script>
import appForm from '../components/appForm.vue';
import homeTable from '../components/homeTable.vue';

export default {
  name: 'Home',
  components: {
    appForm,
    homeTable,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
}
</style>
