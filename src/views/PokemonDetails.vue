<template>
  <h1>Pokemon details page</h1>
  <p>The pokemon id is {{ $route.params.id }}</p>
</template>

<script>
import Loader from '@/components/Loader.vue'

export default {
    name: 'PokemonDetails',
    components: {
    }

}
</script>

<style>

</style>