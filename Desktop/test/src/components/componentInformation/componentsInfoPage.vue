<template>
  <div class="component-information">
        <h2>Статистика</h2>
        <div v-if="test" class="component-information__wrapper">
          <div class="name">имя компонента: {{test.name}}</div>
        <components-data
          :childs="test.components"
          text="вложенные компоненты:">
        </components-data>
        <components-data
          :childs="test.computed"
          text="вычисляемые свойства:">
        </components-data>
        <components-data
          :childs="test.methods"
          text="методы:">
        </components-data>
         <components-data
          :childs="test.data"
          text="данные в свойстве data:">
        </components-data>
        </div>
         <h3 v-else >кликните на компонет чтобы посмотреть его содержимое</h3>
         <graph :percent="percent"></graph>
  </div>
</template>

<script>
import componentsData from './componentData.vue';
import graph from './graph.vue';

export default {
  name: 'componentsInfoPage',
  components: {
    componentsData,
    graph,
  },
  data() {
    return {
      percent: [],
    };
  },
  computed: {
    test() {
      if (Object.keys(this.$store.getters['componentInfo/getComponentStatistics']).length) {
        this.calculationPercent(this.$store.getters['componentInfo/getComponentStatistics']);
        return this.$store.getters['componentInfo/getComponentStatistics'];
      }
      return false;
    },
  },
  methods: {
    calculationPercent(obj) {
      const {
        components, computed, methods, data,
      } = obj;
      let array = [components, computed, methods, data];
      array = array.map((item) => {
        if (item) {
          return Object.keys(item).length;
        }
        return 0;
      });
      this.percent = this.toPercentages(array);
      console.log(this.percent);
    },
    toPercentages(list) {
      let total = 0;
      list.forEach((item) => {
        total += item;
      });
      return list.map((x) => parseFloat(((x * 100) / total).toFixed(2)));
    },
  },
};
</script>

<style lang="scss" scoped>
  .component-information {
    width: 400px;
    background: #fffefb;
    box-shadow: 0px 20px 30px rgb(0 0 0 / 4%), 0px 6px 10px rgb(0 0 0 / 2%);
    padding: 15px;
  }
</style>
