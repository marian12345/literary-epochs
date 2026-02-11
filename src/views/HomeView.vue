<script setup lang="ts">
import TimelineComponent from "../components/TimelineComponent.vue";
import ImpressumComponent from "@/components/ImpressumComponent.vue";
import BannerboxComponent from "@/components/BannerboxComponent.vue";

import BackendLoadingComponent from "@/components/BackendLoadingComponent.vue";
import { useBackendStatus } from "@/composables/useBackendStatus";

const { isBackendReady } = useBackendStatus();
//!isBackendReady
</script>

<template>
  <main>
    <BackendLoadingComponent v-if="!isBackendReady" />
    <span v-else>
      <BannerboxComponent />
      <TimelineComponent />
      <ImpressumComponent />
    </span>
  </main>
</template>
