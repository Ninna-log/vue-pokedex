<template>
  <div>
    <search-bar/>
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }}</h3>
  </div>
  <button-app class="button" label="Go back home"></button-app>
</template>


<script>
import SearchBar from "@/components/SearchBar";
import ButtonApp from "@/components/Button";

export default {
  name: "MensajeError",
  data() {
    return {
      title: this.$store.getters.error1,
      subtitle: this.$store.getters.error2,
    };
  },
  components: {
    SearchBar,
    ButtonApp,
  },
  methods: {},
};
</script>

<style scoped>
h1 {
  color: #353535;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: center;
}

h3 {
  color: #5e5e5e;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
}

.button {
  width: 150px;
  height: 45px;
  color: #ffff;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  font-style: normal;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  outline: none;
  transition: 0.1s all;
}
</style>