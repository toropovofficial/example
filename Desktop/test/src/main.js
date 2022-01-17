import { createApp } from 'vue';
import VueTheMask from 'vue-the-mask';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/styles.scss';

createApp(App).use(store).use(VueTheMask).use(router)
  .mount('#app');
