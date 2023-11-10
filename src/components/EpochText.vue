<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import type { Ref } from "vue";
import type { EpochContent } from "../types/EpochContent";

///
/***
let loading: boolean = true;
let error: boolean = false;
 */
let loading: Ref<boolean> = ref(true);
let error: Ref<boolean> = ref(false);

// get current pageName
const route = useRoute();
const pageName = route.params.epochname;

// fetch
const summaryText = ref([]);

// fetchData function
async function getData() {
  const res = await fetch(
    "https://shy-pine-7435.fly.dev/api/epoches?filters[pageName][$eq]=" +
      pageName
  );
  const finalRes = await res.json();
  loading.value = false;
  console.log(loading);
  if (finalRes.data.length != 1) {
    error.value = true;
  }

  summaryText.value = finalRes.data[0].attributes.summary;
}

getData();
</script>

<template>
  <div class="epochInfo" v-if="!loading && !error">
    <p>
      {{ summaryText }}
    </p>
  </div>
  <div v-else-if="loading && !error">
    <p>Loading...</p>
  </div>
  <div v-else>
    <p>
      Oh nooo ... An error occured. The content is currently not available :(
    </p>
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
