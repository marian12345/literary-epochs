<script setup lang="ts">
import HeadlinesComponent from "./HeadlinesComponent.vue";
import BannerComponent from "./BannerComponent.vue";
</script>

<template>
  <div class="bannerbox">
    <BannerComponent />
    <HeadlinesComponent />
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
