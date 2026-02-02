<script setup lang="ts">
import { useEpochsStore } from "@/stores/epochs";
import type { Epoch } from "../types/Epoch";
import { useRoute } from "vue-router";
import type { Ref } from "vue";
import { ref } from "vue";
// fetching name and time period from store
// initializing route and store
const store = useEpochsStore();
const route = useRoute();

// find the current epoch in store.epochs
let currentEpoch: Epoch | undefined = store.epochs.find(
  (epoch) => route.params.epochname == epoch.pageName
);

// set it up to make it usable for vue
const imgUrl = ref<string>("");

function assetUrl(name: string) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}

if (currentEpoch) {
  imgUrl.value = assetUrl(`${currentEpoch.pageName}.jpg`);
} else {
  imgUrl.value = assetUrl("banner.jpg");
}

//functions to check if the image exists
const exists = ref<boolean | null>(null);
function onLoad() {
  exists.value = true;
}

function onError() {
  exists.value = false;
}
</script>

<template>
  <div class="banner-wrapper">
    <img
      :src="imgUrl"
      @load="onLoad"
      @error="onError"
      alt="Website Banner"
      class="banner"
    />
    <p v-if="exists === false">No image yet</p>
  </div>
</template>

<style scoped>
.banner-wrapper {
  width: 100%;
  height: 60vh;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  left: 0px;
  right: 0px;
  top: 0px;
}

.banner-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.3)
  ); /* shadow/overlay effect */
  pointer-events: none;
}
</style>
