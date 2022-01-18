<template>
  <div v-if="percent.length" style="height:200px;width: 200px;">
    <vue3-chart-js
        :id="doughnutChart.id"
        :type="doughnutChart.type"
        :data="doughnutChart.data"
        @before-render="beforeRenderLogic"
    ></vue3-chart-js>
  </div>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';

export default {
  name: 'App',
  components: {
    Vue3ChartJs,
  },
  props: {
    percent: {},
  },
  data() {
    return {
      test: this.percent,
    };
  },
  mounted() {
    console.log(this.percent);
  },
  watch: {
    test(val) {
      console.log(val);
    },
  },
  setup(props) {
    const doughnutChart = {
      id: 'doughnut',
      type: 'doughnut',
      data: {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16',
            ],
            data: props.percent,
          },
        ],
      },
    };
    console.log(props.percent);
    return {
      doughnutChart,
    };
  },
};
</script>
