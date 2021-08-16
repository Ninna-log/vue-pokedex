<template>
  <div class="container-fluid">
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }}</h3>
    <button-app 
      class="button" 
      label="Go back home"
      @click="goBack()"
    >
    </button-app>
  </div>  
</template>

<script>
import ButtonApp from "@/components/Button";
import { mapGetters } from "vuex";

export default {
  name: "Error",
  data() {
    return {};
  },
  components: {
    ButtonApp,
  },
  computed: {
    ...mapGetters({
      title: "GET_ERROR1",
      subtitle: "GET_ERROR2",
    }),
  },
  methods: {
    goBack() {
      this.$router.go('/list')
    }
  }
};
</script>

<style scoped>
.container-fluid {
  margin-top: 7rem;
}
</style>