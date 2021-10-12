<template>
  <div>
    <div class="row pt-2 pb-1 justify-content-between" @click="onOpen">
      <div class="col">
        <h2>{{ pokemonName }}</h2>
      </div>
      <div class="col" @click="makeFavorite(pokemon)">
        <i class="fas fa-star" id="non-active"></i>
      </div>
    </div>
    <modal
    :body-scroll="true"
    @close="onClose"
    :show="show"
    :foodRange="show"
    :pokemon="pokemon"
  />
  </div>  
</template>
<script>
import { mapGetters } from "vuex";
import Modal from "./Modal.vue"
export default {
  name: "Card",
  props: {
    pokemon: String,
  },
  components: {
    Modal
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapGetters({
      favorites: "GET_FAVORITES"
    }),
    pokemonName() {
      let str2 = this.pokemon.charAt(0).toUpperCase() + this.pokemon.slice(1);
      return str2;
    }
  },
  methods: {
    onOpen() {
      this.show = true;
    },
    onClose() {
      this.show = !this.show;
    },
    makeFavorite(pokemon) {
      document.getElementById("non-active").style.color('yellow')
      this.$store.dispatch("DO_SAVE_FAVORITE_POKEMON", pokemon);
    }
  },
};
</script>

<style scoped>
.row {
  cursor: pointer;
  background-color: #ffff;
  margin-top: 50px;
  box-shadow: 0 1px 8px 0 rgb(18 18 18 / 20%);
}

.row:hover {
  transform: scale(1.1);
}

.col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.col h2{
  font-size: 1.1rem;
}

.col img:nth-child(1) {
  z-index: -1;
}

.col img:nth-child(2) {
  z-index: 1;
}
</style>