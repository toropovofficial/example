import { createApp } from 'vue';
import VueTheMask from 'vue-the-mask';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/styles.scss';

const app = createApp(App).use(store).use(VueTheMask).use(router);

app.mixin({
  computed: {
    randomColor() {
      if (this.$store.getters['componentInfo/getComponentStatus']) {
        return {
          border: `dashed 1px  #${Math.floor(Math.random() * 16777215).toString(16)}`,
          'margin-top': '5px',
        };
      }
      return false;
    },
  },
  methods: {
    showStatistiks() {
      if (this.randomColor) {
        let arrayData = [];
        if (this.$options.data) arrayData = Object.entries(this.$options.data());
        arrayData = arrayData.map((item) => `${item[0]}:  ${item[1] ? item[1] : 'пустая строка'}`);
        console.log(this.$options.data);
        this.$store.dispatch('componentInfo/changeComponentStatistics', {
          name: this.$options.name,
          components: this.$options.components,
          computed: this.$options.computed,
          methods: this.$options.methods,
          data: arrayData,
        });
        console.log(this.$store.getters['componentInfo/getComponentStatistics']);
      }
    },
  },
});

app.mount('#app');
