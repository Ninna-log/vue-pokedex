<template>
  <div class="list">
    <h1>This is an about page</h1>
    <p v-for="(pokemon, index ) in pokemons" :key="index">{{ index }} - {{ pokemon.name }}</p>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      pokemons: this.$store.getters.pokemons,
     };
  },
  components: {},
  methods: {

  },
};
</script>

<style scoped>
</style>
