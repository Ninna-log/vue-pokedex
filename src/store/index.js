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
    pokemon: {},
    error: {
      title: "Uh-oh!",
      subtitle: "There was an error!"
    },
    genericError: false
  },
  mutations: {
    [MUTATIONS.ON_ERROR](state, payload) {
      state.genericError = payload;
    },
    [MUTATIONS.ON_IS_LOADING](state, payload) {
      state.isLoading = payload;
    },
    [MUTATIONS.ON_CLEAR_SEARCH] (state) {
        state.pokemon = {}
    },
    [MUTATIONS.ON_SEARCH_POKEMONS](state, payload) {
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
    [ACTIONS.DO_CLEAR_SEARCH](context) {
      context.commit(MUTATIONS.ON_CLEAR_SEARCH);
    },
    [ACTIONS.DO_SEARCH_LIST](context) {
      router.push({ name: 'List' })
    },
    [ACTIONS.DO_SEARCH_POKEMONS](context, payload) {
      context.commit(MUTATIONS.ON_IS_LOADING, true);
      setTimeout(() => {
        axios
          .get("https://pokeapi.co/api/v2/pokemon")
          .then((response) => {
            let pokemons = response.data.results;
            context.commit(MUTATIONS.ON_SEARCH_POKEMONS, pokemons);
          })
          .catch((error) => {
            context.commit(MUTATIONS.ON_ERROR, true);
          });
        context.commit(MUTATIONS.ON_IS_LOADING, false);
      }, 5000);
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
        })
        .catch((error) => {
          context.commit(MUTATIONS.ON_ERROR, true);
          console.log(error);
        });
    }
  },
  getters: {
    GET_LOADING: (state) => {
      return state.isLoading
    },
    GET_ERROR: (state) => {
      return state.genericError
    },
    GET_POKEMONS: (state) => {
      return state.list.pokemons
    },
    GET_POKEMON: (state) => {
      return state.pokemon
    },   
    GET_TITLE: (state) => {
      return state.welcome.title
    },
    GET_SUBTITLE: (state) => {
      return state.welcome.subtitle
    },
    GET_ERROR1: (state) => {
      return state.error.title
    },
    GET_ERROR2: (state) => {
      return state.error.subtitle
    }
  },
  modules: {
  }
})
