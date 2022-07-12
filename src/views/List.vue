<template>
  <div class="container">
    <loader v-if="loader && !error" :height="220" :width="180" />
    <search-bar
      v-if="(!loader && !error) || (!loader && error)"
      @clickSearch="searchPokemon"
    />
    <div class="list" v-if="!loader && !error">
      <card
        v-for="(pokemon, index) in pokemons"
        :key="index"
        :pokemon="pokemon.name"
        @click="showPokemon(pokemon.name)"
      />
    </div>
    <div class="error" v-if="error">
      <error />
    </div>
    <div v-if="!loader && !error" class="footer">
      <button-app
        v-for="(btn, index) in buttons"
        :key="index"
        class="button"
        :label="btn"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loader from "@/components/Loader";
import SearchBar from "@/components/SearchBar";
import Card from "../components/Card.vue";
import ButtonApp from "../components/Button.vue";
import Error from "../components/Error.vue";

export default {
  name: "Welcome",
  data() {
    return {
      show: false,
      showList: Boolean,
    };
  },
  components: {
    Loader,
    SearchBar,
    Card,
    ButtonApp,
    Error,
  },
  computed: {
    ...mapGetters({
      loader: "GET_LOADING",
      error: "GET_ERROR",
      pokemonList: "GET_POKEMONS",
      currentPokemon: "GET_POKEMON",
    }),
    pokemons() {
      if (this.currentPokemon.name) {
        let pokemon = [];
        pokemon.push(this.currentPokemon);
        return pokemon;
      } else {
        return this.pokemonList;
      }
    },
    buttons() {
      let btn = ["All", "Favorites"];
      return btn;
    },
  },
  created() {
    this.$store.dispatch("DO_SEARCH_POKEMONS");
  },
  methods: {
    searchPokemon(query) {
      if (query) {
        const payload = {
          url: `https://pokeapi.co/api/v2/pokemon/${query}`,
          query: query,
        };
        this.$store.dispatch("DO_SEARCH_POKEMON", payload);
      }
    },
    showPokemon(query) {
      if (query) {
        const payload = {
          url: `https://pokeapi.co/api/v2/pokemon/${query}`,
          query: query,
        };
        this.$store.dispatch("DO_SHOW_POKEMON", payload);
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 60%;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 68px;
  width: 100%;
  padding: 15px;
  overflow: hidden;
  background-color: #fff;
}

.button {
  width: 25%;
  height: 40px;
  margin: auto 45px;
}

@media screen and (max-width: 600px) {
  .button {
    width: 38%;
    margin: 10px 15px;
  }
}

@media screen and (max-width: 600px) {
  .footer {
    padding: 5px;
  }
}
</style>
