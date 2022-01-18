<template>
<back-ligth></back-ligth>
<component-information v-if="randomColor"></component-information>
  <div @click.stop="showStatistiks" :style="randomColor" class="home">
    <home-table></home-table>
    <app-form></app-form>
  </div>
</template>

<script>
import appForm from '../components/appForm.vue';
import homeTable from '../components/homeTable.vue';
import backLigth from '../components/backlight.vue';
import componentInformation from '../components/componentInformation/componentsInfoPage.vue';

export default {
  name: 'Home',
  components: {
    appForm,
    homeTable,
    backLigth,
    componentInformation,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  width: 900px;
  padding: 50px;
  margin: 0 auto;
  margin-top: 30px;
  box-shadow: 8px 11px 12px rgb(0 0 0 / 26%);
}
</style>
