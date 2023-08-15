<script setup lang="ts">
import { useRoute } from "vue-router";
import CustomBackButton from "../components/CustomBackButton.vue";

const route = useRoute();
</script>

<template>
  <main>
    <h1>test test {{ route.params.eraname }}</h1>
    <h2>asdfasdf</h2>
    <CustomBackButton text="Zurück" />
  </main>
</template>

<style scoped>
div .sizing {
  height: 2000px;
}
</style>
