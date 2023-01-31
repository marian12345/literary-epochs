<script setup lang="ts">
defineProps<{
  name: string;
  start: number;
  end: number;
}>();
</script>

<template>
  <div class="grid-item">{{ name }}</div>
</template>

<style scoped>
.grid-item {
  background-color: var(--card-bg-color);
  padding: 1rem;
  border-radius: 0.2rem;

  grid-row-start: 1;
  grid-row-end: 3;
}
</style>
