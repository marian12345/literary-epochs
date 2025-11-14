<script setup lang="ts">
import EpochCard from "./EpochCard.vue";
import jsonData from "../data/epochs.json";
import type { Epoch } from "../types/Epoch";
import { useEpochsStore } from "@/stores/epochs";
let cards: Epoch[] = jsonData;

const store = useEpochsStore();
store.$patch({ epochs: cards });
</script>

<template>
  <Banner />
  <div class="grid-container">
    <EpochCard
      v-for="card in cards"
      :key="card.id"
      :class="'grid-item-' + card.id"
      :style="{ 'grid-area': card.gridArea }"
      :epoch="card"
    />
  </div>
</template>

<style scoped>
.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.grid-container {
  position: relative;
  top: 45vh;
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
    "p o . . . . . ."
    "p . q r t v w ."
    "p . . r t v w ."
    "s u x . t v w ."
    "s u x . t v w y"
    "s aa ae z ab . . y"
    "s ag ac z ab . . y"
    ". ag af . . . ad y"
    ". . ah . . . . .";

  grid-auto-columns: minmax(0, 1fr);
  gap: 1rem;
  min-height: 90vh;
}

@media screen and (max-width: 850px) {
  .grid-container {
    display: grid;

    grid-template-areas:
      "a . . . . ."
      "a . . . . ."
      "a . . . . ."
      "a . . . . ."
      "a . . . . ."
      "a b . . . ."
      "a b . . . ."
      "a b . . . ."
      ". b . . . ."
      ". b . . . ."
      ". b . . . ."
      ". b . . . ."
      ". b . . . ."
      ". . . . . ."
      ". . . . . ."
      ". . c . . ."
      ". . c . . ."
      ". . c . . ."
      ". . c . . ."
      ". . c . . ."
      ". . c . . ."
      ". . c . . ."
      ". . c . . ."
      ". . . d e ."
      ". g . d . f"
      "h g i d . ."
      ". . j . k ."
      ". . m n l ."
      "p o . . . ."
      "p w q r t v"
      "p w . r t v"
      "s w x u t v"
      "s w x u t v"
      "s aa ae z ab y"
      "s ag ac z ab y"
      ". ag af . ad y"
      ". . ah . . .";
  }
}
</style>
