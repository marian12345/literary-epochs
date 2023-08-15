<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();

const eraInfo = await import(
  `../data/${route.params.eraname}/${route.params.eraname}.json`
);

const name = ref(eraInfo.name);
const timePeriod = ref(eraInfo.timePeriod);

console.log(eraInfo);

console.log(route.params);
</script>

<template>
  <div class="eraInfo">
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
</template>

<style scoped>
.eraInfo {
  width: 110%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
  overflow-wrap: break-word;
}
h1 {
  font-size: 15em;
}
h2 {
  font-size: 10em;
  margin-top: -10rem;
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
</style>
