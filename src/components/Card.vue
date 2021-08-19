<template>
  <div>
    <div class="row pt-2 pb-1 justify-content-between" @click="onOpen">
      <div class="col">
        <h2>{{ pokemonName }}</h2>
      </div>
      <div class="col">
        <img src="@/assets/vector.png" alt="vector" />
      </div>
    </div>
    <modal
    :body-scroll="true"
    @close="onClose"
    :show="show"
    :doSomething="onClose"
    :pokemon="pokemon"
  />
  </div>  
</template>
<script>
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
    pokemonName() {
      let str2 = this.pokemon.charAt(0).toUpperCase() + this.pokemon.slice(1);
      return str2;
    },
  },
  methods: {
    onOpen() {
      this.show = true;
    },
    onClose() {
      this.show = !this.show;
    },
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

.col img:nth-child(1) {
  z-index: -1;
}

.col img:nth-child(2) {
  z-index: 1;
}
</style>