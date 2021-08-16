<template>
  <div class="container welcome">
    <div class="image">
      <img alt="pikachu" class="pikachu" src="../assets/mask-group.png" />
      <img alt="ellipse" class="ellipse" src="../assets/ellipse-10.png" />
    </div>
    <div class="text">
      <h1 class="title">{{ title }}</h1>
      <h3 class="subtitle">{{ subtitle }}</h3>
    </div>
    <button-app class="button" label="Get starterd" @click="getStarted"></button-app>
  </div>
</template>

<script>
import ButtonApp from "@/components/Button"
import { mapGetters } from 'vuex'

export default {
  name: "Welcome",
  data() {
    return {

    };
  },
  components: {
    ButtonApp
  },
  computed: {
    ...mapGetters({    
        title: 'GET_TITLE',
        subtitle: 'GET_SUBTITLE'
    }),
  },
  methods: {
    getStarted() {
      this.$store.dispatch("DO_SEARCH_LIST");
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
  margin-top: revert;
}
.subtitle {
  color: #5e5e5e;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  margin: 16px 0;
}
.button {
  width: 145px;
  height: 60px;
}
</style>
