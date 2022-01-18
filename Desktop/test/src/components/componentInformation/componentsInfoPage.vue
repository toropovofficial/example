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
  </div>
</template>

<script>
import componentsData from './componentData.vue';

export default {
  name: 'componentsInfoPage',
  components: {
    componentsData,
  },
  computed: {
    test() {
      if (Object.keys(this.$store.getters['componentInfo/getComponentStatistics']).length) {
        return this.$store.getters['componentInfo/getComponentStatistics'];
      }
      return false;
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
