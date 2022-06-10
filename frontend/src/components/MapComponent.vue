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
import { variantsObject } from "@/utils/variants";
import axios from "axios";

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
      variantsLocal: {},
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
    getCountry(country, date) {
      let auxArray = [];
      this.mapLocal = country
      // const auxObj = variantsObject;
      axios
        .get(`http://localhost:3000/covid-cases?location=${country}`)
        .then((res) => {
          for (let i = 0; i < res.data.length; ) {
            if (res.data[i].date <= date) {
              for (const [key] of Object.entries(variantsObject)) {
                variantsObject[key] += res.data[i].num_sequences_total;
                i++;
              }
            } else {
              break;
            }
          }

          for (const [key] of Object.entries(variantsObject)) {
            auxArray.push(variantsObject[key]);
            variantsObject[key] = 0;
          }

          console.log(auxArray)
          this.countryWithCases = auxArray;
        });
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

        if (this.flagAccumulated) {
          this.getCountry(e._tooltip.innerText, this.globalDate);
        } else {
          this.setCountry();
        }
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
    globalDate() {
      return this.$store.state.globalDate;
    },
    flagAccumulated() {
      return this.$store.state.flagAccumulated;
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
  padding: 15px 0;
}

#map {
  width: 90vw;
  height: 70vh;
}
</style>
