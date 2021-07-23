<template>
    <div>
        <h1>{{ title }}</h1>
        <h3>{{ subtitle }}</h3>
    </div>
</template>


<script>
export default {
  name: "MensajeError",
  data() {
    return {
        title: this.$store.getters.error1,
        subtitle: this.$store.getters.error2,
    };
  },
  components: {},
  methods: {

  },
};
</script>

<style scoped>

</style>