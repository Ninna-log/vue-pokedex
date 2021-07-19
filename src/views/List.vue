<template>
  <div class="list">
    <h1>This is an about page</h1>
    <Loader />
    <p v-for="(pokemon, index ) in pokemons" :key="index">{{ index }} - {{ pokemon.name }}</p>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue'

export default {
  name: "Welcome",
  data() {
    return {
      pokemons: this.$store.getters.pokemons,
     };
  },
  components: {
    Loader
  },
  methods: {

  },
};
</script>

<style scoped>
</style>
