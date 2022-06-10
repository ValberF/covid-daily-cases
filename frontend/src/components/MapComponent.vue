<template>
  <div class="map">
    <div id="map">
      <InfoComponent :country="mapLocal" :variantsCases="countryWithCases" />
    </div>
  </div>
</template>

<script>
import InfoComponent from "./InfoComponent.vue";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world-merc";

export default {
  name: "MapComponent",
  components: {
    // GChart,
    InfoComponent,
  },
  data() {
    return {
      map: {},
      countryWithCases: [],
      mapLocal: "",
    };
  },
  methods: {
    setCountry() {
      if (this.cases) {
        this.cases.forEach((element) => {
          if (element[0] == this.country) {
            this.mapLocal = element[0];
            this.countryWithCases = element;
          }
        });
      }
    },
  },
  mounted() {
    this.map = new jsVectorMap({
      selector: "#map",
      map: "world_merc",
      zoomButtons: false,
      regionStyle: {
        hover: {
          fill: "green",
        },
      },
      onRegionTooltipShow: (e) => {
        this.$store.commit("setCountry", e._tooltip.innerText);
        this.setCountry();
      },
    });
  },
  computed: {
    cases() {
      return this.$store.state.cases;
    },
    country() {
      return this.$store.state.country;
    },
  },
};
</script>

<style>
.map {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(44, 41, 41);
  border-radius: 10px;
}

#map {
  width: 90vw;
  height: 70vh;
}
</style>
