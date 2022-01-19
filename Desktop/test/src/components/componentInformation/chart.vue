<template>
  <div style="height:200px;width: 200px;display: flex;flex-direction:column;">
    <vue3-chart-js
        :id="doughnutChart.id"
        ref="chartRef"
        :type="doughnutChart.type"
        :data="doughnutChart.data"
    ></vue3-chart-js>

  </div>
</template>

<script>
import { ref, watch, toRefs } from 'vue';
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';

export default {
  name: 'chart',
  components: {
    Vue3ChartJs,
  },
  props: {
    chartData: {
      default: () => [0, 0, 0, 0],
    },
  },
  setup(props) {
    const chartRef = ref(null);
    const { chartData } = toRefs(props);
    const doughnutChart = {
      id: 'doughnut',
      type: 'doughnut',
      data: {
        labels: ['Вложенные компонеты', 'Вычисляемые свойства', 'Методы', 'Данные в свойстве дата'],
        datasets: [
          {
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16',
            ],
            data: props.chartData,
          },
        ],
      },
    };

    const updateChart = (value) => {
      if (value.length) {
        doughnutChart.data.labels = ['Вложенные компонеты', 'Вычисляемые свойства', 'Методы', 'Данные в свойстве дата'];
        doughnutChart.data.datasets = [
          {
            backgroundColor: [
              '#41B883',
              '#E46651',
              '#00D8FF',
              '#DD1B16',
            ],
            data: value,
          },
        ];

        chartRef.value.update();
      }
    };

    watch(chartData, (value) => updateChart(value));

    return {
      doughnutChart,
      updateChart,
      chartRef,
    };
  },
};
</script>
