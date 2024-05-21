<script setup>
import router from "@/router";
import { useErrorsStore } from "@/store/errors";
import { useVerbsStore } from "@/store/verbs";

let errorStore = useErrorsStore();
let verbStore = useVerbsStore();

function backToStart() {
  errorStore.$reset();
  verbStore.$reset();
  router.replace("/");
}
</script>

<template>
  <div
    class="wraper px-6 pb-4 pt-10 flex flex-col justify-between w-full max-w-md my-0 mx-auto relative overflow-y-auto"
  >
    <div class="text-justify">
      <h3 class="text-2xl text-gray-900 font-bold dark:text-white pb-3 pt-2">
      Rules
      </h3>
      <p class="text-gray-800 dark:text-gray-400">
      First, choose your difficulty level. The level depends on the number of irregular verbs from which 20 will be randomly selected for each game.
      </p>
      <p class="text-gray-800 dark:text-gray-400"><span class="text-green-600 font-bold">Beginner</span> - includes the <span class="font-bold">60</span> most common irregular verbs.</p>
      <p class="text-gray-800 dark:text-gray-400"><span class="text-yellow-400 font-bold">Intermediate</span> - features <span class="font-bold">140</span> verbs, including some less frequently used ones.</p>
      <p class="text-gray-800 dark:text-gray-400"><span class="text-red-600 font-bold">Advanced</span> - for proficient learners who want to practice with all <span class="font-bold">200</span> words.</p>
      <p class="text-gray-800 dark:text-gray-400">Let's get started! <br>You will receive immediate feedback for each word, and at the end, you'll get a summary of the game with a detailed review. The <span class="text-blue-700 font-bold">"Catalog"</span> tab contains all the possible irregular verbs for your convenience. Have an interesting and productive time!</p>
    </div>
    <button
      type="button"
      @click="backToStart"
      class="text-blue-700 w-full hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-3.5 text-center text-base mt-6 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 inline-flex justify-center"
    >
      <svg
        class="w-[24px] h-[24px] text-current-color me-2 dark:text-white"
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
          d="M5 12h14M5 12l4-4m-4 4 4 4"
        />
      </svg>

      Back to start
    </button>
  </div>
</template>

<style scoped></style>
