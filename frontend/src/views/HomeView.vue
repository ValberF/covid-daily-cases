<template>
  <div class="home">
    <h1>Covid Daily Cases</h1>
    <div class="date-container">
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
      <div>
        <input
          name="accumulated"
          id="accumulated"
          @change="invertFlag"
          type="checkbox"
        />
        <label for="accumulated"
          >Buscar dados acumulados até a data escolhida</label
        >
      </div>
    </div>
    <MapComponent />
  </div>
</template>

<script>
import MapComponent from "../components/MapComponent.vue";
import axios from "axios";
import { variants } from "../utils/variants";
// import { formatDate } from "@/utils/formatDate";
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
      flag: false,
    };
  },
  methods: {
    filterDate(date) {
      this.$store.commit("setGlobalDate", date);
      axios
        .get(`http://localhost:3000/covid-cases?date=${date}`)
        .then((res) => {
          let countriessArray = [];
          for (let i = 0; i < res.data.length; i++) {
            if (!countriessArray.includes(res.data[i].location)) {
              this.countryCases.push(countriessArray);
              countriessArray = [];
              countriessArray.push(
                res.data[i].location,
                res.data[i].num_sequences_total
              );
            } else if (i == res.data.length - 1) {
              this.countryCases.push(countriessArray);
            } else {
              countriessArray.push(res.data[i].num_sequences_total);
            }
          }
          this.$store.commit("setCases", this.countryCases);
        });
    },
    getDates() {
      axios
        .get("http://localhost:3000/covid-cases")
        .then((res) => {
          res.data.forEach((element) => {
            if (!this.dates.includes(element.date)) {
              this.dates.push(element.date);
            }
          });
        })
        .then(() => {
          this.dates.sort();
        });
    },
    getVariants() {
      this.$store.commit("setVariants", variants);
    },
    invertFlag() {
      this.flag = !this.flag;
      this.$store.commit("setFlagAccumulated", this.flag);
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

.date-container {
  display: flex;
  flex-direction: column;
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
