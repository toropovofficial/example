<template>
  <div class="component-information__wrapper">
    <div v-if="componentData"
      class="name">имя компонента:
      <span style="color: red" >{{componentData.componentName}}</span>
    </div>
    <div v-if="componentData" class="image">
     <img :src="componentData.componentUrl" alt="код компонента">
  </div>
  <h3 v-else >кликните на компонет чтобы посмотреть его код</h3>
  </div>
</template>

<script>

export default {
  name: 'componentsFotoPage',
  mounted() {
    console.log(this.$store.getters['componentInfo/getComponentStatistics']);
  },
  computed: {
    componentData() {
      const { name } = this.$store.getters['componentInfo/getComponentStatistics'];
      if (name) {
        const images = require.context('../../assets/image/', false, /\.png$/);
        return {
          componentName: name,
          componentUrl: images(`./${name}.png`),
        };
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
  .image {
    position: relative;
    z-index: 1;
    width: 470px;
    height: 400px;
    overflow-y: scroll;
    border-radius: 15px;
    background: #1e1e1e;
    img {
      width: 100%;
      scrollbar-color: #458245 #714826!important;     /* «цвет ползунка» «цвет полосы скроллбара» */
      scrollbar-width: auto;  /* толщина */
    }
    &::-webkit-scrollbar {
      width: 10px; /* ширина для вертикального скролла */
      background-color: #00d8ff;
      border-radius: 15px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #e46651;
      border-radius: 9em;
      box-shadow: inset 1px 1px 10px #f3faf7;
      border-radius: 15px;
    }
  }

</style>
