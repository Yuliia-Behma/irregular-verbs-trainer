<template>
  <div
    class="wraper px-6 pb-4 pt-6 flex flex-col justify-between w-full max-w-lg my-0 mx-auto relative"
  >
    <button
      type="button"
      @click="comeBack"
      class="text-gray-500 border border-gray-200 hover:bg-gray-200 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 absolute left-6 top-8"
    >
      <svg
        class="w-[24px] h-[24px] text-gray-800 dark:text-white"
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
          d="M15 19L8 12L15 5"
        />
      </svg>

      <span class="sr-only">Icon description</span>
    </button>
    <div>
      <p class="text-xl font-bold text-gray-900 dark:text-white text-center">
        Your result
      </p>
      <p
        class="text-xl text-gray-900 font-semibold text-center dark:text-white my-2"
        :class="{
          'text-green-600': color === 'green',
          'text-orange-500': color === 'orange',
          'text-red-600': color == 'red',
        }"
      >
        {{ score }}%
      </p>
      <p class="text-sm text-gray-600 dark:text-white text-center font-medium">
        <span class="text-orange-600 font-bold">{{ 20 - countOfMistakes }}</span
        >/20 correct answers
      </p>
    </div>
    <div
      class="tableWraper my-10 rounded-lg overflow-y-auto shadow shadow-md max-w-full"
    >
      <table
        class="w-full max-w-full box-border table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          style="font-size: 11px"
          class="text-gray-500 uppercase text-center font-semibold bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0"
        >
          <tr class="border-b">
            <th scope="col" class="p-4 bg-yellow-50 leading-4">Base form</th>
            <th scope="col" class="p-4 bg-blue-50 leading-4">
              Form to convert
            </th>
            <th scope="col" class="p-4 bg-red-50 leading-4">My answer</th>
            <th scope="col" class="p-4 bg-green-50 leading-4">Right answer</th>
          </tr>
        </thead>
        <tbody class="text-sm text-gray-900">
          <tr v-for="error in errorsArray" :key="error">
            <td class="py-4 ps-4 box-border">{{ error["base form"] }}</td>
            <td class="comparison py-4 ps-4 font-medium box-border">
              {{ error["comparison form"] }}
            </td>
            <td class="py-4 ps-4 pe-3 font-semibold box-border text-red-600">
              {{ error["my answer"] }}
            </td>
            <td class="py-4 ps-4 pe-3 font-semibold box-border text-green-600">
              {{ error["correct answer"] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button
      @click="restartGame"
      type="button"
      class="text-white w-full max-w-sm self-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center inline-flex justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
    let errorStore;
    let errorsArray = ref([]);
    let countOfMistakes = ref(0);
    let score = ref(0);
    let color = ref("");

    onMounted(() => {
      errorStore = useErrorsStore();
      console.log(errorStore);
      errorsArray.value = errorStore.errorsArray;
      console.log(errorsArray.value);
      errorStore.getAllValues();
      countOfMistakes.value = errorStore.countOfMistakes;
      score.value = errorStore.score;
      color.value = errorStore.color;
    });

    function restartGame() {
      errorStore.$reset();
      router.replace("/choose-level");
    }

    function comeBack() {
      router.replace("/results");
    }

    return {
      countOfMistakes,
      errorsArray,
      errorStore,
      restartGame,
      score,
      color,
      comeBack,
    };
  },
};
</script>

<style scoped>
.tableWraper {
  height: calc(100% - 120px);
  scrollbar-width: thin;
}
tbody > :nth-child(even) {
  background-color: #f3f4f6;
}
.comparison {
  text-transform: capitalize;
}
</style>
