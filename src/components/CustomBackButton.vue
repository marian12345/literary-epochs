<script setup lang="ts">
import { useRouter } from "vue-router";
import BackArrow from "../components/icons/BackArrow.vue";
const props = defineProps<{
  text?: String;
}>();
const router: any = useRouter();

function goBack(): void {
  router.go(-1);
}
</script>

<template>
  <button @click="goBack">
    <BackArrow />
  </button>
</template>

<style scoped>
button {
  color: var(--color-text);
  width: 5rem;
  border: none;
  border-radius: 50%;
  padding: 1rem;
  background-color: var(--card-bg-color);
  display: flex;
  justify-content: center;
  flex-direction: row;
  cursor: pointer;

  position: fixed;
  right: 0.7rem;
  bottom: 0.7rem;
}
button svg {
  fill: var(--color-text);
  padding: 0.3em;
}
</style>
