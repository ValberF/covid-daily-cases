<template>
  <div class="home">
    <h1>Covid Daily Cases</h1>
    <MapComponent />
  </div>
</template>

<script>
import MapComponent from '../components/MapComponent/MapComponent.vue';
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    MapComponent
}
}
</script>
