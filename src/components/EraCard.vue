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
  background-color: hsla(160, 100%, 37%, 1);
  padding: 1rem;
  border-radius: 0.2rem;

  grid-row-start: 1;
  grid-row-end: 3;
}
</style>
