<template>
  <transition name="modal">
    <div class="modal-mask" v-if="show">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="close-container">
            <i class="fas fa-times-circle" @click="onClose"></i>
          </div>
          <div class="modal-header">
            <img src="@/assets/fondo.png" alt="fondo" />
          </div>

          <div class="modal-content">
            <div class="modal-body">
              <p>Name: {{ currentPokemon.name }}</p>
              <hr />
              <p>Weight: {{ currentPokemon.weight }}</p>
              <hr />
              <p>Height: {{ currentPokemon.height }}</p>
              <hr />
              <p>Types: {{ currentPokemon.types[0].type.name }}</p>
            </div>
          </div>
          <button label="Share to my friends"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Button from './Button.vue'
import { mapGetters } from "vuex";

export default {
  name: "ModalCustomComponent",
  components: {
    Button
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
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  box-sizing: border-box;
  position: relative;
}

.modal-container .modal-body {
  font-family: "BentonSansBBVA-Book", Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 17px;
}

.modal-header h3 {
  font-size: 26px;
  font-family: "BentonSansBBVA-Light";
  white-space: normal;
  object-fit: contain;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.2px;
  color: #121212;
  margin-top: 0;
}

.modal-header img {
  overflow: hidden;
  margin: -16px;
  height: 225px;
}

.modal-header.center h3 {
  text-align: center;
}
.modal-header.left h3 {
  text-align: left;
}
.modal-header.right h3 {
  text-align: right;
}

.modal-body {
  margin: 20px 0;
  max-height: 200px;
  width: 240px;
  margin-left: 85px;
}
.modal-body.scroll {
  overflow-y: auto;
}

.modal-footer.center {
  text-align: center;
}
.modal-footer.left {
  text-align: left;
}
.modal-footer.right {
  text-align: right;
}

/* Boton cerrar */
div.close-container {
  text-align: right;
  position: absolute;
  right: 40px;
  top: 40px;
}

div.close-container * {
  cursor: pointer;
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
    align-self: stretch;
    width: 100%;
  }

  .modal-container {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0;
  }

  .modal-content {
    flex: 1; /* Stretch */
    min-height: 1%; /* Hack: fuerza al hijo flex a tener altura máxima dentro de su contenedor */
    scroll-behavior: smooth;
    overflow: scroll;
    font-size: 15px;
    line-height: 24px;
    color: black;
    text-align: center;
    margin: auto !important;
    width: 80% !important;
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

  .modal-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .modal-header h3 {
    font-size: 16px;
    font-family: BentonSansBBVA-Medium, Helvetica, Arial, sans-serif;
    margin-top: 0px;
    margin-bottom: 0px;
    width: 80%;
  }

  .modal-header {
    box-shadow: 0 1px 0 0 #e9e9e9;
  }

  div.modal-header.center {
    padding: 0;
  }

  div.close-container {
    position: absolute;
    right: 16px;
    top: 13px;
  }

  .boton {
    grid-column: 2; /*Para poner los dos botones, poner 3.*/
    grid-row: 1;
  }

  .button-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 600px) {
  h3 {
    margin-top: 0;
    margin-bottom: 23px;
  }
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
</style>