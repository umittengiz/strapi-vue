<template>
  <div id="pie-chart">
    <apexchart
      type="donut"
      width="380"
      :options="chartOptions"
      :series="series"
    ></apexchart
    >
  </div>
</template>

<script>
export default {
  name: "PieChart",
  props: ['theme'],
  data() {
    return {
      chartData: {
        gun: ["Dolu", "Boş"],
        doluluk: [73, 27],
      },
      series: [73, 27],
      chartOptions: {
        chart: {
          width: 380,
          type: "donut",
        },
        title: {
          text: "Masa Yoğunluğu",
        },
        theme: {
          palette: this.theme || "palette4",
        },
        labels: ["Dolu", "Boş"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
</script>
