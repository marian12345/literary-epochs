<script setup lang="ts">
import { useRoute } from "vue-router";
import EpochText from "../components/EpochText.vue";
import EpochOverviewText from "../components/EpochOverviewText.vue";
import CustomBackButton from "../components/CustomBackButton.vue";
import Banner from "../components/Banner.vue";
import ImpressumText from "@/components/ImpressumText.vue";
import BannerboxComponent from "@/components/BannerboxComponent.vue";
const route = useRoute();
</script>

<template>
  <main>
    <BannerboxComponent />
    <Suspense>
      <EpochText />
      <template #fallback> Loading... </template>
    </Suspense>
    <ImpressumText />
    <CustomBackButton text="Zurück" />
  </main>
</template>

<style scoped></style>
