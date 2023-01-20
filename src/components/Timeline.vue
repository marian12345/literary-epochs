<script setup lang="ts">
import EraCard from "./EraCard.vue";
</script>

<template>
  <div class="grid-container">
    <EraCard name="Herbert" />
    <EraCard name="Klaus" />
    <EraCard name="Guenther" />
    <EraCard name="Karl" />
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  height: 100vh;
}
</style>
