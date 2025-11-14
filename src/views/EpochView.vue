<script setup lang="ts">
import { useRoute } from "vue-router";
import EpochText from "../components/EpochText.vue";
import EpochOverviewText from "../components/EpochOverviewText.vue";
import CustomBackButton from "../components/CustomBackButton.vue";
import Banner from "../components/Banner.vue";

const route = useRoute();
</script>

<template>
  <main>
    <div class="bannerbox">
      <EpochOverviewText />
    </div>
    <Suspense>
      <EpochText />
      <template #fallback> Loading... </template>
    </Suspense>
    <CustomBackButton text="Zurück" />
  </main>
</template>

<style scoped>
.bannerbox {
  align-items: center;

  width: 100%;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
  overflow-wrap: break-word;
}
</style>
