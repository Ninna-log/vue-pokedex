<template>
  <div class="container-fluid">
    <loader
      v-if="loading"
      :options="defaultOptions"
      :height="220"
      :width="180"
      v-on:animCreated="handleAnimation"
    />
    <div class="list" v-if="!loading">
      <search-bar @clickSearch="searchPokemon" />
      <card v-for="(pokemon, index) in pokemons" :key="index"
      :pokemon="pokemon.name"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/Loader";
import animationData from "@/assets/loader.png";
import SearchBar from "@/components/SearchBar";
import Card from "../components/Card.vue";

export default {
  name: "Welcome",
  data() {
    return {
      pokemons: [],
      currentPokemon: this.$store.getters.pokemon,
      loading: false,
      defaultOptions: { animationData: animationData },
      animationSpeed: 1,
    };
  },
  components: {
    Loader,
    SearchBar,
    Card
  },
  created() {
    this.loading = true;
    setTimeout(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
          this.pokemons = response.data.results;
        })
        .catch((error) => {
          this.$store.dispatch("DO_ERROR");
        });
      this.loading = false;
    }, 5000);
  },
  computed: {
    pokemon() {
      return this.pokemons = this.$store.getters.pokemon;
    },
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    stop: function () {
      this.anim.stop();
    },
    play: function () {
      this.anim.play();
    },
    pause: function () {
      this.anim.pause();
    },
    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed);
    },
    searchPokemon(query) {
      if (query) {
        const payload = {
          url: `https://pokeapi.co/api/v2/pokemon/${query}`,
          query: query,
        };
        this.$store.dispatch("DO_SEARCH_POKEMON", payload);
      }
    },
  },
};
</script>

<style scoped>
.container-fluid {
  width: 50%;
}
</style>
