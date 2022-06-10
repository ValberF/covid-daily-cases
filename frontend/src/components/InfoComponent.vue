<template>
  <div class="info">
    <h3>{{ country || "Sem data escolhida" }}</h3>
    <span v-for="(variant, index) in variants" :key="index">
      {{ variant }}: {{ variantsCases[index + 1] || 'Sem dados'}}</span
    >
  </div>
</template>

<script>
export default {
  name: "InfoComponent",
  props: {
    country: String,
    variantsCases: [],
  },
  computed: {
    variants() {
      return this.$store.state.variants;
    },
  },
};
</script>

<style>
.info {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 200px;
  height: 550px;
  bottom: 150px;

  padding: 0 5px 15px 15px;
  border: 1px solid #000;
  background-color: #fff;
  border-radius: 10px;
}
</style>
