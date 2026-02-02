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
} else {
  nameOfEpoch = "Literatur- und Theaterepochen";
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
  <div class="epochInfo headlineHomeView" v-else>
    <h1>{{ name }}</h1>
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
  container-type: inline-size;
}
.headlineHomeView {
  margin-top: -10vh;
}
h1 {
  font-size: clamp(2em, 10cqw, 11em);
  line-height: 1.2;
  text-shadow: 2px 2px 2px black;
}
h2 {
  font-size: clamp(1em, 7cqw, 6em);
  margin-top: -3rem;
  text-shadow: 2px 2px 2px black;
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
