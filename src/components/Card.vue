<template>
  <div class="row pt-2 pb-1 justify-content-between">
    <div class="col">
      <h2>{{ pokemonName }}</h2>
    </div>
    <div class="col">
      <img src="@/assets/ellipse-20.png" alt="ellipse" />
      <img src="@/assets/vector.png" alt="vector" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["pokemon"],
  data() {
    return {};
  },
  computed: {
      pokemonName() {
        let str2 = this.pokemon.charAt(0).toUpperCase() + this.pokemon.slice(1);
        console.log(str2);
        return str2
      }
  }
};
</script>

<style scoped>
.row {
  background-color: #ffff;
  margin-top: 50px;
  box-shadow: 0 1px 8px 0 rgb(18 18 18 / 20%);
}

.col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.col img:nth-child(1) {
  z-index: -1;
}

.col img:nth-child(2) {
  z-index: 1;
}
</style>