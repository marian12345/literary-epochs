import { ref, onMounted, onUnmounted } from "vue";

const BACKEND_URL = "https://shy-pine-7435.fly.dev/api/epoches";
const RETRY_INTERVAL = 2000; // ms

export function useBackendStatus() {
  const isBackendReady = ref(false);
  const isChecking = ref(true);
  let intervalId: number | null = null;

  const checkBackend = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}`, {
        method: "GET",
      });

      if (res.ok || res.status >= 400) {
        // Backend is awake even if endpoint errors
        isBackendReady.value = true;
        isChecking.value = false;
        stopChecking();
      }
    } catch (err) {
      // Backend still asleep
      isBackendReady.value = false;
    }
  };

  const startChecking = () => {
    checkBackend();
    intervalId = window.setInterval(checkBackend, RETRY_INTERVAL);
  };

  const stopChecking = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  onMounted(startChecking);
  onUnmounted(stopChecking);

  return {
    isBackendReady,
    isChecking,
  };
}
