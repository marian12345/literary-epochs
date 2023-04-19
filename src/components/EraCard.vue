<script setup lang="ts">
type era = { id: number; name: string; timePeriod: string; gridArea: string };
defineProps<{
  era: era;
}>();
</script>

<template>
  <div class="grid-item">
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

.grid-item h1 {
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0;
}

.grid-item h2 {
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
  letter-spacing: 0.5px;
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
