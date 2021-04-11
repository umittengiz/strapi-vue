<template>
  <div id="chart">
    <apexchart
      type="area"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "ApexChart",
  props: ['theme'],
  data() {
    return {
      chartData: {
        gun: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        tutar: [
          2113,
          1785,
          1816,
          1453,
          1971,
          2450,
          2602,
          1873,
          1955,
          1713,
          2023,
          2298,
          1856,
          1913,
        ],
      },
      // veri: [
      //   { gun: 1, tutar: 2113 },
      //   { gun: 2, tutar: 1785 },
      //   { gun: 3, tutar: 1816 },
      //   { gun: 4, tutar: 1453 },
      //   { gun: 5, tutar: 1971 },
      //   { gun: 6, tutar: 2450 },
      //   { gun: 7, tutar: 2602 },
      //   { gun: 8, tutar: 1873 },
      //   { gun: 9, tutar: 1955 },
      //   { gun: 10, tutar: 1713 },
      //   { gun: 11, tutar: 2023 },
      //   { gun: 12, tutar: 2298 },
      //   { gun: 13, tutar: 1856 },
      //   { gun: 14, tutar: 1913 },
      // ],
      series: [
        {
          name: "Satış",
          data: [
            2113,
            1785,
            1816,
            1453,
            1971,
            2450,
            2602,
            1873,
            1955,
            1713,
            2023,
            2298,
            1856,
            1913,
          ],
        },
      ],

      chartOptions: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        theme: {
          palette: this.theme || "palette2",
        },

        // title: {
        //   text: "Fundamental Analysis of Stocks",
        //   align: "left",
        // },
        // subtitle: {
        //   text: "Price Movements",
        //   align: "left",
        // },
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        xaxis: {
          type: "days",
        },
        yaxis: {
          opposite: false,
        },
        legend: {
          horizontalAlign: "left",
        },
      },
    };
  },
};
</script>
