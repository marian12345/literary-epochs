<script setup lang="ts">
import EraCard from "./EraCard.vue";
import { ref } from "vue";

const cards = ref([
  {
    id: 0,
    name: "Griechische Antike",
    timePeriod: "800 v. Chr. - 30 v. Chr.",
    gridarea: "a",
  },
  {
    id: 1,
    name: "Römische Antike",
    timePeriod: "300 v. Chr. - 529 n. Chr.",
    gridarea: "b",
  },
  { id: 2, name: "Mittelalter", timePeriod: "750 - 1470", gridarea: "c" },
  {
    id: 3,
    name: "Comedia Dell'Arte",
    timePeriod: "1500 - 1800",
    gridarea: "d",
  },
  { id: 4, name: "Rennaissance", timePeriod: "1470 - 1600", gridarea: "e" },
  {
    id: 5,
    name: "Elisabethanisches Theater",
    timePeriod: "1580 - 1625",
    gridarea: "f",
  },
  { id: 6, name: "Barock", timePeriod: "1600 - 1770", gridarea: "g" },
  { id: 7, name: "Die Aufklärung", timePeriod: "1720 - 1800", gridarea: "h" },
  { id: 8, name: "Sturm und Drang", timePeriod: "1765 - 1785", gridarea: "i" },
  { id: 9, name: "Weimarer Klassik", timePeriod: "1786 - 1805", gridarea: "j" },
  { id: 10, name: "Romantik", timePeriod: "1795 - 1815", gridarea: "k" },
  { id: 11, name: "Biedermeier", timePeriod: "1815 - 1848", gridarea: "l" },
  {
    id: 12,
    name: "Vormärz / Junges Deutschland",
    timePeriod: "1815 - 1848",
    gridarea: "m",
  },
]);
</script>

<template>
  <div class="grid-container">
    <EraCard
      v-for="card in cards"
      :key="card.id"
      :era="card"
      :class="'grid-item-' + card.id"
      :style="{ 'grid-area': card.gridarea }"
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
    ". . . m l . . .";

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
