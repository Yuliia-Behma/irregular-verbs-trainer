<template>
  <div v-if="!allow" class="p-6" @keyup.enter="startGameBtn">
      <h4 class="text-2xl text-gray-900 font-bold dark:text-white pt-6 pb-4">To start training, <br>choose a level</h4>
      
      <div class="my-4">
        <input
          type="radio"
          name="gameLevel"
          value="easy"
          id="easyLevel"
          v-model="level"
          class="hidden peer"
        />
        <label for="easyLevel" class="block max-w-sm p-4 w-full text-lg font-semibold text-gray-900 dark:text-white bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-md shadow-gray-300/1">Beginner</label>
      </div>
      <div class="my-4">
        <input
          type="radio"
          name="gameLevel"
          value="medium"
          id="mediumLevel"
          v-model="level"
          class="hidden peer"
        />
        <label for="mediumLevel" class="block max-w-sm p-4 w-full text-lg font-semibold text-gray-900 dark:text-white bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-md shadow-gray-300/1">Intermediate</label>
      </div>
      <div class="my-4">
        <input
          type="radio"
          name="gameLevel"
          value="hard"
          id="hardLevel"
          v-model="level"
          class="hidden peer"
        />
        <label for="hardLevel" class="block max-w-sm p-4 w-full text-lg font-semibold text-gray-900 dark:text-white bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-md shadow-gray-300/1">Advanced</label>
      </div>

    <!-- <button @click="startGameBtn" :disabled="!level">Start</button> -->
      <div class="absolute left-0 bottom-6 w-full px-6 pt-0 pb-16">
    <button
      type="button"
      @click="startGameBtn"
      :disabled="!level"
      class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-m px-5 py-3.5 text-center flex flex-row justify-center max-w-sm w-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
      :class="{ 'cursor-not-allowed': !level, 'bg-blue-500': !level, ' bg-blue-700': level, ' hover:bg-blue-800': level}"
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
  
    <GameCard @restart="refresh" v-if="level && allow" :level="level"></GameCard>
</template>

<script>
import { defineComponent, ref } from "vue";
import GameCard from "./GameCard.vue";

export default defineComponent({
  name: "ChooseLevel",
  components: {GameCard},

  setup() {
    const level = ref("");
    const allow = ref(false);
    
    function startGameBtn() {
      allow.value = true;
    }

    function refresh() {
      level.value = "";
      allow.value = false
    }

    return {
      allow,
      level,
      startGameBtn,
      refresh
    };
  },
});
</script>

<style scoped>
/* button{
  margin: 10px;
} */


/* input{
  display: none;
} */
#easyLevel:checked + label{
  background-color:  #84e1bc;
  color: #03543f;
}
#mediumLevel:checked + label{
  background-color: #faca15;
  color: #723b13;
}
#hardLevel:checked + label{
  background-color: #fdba8c;
  color: #8a2c0d;
}
</style>
