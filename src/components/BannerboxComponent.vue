<script setup lang="ts">
import EpochOverviewText from "../components/EpochOverviewText.vue";
import Banner from "../components/Banner.vue";
</script>

<template>
  <div class="bannerbox">
    <Banner />
    <EpochOverviewText />
  </div>
</template>

<style scoped>
.bannerbox {
  align-items: center;

  width: 100%;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
  overflow-wrap: break-word;
}
</style>
