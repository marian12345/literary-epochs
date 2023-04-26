<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <main>test test {{ route.params.eraname }}</main>
</template>

<style scoped></style>
