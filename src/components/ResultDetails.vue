<template>
  <div
    class="wraper px-6 pb-4 pt-6 flex flex-col justify-between w-full max-w-md my-0 mx-auto"
  >
    Your result is {{ 20 - countOfMistakes }} / 20

    <table>
      <thead>
        <tr>
          <th v-for="(value, name) in errorsArray[0]" :key="value">
            {{ name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="error in errorsArray" :key="error">
          <td v-for="value in error" :key="value">{{ value }}</td>
        </tr>
      </tbody>
    </table>
    <button
        @click="restartGame"
        type="button"
        class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center inline-flex justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useErrorsStore } from "@/store/errors";
import router from "@/router";

export default {
  name: "Result",

  setup() {
    const countOfMistakes = ref(0);
    const errorsArray = ref([]);
    let errorStore;

    onMounted(() => {
      errorStore = useErrorsStore();
      console.log(errorStore);
      errorsArray.value = errorStore.errorsArray;
      console.log(errorsArray.value);
      countOfMistakes.value = errorsArray.value.length;
    });

    function restartGame() {
      errorStore.$reset();
      router.replace("/choose-level")
    }

    return {
      countOfMistakes,
      errorsArray,
      errorStore,
      restartGame
    };
  },
};
</script>

<style scoped>
th,
td {
  border: 1px solid black;
}
</style>
