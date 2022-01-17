<template>
  <div  class="home__table">
    <button @click="openForm" class="btn" >добавить</button>
    <child :item="'firstEl'"> </child>
    <child v-for="item in listUsers" :key="item.id" :item="item"> </child>
    </div>
</template>

<script>
import child from './child.vue';

export default {
  components: {
    child,
  },
  created() {
    window.addEventListener('beforeunload', this.addLocalStorageBeforeReebot);
    if (JSON.parse(localStorage.getItem('listUsers'))) this.$store.dispatch('usersList/callCreateUserListInLocalStorage');
  },
  computed: {
    listUsers() {
      return this.$store.getters['usersList/getListUsers'];
    },
  },
  methods: {
    addLocalStorageBeforeReebot() {
      localStorage.setItem('listUsers', JSON.stringify(this.$store.getters['usersList/getListUsers']));
    },
    openForm() {
      this.$store.dispatch('mainForm/changeStatusForm', 'open');
    },
  },
};
</script>
