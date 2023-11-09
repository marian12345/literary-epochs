import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { Epoch } from "../types/Epoch";

export const useEpochsStore = defineStore("epochs", {
  state: () => ({ epochs: [] as Epoch[], test: "mytest" as string }),
});
