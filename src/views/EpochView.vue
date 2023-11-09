<script setup lang="ts">
import { useRoute } from "vue-router";
import EpochText from "../components/EpochText.vue";
import CustomBackButton from "../components/CustomBackButton.vue";
const route = useRoute();
</script>

<template>
  <main>
    <Suspense>
      <EpochText />
      <template #fallback> Loading... </template>
    </Suspense>
    <CustomBackButton text="Zurück" />
  </main>
</template>

<style scoped></style>
