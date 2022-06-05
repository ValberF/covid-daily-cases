<template>
  <div class="map">
    <GChart :type="type" :data="data" :options="options" :settings="settings" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts/legacy";
import { chartType, chartOptions } from "./GoogleChartData";
import supabase from "@/api/supabase";

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
    async getDataMap() {
      const { data, error } = await supabase.from("Covid-cases").select("*");

      if (error) {
        console.log(error);
        return;
      }
      console.log(data[0]);
      this.data = [
        ["Country", "Covid"],
        [data[0].location, data[0].num_sequences_total],
      ];
    },
  },
  mounted() {
    this.getDataMap();
  },
};
</script>

<style></style>
