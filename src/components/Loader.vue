<template>
  <div class="loader">
    <img src="@/assets/loader.png" alt="loader" />
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped>
.loader img {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  animation: loader 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}

@keyframes loader {
  5% {
    transform: scale(1.1);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}
</style>
