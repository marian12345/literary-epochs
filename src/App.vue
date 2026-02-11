<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

import BackendLoadingComponent from "@/components/BackendLoadingComponent.vue";
import { useBackendStatus } from "@/composables/useBackendStatus";

const { isBackendReady } = useBackendStatus();
</script>

<template>
  <BackendLoadingComponent v-if="!isBackendReady" />
  <RouterView v-else />
</template>

<style scoped></style>
