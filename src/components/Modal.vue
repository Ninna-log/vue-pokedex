<template>
  <transition name="modal">
    <div class="modal-mask" v-if="show">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="close-container">
            <i class="fas fa-times-circle" @click="onClose"></i>
          </div>
          <div class="modal-header">
            <img class="fondo" src="@/assets/fondo.png" alt="fondo" />
            <img class="pokemon" :src="pokemonImagen" alt="pokemon" />
          </div>

          <div class="modal-content">
            <div class="modal-body">
              <div class="name">
                <img src="@/assets/0.png" alt="name" />
                <p>Name: {{ pokemonBody.name }}</p>
              </div>
              <hr />
              <div class="weight">
                <img src="@/assets/weight.png" alt="weight" />
                <p>Weight: {{ pokemonBody.weight }}</p>
              </div>
              <hr />
              <div class="height">
                <img src="@/assets/height.png" alt="height" />
                <p>Height: {{ pokemonBody.height }}</p>
              </div>
              <hr />
              <div class="types">
                <img :src="type" alt="type" />
                <p>Types: {{ pokemonBody.type }}</p>
              </div>
            </div>
          </div>
          <button label="Share to my friends" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Button from "./Button.vue";
import { pokemons, types } from "../config/pokemons";
import { mapGetters } from "vuex";

export default {
  name: "ModalCustomComponent",
  components: {
    Button,
  },
  props: {
    pokemon: String,
    bodyScroll: {
      type: Boolean,
      default: true,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  beforeUpdate() {
    if (this.show) {
      document.getElementsByTagName("html")[0].classList.add("lock-scroll");
    }
  },
  mounted() {
    document.body.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) {
        this.onClose();
      }
    });
  },
  computed: {
    ...mapGetters({
      currentPokemon: "GET_POKEMON_DETAILS",
    }),
    pokemonImagen() {
      for (const pokemon in pokemons) {
        if (pokemons.hasOwnProperty(pokemon)) {
          if (pokemon === this.currentPokemon.name)
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons[pokemon]}.png`;
        }
      }
    },
    type() {
      let str = `@/assets/types/air.png`
      return str
    },
    pokemonBody() {
      let name =
        this.currentPokemon.name.charAt(0).toUpperCase() +
        this.currentPokemon.name.slice(1);
      let type =
        this.currentPokemon.types[0].type.name.charAt(0).toUpperCase() +
        this.currentPokemon.types[0].type.name.slice(1);
      let weight = this.currentPokemon.weight;
      let height = this.currentPokemon.height;

      let pokemon = {
        name: name,
        weight: weight,
        height: height,
        type: type,
      };

      return pokemon;
    },
  },
  methods: {
    onClose() {
      document.getElementsByTagName("html")[0].classList.remove("lock-scroll");
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
  justify-content: center;
}

.modal-wrapper {
  align-self: center;
}

.modal-container {
  text-align: left;
  margin: 0 auto;
  background-color: #fff;
  transition: all 0.3s ease;
  position: relative;
}

.modal-header img {
  overflow: hidden;
  margin: -16px;
  height: 225px;
}

.modal-body {
  margin: 20px 0;
}
.modal-body.scroll {
  overflow-y: auto;
}

/* Boton cerrar */
div.close-container {
  cursor: pointer;
  text-align: right;
  position: absolute;
  z-index: 3;
  right: 40px;
  top: 40px;
}

div.close-container i {
  font-size: 25px;
  color: #fff;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media screen and (max-width: 600px) {
  /* En mobile el modal ocupa toda la pantalla */
  .modal-wrapper {
    width: 90%;
  }

  .modal-header {
    overflow: hidden;
    width: 100%;
  }

  .modal-container {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .modal-content {
    flex: 1; /* Stretch */
    min-height: 1%; /* Hack: fuerza al hijo flex a tener altura máxima dentro de su contenedor */
    scroll-behavior: smooth;
    overflow: scroll;
  }

  .modal-content form {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .modal-body {
    flex: 1;
    max-height: none;
  }

  div.close-container {
    position: absolute;
    right: 16px;
    top: 13px;
  }
}

@media screen and (min-width: 600px) {
  .modal-container {
    width: 420px;
    height: 520px;
  }

  .boton {
    width: 163px;
  }
}

.button {
  width: 145px;
  height: 60px;
}

.modal-header {
  display: flex;
  justify-content: center;
}
.pokemon {
  z-index: 3;
  position: absolute;
}
.fondo {
  z-index: 1;
  position: relative;
}
div.name,
div.weight,
div.height,
div.types {
  display: inline-flex;
}
div.name img,
div.weight img,
div.height img,
div.types img {
  width: 40px;
}

</style>