<script setup lang="ts">
defineProps<{
  name: string;
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
  overflow: hidden;
  overflow-wrap: break-word;

  writing-mode: vertical-lr;
  text-orientation: sideways;

  font-weight: 700;
  letter-spacing: 0.3px;
}
</style>
