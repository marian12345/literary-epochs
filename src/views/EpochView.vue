<script setup lang="ts">
import EpochTextComponent from "../components/EpochTextComponent.vue";
import CustomBackButtonComponent from "../components/CustomBackButtonComponent.vue";
import ImpressumComponent from "@/components/ImpressumComponent.vue";
import BannerboxComponent from "@/components/BannerboxComponent.vue";
</script>

<template>
  <main>
    <BannerboxComponent />
    <Suspense>
      <EpochTextComponent />
      <template #fallback> Loading... </template>
    </Suspense>
    <ImpressumComponent />
    <CustomBackButtonComponent text="Zurück" />
  </main>
</template>

<style scoped></style>
