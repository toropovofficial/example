<template>
  <div class="component-information">
        <button class="btn"
        @click="changeIsComponent('componentStatisticsPage')" >Статистика</button>
        <button class="btn"
        @click="changeIsComponent('componentsFotoPage')" >Код компонента</button>
        <component :is="isComponent"></component>
  </div>
</template>

<script>
import componentStatisticsPage from './componentStatisticsPage.vue';
import componentsFotoPage from './componentFotoPage.vue';

export default {
  name: 'componentInformation',
  components: {
    componentStatisticsPage,
    componentsFotoPage,
  },
  data() {
    return {
      isComponent: 'componentStatisticsPage',
    };
  },
  methods: {
    changeIsComponent(value) {
      this.isComponent = value;
    },
  },
};
</script>

<style lang="scss" scoped>
  .component-information {
    width: 500px;
    position: absolute;
    background: #fffefb;
    box-shadow: 0px 20px 30px rgb(0 0 0 / 4%), 0px 6px 10px rgb(0 0 0 / 2%);
    padding: 15px;
  }
</style>
