<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import type { Era } from "../types/Era";
const props = defineProps<{
  era: Era;
}>();
const router: any = useRouter();

function goToEraPage(): void {
  router.push({ name: "era", params: { eraname: props.era.pageName } });
}
</script>

<template>
  <div class="grid-item" @click="goToEraPage">
    <h1>
      <h2>({{ era.timePeriod }})</h2>
      {{ era.name }}
    </h1>
  </div>
</template>

<style scoped>
.grid-item {
  background-color: var(--card-bg-color);
  padding: 1rem;
  border-radius: 0.2rem;
  overflow: hidden;
  overflow-wrap: break-word;

  writing-mode: vertical-lr;
  text-orientation: sideways;

  letter-spacing: 0.3px;
}

.grid-item:hover {
  cursor: pointer;
}

@media screen and (max-width: 760px) {
  .grid-item {
    padding: 1rem 0.3rem;
  }

  .grid-item h2 {
    display: none;
  }
}

@media screen and (max-width: 420px) {
  .grid-item {
    padding: 1rem 0rem;
  }

  .grid-item h1 {
    font-size: 1.3rem;
  }
}
</style>
