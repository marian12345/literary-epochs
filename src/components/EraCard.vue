<script setup lang="ts">
defineProps<{
  era: Object;
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
  font-size: 1.7rem;
  margin: 0;
}

.grid-item h2 {
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
  letter-spacing: 0.5px;
}
</style>
