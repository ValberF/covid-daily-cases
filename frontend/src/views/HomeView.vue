<template>
  <div class="home">
    <h1>Covid Daily Cases</h1>
    <input
      type="date"
      min="2020-01-01"
      max=""
      v-model="data"
      @change="filterData(data)"
    />
    <MapComponent />
  </div>
</template>

<script>
import MapComponent from "../components/MapComponent/MapComponent.vue";
import axios from "axios";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    MapComponent,
  },
  data() {
    return {
      datas: ["2020-07-06", "2020-08-31", "2020-09-28"],
      data: "",
      countryCases: [],
    };
  },
  methods: {
    filterData(data) {
      axios
        .get(`http://localhost:3000/covid-cases?date=${data}`)
        .then((res) => {
          let countrysArray = [];
          for (let i = 0; i < res.data.length - 1; i++) {
            if (!countrysArray.includes(res.data[i].location)) {
              this.countryCases.push(countrysArray);
              countrysArray = []
              countrysArray.push(
                res.data[i].location,
                res.data[i].num_sequences_total
              );
            } else {
              countrysArray.push(res.data[i].num_sequences_total);
            }
          }

          console.log(this.countryCases);
          this.$store.commit('setCases', this.countryCases)
        });
    },
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
