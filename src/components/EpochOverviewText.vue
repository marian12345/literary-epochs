<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import type { Ref } from "vue";
import type { EpochContent } from "../types/EpochContent";
import type { Epoch } from "../types/Epoch";
import { useEpochsStore } from "@/stores/epochs";

// fetching name and time period from store
// initializing route and store
const store = useEpochsStore();
const route = useRoute();

// find the current epoch in store.epochs
let currentEpoch: Epoch | undefined = store.epochs.find(
  (epoch) => route.params.epochname == epoch.pageName
);

// assign name and timePeriod variables
let nameOfEpoch: string = "";
let timePeriodOfEpoch: string = "";
let contentLoaded: boolean = false;
// check if currentEpoch is set
if (typeof currentEpoch != "undefined") {
  nameOfEpoch = currentEpoch.name;
  timePeriodOfEpoch = currentEpoch.timePeriod;
  contentLoaded = true;
}

// set it up to make it usable for vue
const name: Ref<string> = ref<string>(nameOfEpoch);
const timePeriod: Ref<string> = ref<string>(timePeriodOfEpoch);
</script>

<template>
  <div class="epochInfo" v-if="contentLoaded">
    <h1>{{ name }}</h1>
    <h2>{{ timePeriod }}</h2>
  </div>
  <div v-else>
    <p>Oh nooo ... An error occured. The content could not be loaded :(</p>
  </div>
</template>

<style scoped>
.epochInfo {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
  overflow-wrap: break-word;
}
h1 {
  font-size: 15em;
  line-height: 1.2;
}
h2 {
  font-size: 10em;
  margin-top: -6rem;
}

@media screen and (max-width: 850px) {
  h1 {
    font-size: 5em;
  }
  h2 {
    font-size: 3em;
    margin-top: 0rem;
  }
}
@media screen and (max-width: 850px) {
  h1 {
    font-size: 4em;
  }
  h2 {
    font-size: 2.5em;
    margin-top: 0rem;
  }
}
</style>
