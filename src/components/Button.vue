<template>
  <button 
      class="button"
      type="button"
      v-bind:style="{ backgroundColor: color, width: width, height: height }"
      :value="label"      
  > {{ label }} </button>
</template>

<script>
export default {
  name: "Button-app",
  props: {
    label: String,
    color: {
      type: String,
      default: "#f22539"
    },
    width: String,
    height: String,
  },
  methods: {
    goBack() {
      if(this.label == 'Go back home')
        this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.button {
  border: none;
  border-radius: 20px;
  font-size: 18px;
  font-style: normal;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
  color: #ffff;
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