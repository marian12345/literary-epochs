<script setup lang="ts">
import { useRoute } from "vue-router";
import EraText from "../components/EraText.vue";
import CustomBackButton from "../components/CustomBackButton.vue";
const route = useRoute();
</script>

<template>
  <main>
    <Suspense>
      <EraText />
      <template #fallback> Loading... </template>
    </Suspense>
    <CustomBackButton text="Zurück" />
  </main>
</template>

<style scoped></style>
