<template>
  <div class="welcome">
    <div class="image">
      <img alt="pikachu" class="pikachu" src="../assets/mask-group.png" />
      <img alt="ellipse" class="ellipse" src="../assets/ellipse-10.png" />
    </div>
    <div class="text">
      <h1 class="title">{{ title }}</h1>
      <h3 class="subtitle">{{ subtitle }}</h3>
    </div>
    <button class="button" @click="getStarted">Get started</button>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      title: this.$store.getters.title,
      subtitle: this.$store.getters.subtitle,
    };
  },
  components: {},
  methods: {
    getStarted() {
      this.$store.dispatch("DO_BUSCAR_LISTA");
    },
  },
};
</script>

<style scoped>
.welcome {
  margin-top: 88px;
}
.image {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pikachu {
  z-index: 3;
  position: absolute;
}
.ellipse {
  z-index: 1;
  position: relative;
  padding-top: 56px;
  padding-right: 20px;
}
.title {
  color: #353535;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: center;
}
.subtitle {
  color: #5e5e5e;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
}
.button {
  width: 145px;
  height: 60px;
  border: none;
  border-radius: 20px;
  background-color: #f22539;
  color: #ffff;
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
.button:active {
  transform: scale(0.98);
  /* Scaling button to 0.98 to its original size */
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  /* Lowering the shadow */
}
</style>
