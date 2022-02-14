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
        // если режим просмотра включен то вызываем функцию без параметров
        this.blockedAllMethods();
        return {
          border: `dashed 1px  #${Math.floor(Math.random() * 16777215).toString(16)}`,
          'margin-top': '5px',
        };
      }
      // если режим просмотра выключен то вызываем функцию с параметром activate
      this.blockedAllMethods('activate');
      return false;
    },
  },
  methods: {
    showStatistiks() {
      if (this.randomColor) {
        let arrayData = [];
        if (this.$options.data) arrayData = Object.entries(this.$options.data());
        arrayData = arrayData.map((item) => `${item[0]}:  ${item[1] ? item[1] : 'пустая строка'}`);
        this.$store.dispatch('componentInfo/changeComponentStatistics', {
          name: this.$options.name,
          components: this.$options.components,
          computeds: this.$options.computed,
          methods: this.$options.methods,
          data: arrayData,
        });
      }
    },
    blockedAllMethods(value) {
      // перебираем методы в объекте methods и создаем массив из пар ключ значение
      let allMethods = Object.entries(this.$options.methods);
      allMethods = allMethods.filter((item) => item[0] !== 'showStatistiks' && item[0] !== 'blockedAllMethods');
      // если нет аргумента то присваиваем пустую функцию
      if (!value) allMethods.forEach((item) => { this[item[0]] = () => {}; });
      // иначе перебираем свойства this и в подходящие кладем метод и байндим к методу this
      else {
        allMethods.forEach((item) => {
          const [, method] = item;
          this[item[0]] = method.bind(this);
        });
      }
    },
  },
});

app.mount('#app');
