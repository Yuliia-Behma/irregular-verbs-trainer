<script setup>
import router from "@/router";

function passing() {
  router.replace("/choose-level");
}
</script>

<template>
  <div
    class="wraper flex flex-col w-full max-w-md justify-between my-0 mx-auto"
  >
    <div class="px-6 pt-10">
      <h3 class="text-2xl text-gray-900 font-bold dark:text-white pb-3 pt-2">
        Greetings, friend!
      </h3>
      <p class="text-gray-800 dark:text-gray-400">
        Dive into the wonderful world of English with our app!
      </p>
      <p class="text-gray-800 dark:text-gray-400">
        Learn irregular verbs with ease and fun. Let's make your learning
        enjoyable and productive together!
      </p>
    </div>
    <video
      loading="lazy"
      class="self-center"
      muted="muted"
      src="../assets/video/greetings.mp4"
      type="video/mp4"
      autoplay="autoplay"
      loop="loop"
      width="224"
      height="224"
    ></video>
    <div class="flex flex-col items-center px-6">
      <button
        type="button"
        @click="passing"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-m px-5 py-3.5 text-center flex flex-row justify-center max-w-md w-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
      >
        <span class="mr-2">Start</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.0148 10.2908L7.01057 3.27275C6.70544 3.09547 6.35914 3.00142 6.00629 3.00002C5.65344 2.99861 5.3064 3.0899 4.99987 3.26475C4.69542 3.43574 4.44218 3.68504 4.26639 3.98684C4.09059 4.28863 3.99863 4.63195 4.00002 4.98125V19.0174C3.99863 19.3667 4.09059 19.71 4.26639 20.0118C4.44218 20.3136 4.69542 20.5629 4.99987 20.7339C5.30629 20.9096 5.6536 21.0014 6.00679 21C6.35998 20.9986 6.70656 20.904 7.01157 20.7259L19.0168 13.7078C19.3159 13.5341 19.5641 13.2849 19.7366 12.985C19.9092 12.6852 20 12.3453 20 11.9993C20 11.6533 19.9092 11.3134 19.7366 11.0136C19.5641 10.7138 19.3159 10.4645 19.0168 10.2908H19.0148ZM5.99972 19.0174V4.98125L18.0049 11.9833L5.99972 19.0174Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* .wraper{
  height: calc(100vh - 64px - 82px);
} */
</style>
