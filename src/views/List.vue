<template>
  <div class="container-fluid">
    <loader
      v-if="loader && !error"
      :options="defaultOptions"
      :height="220"
      :width="180"
      v-on:animCreated="handleAnimation"
    />
    <div class="list" v-if="!loader && !error">
      <search-bar @clickSearch="searchPokemon" />
      <card 
        v-for="(pokemon, index) in pokemons"
        :key="index"
        :pokemon="pokemon.name"
      />
    </div>
    <error 
      v-if="error"
    />
  </div>
</template>

<script>
import Loader from "@/components/Loader"
import animationData from "@/assets/loader.png"
import SearchBar from "@/components/SearchBar"
import Card from "../components/Card.vue"
import { mapGetters } from 'vuex'
import Error from "../components/Error.vue"

export default {
  name: "Welcome",
  data() {
    return {
      defaultOptions: { animationData: animationData },
      animationSpeed: 1,
    };
  },
  components: {
    Loader,
    SearchBar,
    Card,
    Error
  },  
  computed: {
    ...mapGetters({    
        loader: 'GET_LOADING',  
        error: 'GET_ERROR',  
        pokemonList: 'GET_POKEMONS',
        currentPokemon: 'GET_POKEMON'
    }),
    pokemons() {
      if(this.currentPokemon.name) {
        let pokemon = []
        pokemon.push(this.currentPokemon)
        return pokemon
      } else {
        return this.pokemonList        
      }
    }
  },
  created() {
    this.$store.dispatch("DO_SEARCH_POKEMONS");    
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
    }
  },
};
</script>

<style scoped>
.container-fluid {
  width: 50%;
}
</style>
