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
    }
  },
  mutations: {
    [MUTATIONS.ON_IS_LOADING](state, payload) {
      state.isLoading = payload;
    },
    [MUTATIONS.ON_BUSCAR_LISTA](state, payload) {
      state.list.pokemons = payload;
    }
  },
  actions: {
    [ACTIONS.DO_BUSCAR_LISTA](context) {
      context.commit('ON_IS_LOADING', true);
      axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        let pokemons = response.data.results;
        console.log(response.data.results);
        context.commit('ON_BUSCAR_LISTA', pokemons);
        context.commit('ON_IS_LOADING', false);
        router.push({name: 'List'})
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  getters: {
    title: state => state.welcome.title,
    subtitle: state => state.welcome.subtitle,
    pokemons: state => state.list.pokemons,
    isLoading: state => state.isLoading
  },
  modules: {
  }
})
