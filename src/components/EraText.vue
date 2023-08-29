<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import type { Ref } from "vue";
import type { EraContent } from "../types/EraContent";

const route = useRoute();
let eraInfo: EraContent = {
  id: -1,
  name: "",
  timePeriod: "",
  pageName: "",
};
let contentLoaded: boolean = true;
try {
  eraInfo = await import(
    `../data/${route.params.eraname}/${route.params.eraname}.json`
  );
} catch (error) {
  contentLoaded = false;
}

const name: Ref<string> = ref<string>(eraInfo.name);
const timePeriod: Ref<string> = ref<string>(eraInfo.timePeriod);
</script>

<template>
  <div class="eraInfo" v-if="contentLoaded">
    <h1>{{ name }}</h1>
    <h2>{{ timePeriod }}</h2>
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
.eraInfo {
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
p {
  font-size: 1.4em;
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
  p {
    font-size: 1.2em;
  }
}
</style>
