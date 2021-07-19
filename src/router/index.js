import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import List from '../views/List.vue'
import PokemonDetails from '../views/PokemonDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,    
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/pokemons/:id',
    name: 'pokemonDetails',
    component: PokemonDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: 'history'
})

export default router
