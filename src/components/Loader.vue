<template>
  <div class="loader">
    <img src="@/assets/loader.png" alt="loader">
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped>
.loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform-origin: 40px 40px;
}
.loader img {
  position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.loader img:after,
.loader img:before {
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background: black;
}
.loader img:before {
  left: -24px;
  border-radius: 50% 0 0 50%;
}
.loader img:after {
  top: -24px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
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
