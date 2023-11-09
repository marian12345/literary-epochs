<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import type { Epoch } from "../types/Epoch";
const props = defineProps<{
  epoch: Epoch;
}>();
const router: any = useRouter();

function goToEpochPage(): void {
  router.push({
    name: "epoch",
    params: { epochname: props.epoch.pageName },
  });
}
</script>

<template>
  <div class="grid-item" @click="goToEpochPage">
    <h1>
      <h2>({{ epoch.timePeriod }})</h2>
      {{ epoch.name }}
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
    /*padding: 1rem 0.3rem;*/
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
