<script setup lang="ts">
import EpochCard from "./EpochCard.vue";
import jsonData from "../data/epochs.json";
import type { Epoch } from "../types/Epoch";
let cards: Epoch[] = jsonData;
</script>

<template>
  <div class="grid-container">
    <EpochCard
      v-for="card in cards"
      :key="card.id"
      :epoch="card"
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
      ". . m n l . "
      "o . . . . . ";
  }
}
</style>
