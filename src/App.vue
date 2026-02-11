<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

import BackendLoadingComponent from "@/components/BackendLoadingComponent.vue";
import { useBackendStatus } from "@/composables/useBackendStatus";

const { isBackendReady } = useBackendStatus();
//!isBackendReady
</script>

<template>
  <BackendLoadingComponent v-if="true" />
  <RouterView v-else />
</template>

<style scoped></style>
