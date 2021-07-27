import { createStore } from 'vuex'
import axios from 'axios';
import router from '@/router'
import * as ACTIONS from "../config/action-types";
import * as MUTATIONS from "../config/mutation-types";

export default createStore({
  state: {
    isLoading: false,
    welcome: {
      title: "Welcome to Pokédex",
      subtitle: "The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world."
    },
    list: {
      pokemons: []
    },
    pokemon: {
      abilities: [],
      base_experience: "",
      forms: [],
      game_indices: [],
      height: "",
      held_items: [],
      moves: [],
      name: "",
      stats: [],
      types: [],
      weight: ""
    },
    error: {
      title: "Uh-oh!",
      subtitle: "There was an error!"
    }
  },
  mutations: {
    [MUTATIONS.ON_IS_LOADING](state, payload) {
      state.isLoading = payload;
    },
    [MUTATIONS.ON_BUSCAR_LISTA](state, payload) {
      state.list.pokemons = payload;
    },
    [MUTATIONS.ON_SEARCH_POKEMON](state, payload) {
      state.pokemon = payload;
    }
  },
  actions: {
    [ACTIONS.DO_ERROR](context) {
      router.push({ path: '/error-list-result' })
    },
    [ACTIONS.DO_IS_LOADING](context, payload) {
      context.commit(MUTATIONS.ON_IS_LOADING, payload);
    },
    [ACTIONS.DO_BUSCAR_LISTA](context) {
      router.push({ name: 'List' })
    },
    [ACTIONS.DO_SEARCH_POKEMON](context, payload) {
      axios
        .get(`${payload.url}`)
        .then((response) => {
          let pokemon = response.data;
          pokemon = {
            abilities: pokemon.abilities,
            base_experience: pokemon.base_experience,
            forms: pokemon.forms,
            game_indices: pokemon.game_indices,
            height: pokemon.height,
            held_items: pokemon.held_items,
            moves: pokemon.moves,
            name: pokemon.name,
            stats: pokemon.stats,
            types: pokemon.types,
            weight: pokemon.weight
          }
          context.commit(MUTATIONS.ON_SEARCH_POKEMON, pokemon);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  getters: {
    isLoading: state => state.isLoading,
    title: state => state.welcome.title,
    subtitle: state => state.welcome.subtitle,
    pokemons: state => state.list.pokemons,
    pokemon: state => state.pokemon,
    error1: state => state.error.title,
    error2: state => state.error.subtitle
  },
  modules: {
  }
})
