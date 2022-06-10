<template>
  <div class="home">
    <h1>Covid Daily Cases</h1>
    <select
      @change="filterDate(selectedDate)"
      v-model="selectedDate"
      name="select-dates"
      id="select-dates"
    >
      <option v-for="date in dates" :key="date" :value="date">
        {{ date }}
      </option>
    </select>
    <MapComponent />
  </div>
</template>

<script>
import MapComponent from "../components/MapComponent.vue";
import axios from "axios";
import { variants } from "../utils/variants";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    MapComponent,
  },
  data() {
    return {
      dates: [],
      selectedDate: "",
      countryCases: [],
    };
  },
  methods: {
    filterDate(date) {
      axios
        .get(`http://localhost:3000/covid-cases?date=${date}`)
        .then((res) => {
          let countrysArray = [];
          for (let i = 0; i < res.data.length - 1; i++) {
            if (!countrysArray.includes(res.data[i].location)) {
              this.countryCases.push(countrysArray);
              countrysArray = [];
              countrysArray.push(
                res.data[i].location,
                res.data[i].num_sequences_total
              );
            } else {
              countrysArray.push(res.data[i].num_sequences_total);
            }
          }
          this.$store.commit("setCases", this.countryCases);
        });
    },
    getDates() {
      axios.get("http://localhost:3000/covid-cases").then((res) => {
        res.data.forEach((element) => {
          if (!this.dates.includes(element.date)) {
            this.dates.push(element.date);
          }
        });
      });
    },
    getVariants() {
      this.$store.commit("setVariants", variants);
    },
  },
  mounted() {
    this.getDates();
    this.getVariants();
  },
  computed: {
    cases() {
      return this.$store.state.cases;
    },
    country() {
      return this.$store.state.country;
    },
    variants() {
      return this.$store.state.variants;
    },
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 90vh;
}

#select-dates {
  font-size: 24px;
  padding: 5px;
  border-radius: 5px;
  width: 10%;
  align-self: center;
  outline: none;
}
</style>
