<script setup lang="ts">
import EraCard from "./EraCard.vue";
import jsonData from "../data/eras.json";
type era = { id: number; name: string; timePeriod: string; gridArea: string };
let cards: era[] = jsonData;
</script>

<template>
  <div class="grid-container">
    <EraCard
      v-for="card in cards"
      :key="card.id"
      :era="card"
      :class="'grid-item-' + card.id"
      :style="{ 'grid-area': card.gridArea }"
    />
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;

  grid-template-areas:
    "a . . . . . . ."
    "a . . . . . . ."
    "a . . . . . . ."
    "a . . . . . . ."
    "a . . . . . . ."
    "a b . . . . . ."
    "a b . . . . . ."
    "a b . . . . . ."
    ". b . . . . . ."
    ". b . . . . . ."
    ". b . . . . . ."
    ". b . . . . . ."
    ". b . . . . . ."
    ". . . . . . . ."
    ". . . . . . . ."
    ". . c . . . . ."
    ". . c . . . . ."
    ". . c . . . . ."
    ". . c . . . . ."
    ". . c . . . . ."
    ". . c . . . . ."
    ". . c . . . . ."
    ". . c . . . . ."
    ". . . d e . . ."
    ". . . d . f g ."
    ". . i d . . g h"
    ". . j . k . . ."
    ". . m n l . . ."
    "o . . . . . . .";

  grid-auto-columns: minmax(0, 1fr);
  gap: 1rem;
  min-height: 90vh;
}

@media screen and (max-width: 850px) {
  .grid-container {
    display: grid;

    grid-template-areas:
      "a . . . . . "
      "a . . . . . "
      "a . . . . . "
      "a . . . . . "
      "a . . . . . "
      "a b . . . . "
      "a b . . . . "
      "a b . . . . "
      ". b . . . . "
      ". b . . . . "
      ". b . . . . "
      ". b . . . . "
      ". b . . . . "
      ". . . . . . "
      ". . . . . . "
      ". . c . . . "
      ". . c . . . "
      ". . c . . . "
      ". . c . . . "
      ". . c . . . "
      ". . c . . . "
      ". . c . . . "
      ". . c . . . "
      ". . . d e . "
      ". g . d . f "
      "h g i d . . "
      ". . j . k . "
      ". . . m l . ";
  }
}
</style>
