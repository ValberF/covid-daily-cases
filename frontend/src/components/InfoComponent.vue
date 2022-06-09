<template>
  <div class="info">
      <h5>{{ country || "Sem data escolhida ou a data não contém dados"}}</h5>
      <span>Alpha: {{ variantsCases[1] }}</span>
      <span>B.1.1.277: {{ variantsCases[2] }}</span>
      <span>B.1.1.302: {{ variantsCases[3] }}</span>
      <span>B.1.1.519: {{ variantsCases[4] }}</span>
      <span>B.1.160: {{ variantsCases[5] }}</span>
      <span>B.1.177: {{ variantsCases[6] }}</span>
      <span>B.1.221: {{ variantsCases[7] }}</span>
      <span>B.1.258: {{ variantsCases[8] }}</span>
      <span>B.1.367: {{ variantsCases[9] }}</span>
      <span>B.1.620: {{ variantsCases[10] }}</span>
      <span>Beta: {{ variantsCases[11] }}</span>
      <span>Delta: {{ variantsCases[12] }}</span>
      <span>Epsilon: {{ variantsCases[13] }}</span>
      <span>Eta: {{ variantsCases[14] }}</span>
      <span>Gamma: {{ variantsCases[15] }}</span>
      <span>Iota: {{ variantsCases[16] }}</span>
      <span>Kappa: {{ variantsCases[17] }}</span>
      <span>Lambda: {{ variantsCases[18] }}</span>
      <span>Mu: {{ variantsCases[19] }}</span>
      <span>Omicron: {{ variantsCases[20] }}</span>
      <span>S:677H.Robin1: {{ variantsCases[21] }}</span>
      <span>S:677P.Pelican: {{ variantsCases[22] }}</span>
      <span>others: {{ variantsCases[23] }}</span>
      <span>non_who: {{ variantsCases[24] }}</span>
  </div>
</template>

<script>
export default {
    name: 'InfoComponent',
    props: {
        country: String,
        variantsCases: []
    }
}
</script>

<style>
.info {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 180px;
    height: 500px;
    bottom: 150px;

    padding: 0 5px 15px 15px;
    border: 1px solid #000; 
    border-radius: 15px;
}

</style>