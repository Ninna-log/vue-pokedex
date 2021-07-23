<template>
  <button :value="label"></button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: String
  }
};
</script>

<style scoped>
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