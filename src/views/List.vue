<template>
  <loader
    v-if="loading"
    :options="defaultOptions"
    :height="220"
    :width="180"
    v-on:animCreated="handleAnimation"
  />
  <div class="list" v-if="!loading">
    <h1>This is an about page</h1>
    <p v-for="(pokemon, index) in pokemons" :key="index">
      {{ index }} - {{ pokemon.name }}
    </p>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/Loader.vue";
import animationData from "@/assets/loader.png";

export default {
  name: "Welcome",
  data() {
    return {
      pokemons: [],
      loading: false,
      defaultOptions: { animationData: animationData },
      animationSpeed: 1,
    };
  },
  components: {
    Loader,
  },
  created() {
    this.loading = true;
    setTimeout(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
          if(response.status != "200") {
            this.pokemons = response.data.results;
            console.log(response);
          } else {
            this.$store.dispatch("DO_ERROR");
          }
          
        })
        .catch((error) => {
          console.log(error);
          this.$store.dispatch("DO_ERROR");
        });
      this.loading = false;
    }, 5000);
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    stop: function () {
      this.anim.stop();
    },
    play: function () {
      this.anim.play();
    },
    pause: function () {
      this.anim.pause();
    },
    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed);
    },
  },
};
</script>

<style scoped>
</style>
