<template>
<ul v-if="childs" class="component-information__components"> {{text}}
  <li v-for="item in childs" :key="item"  >{{item.name || item}}</li>
</ul>
<div v-else >{{text}} нет</div>
</template>

<script>
export default {
  name: 'childComponents',
  props: {
    childs: {},
    text: {
      type: String,
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
