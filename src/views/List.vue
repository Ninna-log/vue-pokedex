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
    <p v-for="(pokemon, index ) in pokemons" :key="index">{{ index }} - {{ pokemon.name }}</p>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue'
import animationData from '@/assets/loader.png'

export default {
  name: "Welcome",
  data() {
    return {
      pokemons: this.$store.getters.pokemons,
      loading: this.$store.getters.isLoading,
      defaultOptions: { animationData: animationData },
      animationSpeed: 1
     };
  },
  components: {
    Loader
  },
  created() {
    this.$store.dispatch("DO_BUSCAR_LISTA");
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },

    stop: function() {
      this.anim.stop();
    },

    play: function() {
      this.anim.play();
    },

    pause: function() {
      this.anim.pause();
    },

    onSpeedChange: function() {
      this.anim.setSpeed(this.animationSpeed);
    }
  },
};
</script>

<style scoped>
</style>
