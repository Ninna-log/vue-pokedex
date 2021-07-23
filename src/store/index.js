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
    }
  },
  getters: {
    isLoading: state => state.isLoading,
    title: state => state.welcome.title,
    subtitle: state => state.welcome.subtitle,
    pokemons: state => state.list.pokemons,
    error1: state => state.error.title,
    error2: state => state.error.subtitle
  },
  modules: {
  }
})
