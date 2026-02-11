<script setup>
import theAwakening from "@/assets/gifs/theAwakening.gif";
</script>

<template>
  <div class="loading-screen">
    <div class="content">
      <img :src="theAwakening" alt="Animation" class="animationGif" />
      <h1>Waking up server…</h1>
      <small>This may take a few seconds</small>
    </div>
  </div>
</template>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;

  color: white;
  display: grid;
  place-items: center;
  z-index: 9999;
}

.content {
  text-align: center;
}

.animationGif {
  max-width: 40%;
  height: auto;
  margin-bottom: 1rem;
}
</style>
