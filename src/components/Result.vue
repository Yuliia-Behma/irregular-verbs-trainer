<script setup>
import { onMounted, ref } from "vue";
import { useErrorsStore } from "@/store/errors";
import router from "@/router";

const currentCountOfMistakes = ref(0);
const errorsArray = ref([]);
const score = ref(0);
const message = ref("");
const color = ref("");
const errorStore = useErrorsStore();

onMounted(() => {
  errorsArray.value = errorStore.errorsArray;
  errorStore.getAllValues();
  currentCountOfMistakes.value = errorStore.countOfMistakes;
  score.value = errorStore.score;
  message.value = errorStore.message;
  color.value = errorStore.color;
});

const restartGame = () => {
  errorStore.$reset();
  router.replace("/choose-level");
}

const showDetails = () => {
  router.replace("/result-details");
}
</script>

<template>
  <div
    class="wraper flex flex-col w-full max-w-md justify-between my-0 mx-auto px-6 pt-6 pb-4 overflow-y-auto"
  >
    <div>
      <p
        class="text-xl text-center mb-2 text-gray-900 font-bold dark:text-white"
      >
        Your result
      </p>
      <p
        class="text-xl text-center mb-2 font-bold dark:text-white"
        :class="{
          'text-green-600': color === 'green',
          'text-orange-500': color === 'orange',
          'text-red-600': color == 'red',
        }"
      >
        {{ score }}% {{ message }}
      </p>
      <p class="text-sm text-orange-600 dark:text-white text-center">
        {{ 20 - currentCountOfMistakes }} out of 20 correct answers
      </p>
    </div>

    <video
      v-if="score === 100"
      class="mb-1 place-self-center"
      muted
      autoplay
      type="video/mp4"
      loop
      width="224"
      height="224"
      playsinline
      webkit-playsinline
      src="../assets/video/excellent.mp4"
    ></video>
    <video
      v-else-if="score < 100 && score > 70"
      class="mb-1 place-self-center"
      muted
      autoplay
      type="video/mp4"
      loop
      width="224"
      height="224"
      playsinline
      webkit-playsinline
      src="../assets/video/green.mp4"
    ></video>
    <video
      v-else-if="color === 'orange' || color === 'red'"
      class="mb-1 place-self-center"
      muted
      autoplay
      type="video/mp4"
      loop
      width="224"
      height="224"
      playsinline
      webkit-playsinline
      src="../assets/video/redOrange.mp4"
    ></video>

    <div>
      <button
        @click="restartGame"
        type="button"
        class="text-white grow w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center inline-flex justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          class="w-6 h-6 text-white dark:text-white mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
          />
        </svg>

        Start again
        <svg
          class="w-6 h-6 text-white dark:text-white ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </button>
      <button
        v-if="score !== 100"
        @click="showDetails"
        type="button"
        class="text-blue-700 w-full hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-3.5 text-center text-base mt-6 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 inline-flex justify-center"
      >
        <svg
          class="w-[24px] h-[24px] text-current-color dark:text-white me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-width="2"
            d="M3 11h18M3 15h18m-9-4v8m-8 0h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
          />
        </svg>

        See details
      </button>
    </div>
  </div>
</template>

<style scoped>
video {
  pointer-events: none;
}
</style>
