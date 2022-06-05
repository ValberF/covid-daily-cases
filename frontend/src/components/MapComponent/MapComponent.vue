<template>
  <div class="map">
    <GChart :type="type" :data="data" :options="options" :settings="settings" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts/legacy";
import { chartType, chartOptions } from "./GoogleChartData";
import axios from 'axios'

export default {
  name: "MapComponent",
  components: {
    GChart,
  },
  data() {
    return {
      type: chartType,
      data: [],
      options: chartOptions,
      settings: {
        packages: ["geochart"],
      },
    };
  },
  methods: {
    getDataMap() {
      axios.get('http://localhost:3000/covid-cases?date=2020-07-06').then(res => {
        console.log(res.data)
        this.data = [["Country", "Cases"],[res.data[0].location, res.data[0].num_sequences_total]]
      })  
    },
  },
  mounted() {
    this.getDataMap();
  },
};
</script>

<style></style>
