<template>
<ul
  v-if="transformChilds.length"
  class="component-information__components">
  {{text}}
  <li v-for="item in transformChilds" :key="item"  >{{item.name || item}}</li>
</ul>
</template>

<script>
export default {
  name: 'componentsData',
  props: {
    childs: {
      type: Object,
    },
    text: {
      type: String,
    },
  },
  mounted() {
    console.log(this.childs);
  },
  computed: {
    transformChilds() {
      if (this.childs) return Object.values(this.childs);
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
  li {
    color: red;
    margin-left: 5px;
  }
</style>
