<template>
  <div class="map">
    <div id="map">
      <InfoComponent :country="mapLocal" :variantsCases="countryWithCases"/>
    </div>
  </div>
</template>

<script>
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world-merc";
import InfoComponent from "../InfoComponent.vue";

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
      mapLocal: ''
    };
  },
  mounted() {
    this.map = new jsVectorMap({
      selector: "#map",
      map: "world_merc",
      zoomOnScroll: false,
      zoomButtons: false,
      onRegionTooltipShow: (e) => {
        this.$store.commit("setCountry", e._tooltip.innerText);

        if (this.cases) {
          this.cases.forEach((element) => {
            if(element[0] == this.country) {
              this.mapLocal = element[0]
              this.countryWithCases = element
            }
          });
        }

        console.log(this.countryWithCases)
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
}

#map {
  width: 95vw;
  height: 80vh;
}
</style>
