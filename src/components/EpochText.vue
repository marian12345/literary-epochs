<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import type { Ref } from "vue";
import type { EpochContent } from "../types/EpochContent";
let contentLoaded: boolean = true;
/**
// Fetching Text Data from json file
const route = useRoute();
let epochInfo: EpochContent = {
  id: -1,
  name: "",
  timePeriod: "",
  pageName: "",
};
let contentLoaded: boolean = true;
try {
  epochInfo = await import(
    `../data/${route.params.epochname}/${route.params.epochname}.json`
  );
} catch (error) {
  contentLoaded = false;
} */
</script>

<template>
  <div class="epochInfo" v-if="contentLoaded">
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>
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
p {
  font-size: 1.4em;
}

@media screen and (max-width: 850px) {
}
@media screen and (max-width: 850px) {
  p {
    font-size: 1.2em;
  }
}
</style>
