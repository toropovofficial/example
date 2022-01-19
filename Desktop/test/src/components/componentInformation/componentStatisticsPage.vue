<template>
  <div class="component-information__wrapper">
        <div v-if="componentStatistics" class="component-information__wrapper">
          <div
            class="name">имя компонента:
            <span style="color: red" >{{componentStatistics.name}}</span>
          </div>
        <components-data
          :childs="componentStatistics.components"
          text="вложенные компоненты:">
        </components-data>
        <components-data
          :childs="componentStatistics.computeds"
          text="вычисляемые свойства:">
        </components-data>
        <components-data
          :childs="componentStatistics.methods"
          text="методы:">
        </components-data>
         <components-data
          :childs="componentStatistics.data"
          text="данные в свойстве data:">
        </components-data>
        </div>
         <h3 v-else >кликните на компонет чтобы посмотреть его содержимое</h3>
         <graph v-if="chartData.length" :chartData="chartData"></graph>
  </div>
</template>

<script>
import componentsData from './componentData.vue';
import graph from './chart.vue';

export default {
  name: 'componentStatisticsPage',
  components: {
    componentsData,
    graph,
  },
  data() {
    return {
      chartData: [],
    };
  },
  computed: {
    componentStatistics() {
      if (Object.keys(this.$store.getters['componentInfo/getComponentStatistics']).length) {
        this.createChartData(this.$store.getters['componentInfo/getComponentStatistics']);
        return this.$store.getters['componentInfo/getComponentStatistics'];
      }
      return false;
    },
  },
  methods: {
    createChartData(obj) {
      const {
        components, computeds, methods, data,
      } = obj;
      let array = [components, computeds, methods, data];
      array = array.map((item) => {
        if (item) {
          return Object.keys(item).length;
        }
        return 0;
      });
      this.chartData = array;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
