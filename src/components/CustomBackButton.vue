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
button svg {
  fill: rgb(138, 170, 229);
  padding: 0.3em;
}

button {
  --green: rgb(27, 253, 156);
  --blue: rgb(138, 170, 229);
  --blue-custom-01: rgba(138, 170, 229, 0.1);
  --blue-custom-02: rgba(138, 170, 229, 0.2);
  --blue-custom-04: rgba(138, 170, 229, 0.4);
  --blue-custom-06: rgba(138, 170, 229, 0.6);

  font-size: 15px;

  font-family: inherit;
  overflow: hidden;
  transition: all 0.3s;

  position: fixed;
  right: 0.7rem;
  bottom: 0.7rem;
  cursor: pointer;
  border-radius: 50%;
  width: 5rem;

  border: 2px solid var(--blue);
  background: linear-gradient(
    to right,
    var(--blue-custom-01) 1%,
    transparent 40%,
    transparent 60%,
    var(--blue-custom-01) 100%
  );
  color: var(--green);
  box-shadow: inset 0 0 10px var(--blue-custom-04),
    0 0 9px 3px var(--blue-custom-01);
}

button:hover {
  color: #82ffc9;
  box-shadow: inset 0 0 10px var(--blue-custom-06),
    0 0 9px 3px var(--blue-custom-02);
}

button:before {
  content: "";
  position: absolute;
  left: -4em;
  width: 4em;
  height: 100%;
  top: 0;
  transition: transform 0.8s ease-in-out;
  background: linear-gradient(
    to right,
    transparent 1%,
    var(--blue-custom-01) 40%,
    var(--blue-custom-01) 60%,
    transparent 100%
  );
}

button:hover:before {
  transform: translateX(15em);
}
</style>
