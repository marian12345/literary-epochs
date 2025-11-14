<script setup lang="ts"></script>

<template>
  <main>
    <div class="banner-wrapper">
      <img src="/banner.jpg" alt="Website Banner" class="banner" />
    </div>
  </main>
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
