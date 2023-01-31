<script setup lang="ts">
import EraCard from "./EraCard.vue";
import { ref } from "vue";

const cards = ref([
  { id: 0, name: "Griechische Antike", gridarea: "a" },
  { id: 1, name: "Römische Antike", gridarea: "b" },
  { id: 2, name: "Mittelalter", gridarea: "c" },
  { id: 3, name: "Comedia Del'Arte", gridarea: "d" },
  { id: 4, name: "Rennaissance", gridarea: "e" },
  { id: 5, name: "Elisabethanisches Theater", gridarea: "f" },
  { id: 6, name: "Barock", gridarea: "g" },
  { id: 7, name: "Die Aufklärung", gridarea: "h" },
  { id: 8, name: "Sturm und Drang", gridarea: "i" },
  { id: 9, name: "Weimarer Klassik", gridarea: "j" },
  { id: 10, name: "Romantik", gridarea: "k" },
  { id: 11, name: "Vormärz", gridarea: "l" },
]);
</script>

<template>
  <div class="grid-container">
    <EraCard
      v-for="card in cards"
      :key="card.id"
      :name="card.name"
      :class="'grid-item-' + card.id"
      :style="{ 'grid-area': card.gridarea }"
    />
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;

  grid-template-areas:
    "a b c d e f g h"
    ". . i j k l . .";

  grid-auto-columns: minmax(0, 1fr);
  gap: 1rem;
  min-height: 90vh;
}

@media screen {
}

/**
.grid-item-1 {
  grid-row-start: 1;
  grid-row-end: 4;
}

grid-template-rows: repeat(3, 1fr);
grid-template-columns: repeat(12, minmax(0, 1fr));

grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-template-columns: repeat(12, minmax(1fr, 1fr));
 */
</style>
