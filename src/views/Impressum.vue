<script setup lang="ts">
import CustomBackButton from "../components/CustomBackButton.vue";
</script>

<template>
  <main>
    <div>
      <h1>Impressum</h1>
      <p>Company Name</p>
      <p>Address</p>
      <p>Email: example@example.com</p>
    </div>
    <CustomBackButton text="Zurück" />
  </main>
</template>

<style scoped>
.impressum {
  background: var(--color-background);
}
</style>
