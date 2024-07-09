<script setup>
import json from "../jsonData/verbsData.json";
import { ref } from "vue";

const list = ref(json.hard);
const sortToggle = ref(true);

const sortList = () => {
  if (sortToggle.value) {
    list.value.sort((a, b) => {
      if (a["base form"] > b["base form"]) {
        return 1;
      }
      if (a["base form"] < b["base form"]) {
        return -1;
      }
      return 0;
    });
  } else {
    list.value.sort((a, b) => {
      if (a["base form"] < b["base form"]) {
        return 1;
      }
      if (a["base form"] > b["base form"]) {
        return -1;
      }
      return 0;
    });
  }
  sortToggle.value = !sortToggle.value;
};
</script>

<template>
  <div
    class="wraper px-6 pb-4 pt-6 flex flex-col justify-start w-full max-w-md my-0 mx-auto relative overflow-y-auto"
  >
    <div class="flex flex-row justify-between items-baseline">
      <h3 class="text-2xl text-gray-900 font-bold dark:text-white pb-0 pt-2">
        Verb catalog
      </h3>
      <button
        type="button"
        @click="sortList"
        class="text-gray-700 border border-gray-700 hover:bg-gray-200 focus:outline-none font-medium rounded-lg text-xs px-3 py-2 text-center inline-flex justify-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
      >
        Sort (A-Z)
        <svg
          class="w-[16px] h-[16px] text-gray-700 dark:text-white ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"
          />
        </svg>
      </button>
    </div>
    <div
      class="tableWraper mt-10 rounded-lg overflow-y-auto shadow shadow-md max-w-full"
    >
      <table
        class="w-full max-w-full box-border table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          style="font-size: 11px"
          class="text-gray-500 font-semibold uppercase text-center bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0"
        >
          <tr class="border-b">
            <th scope="col" class="p-4 bg-yellow-50 leading-4">Base form</th>
            <th scope="col" class="p-4 bg-green-50 leading-4">Past simple</th>
            <th scope="col" class="p-4 bg-blue-50 leading-4">
              Past participle
            </th>
          </tr>
        </thead>
        <tbody class="text-sm text-gray-900">
          <tr v-for="item in list" :key="item">
            <td class="py-4 ps-4 box-border">{{ item["base form"] }}</td>
            <td class="py-4 ps-3 font-medium box-border">
              {{ item["past simple"] }}
            </td>
            <td class="py-4 ps-4 pe-3 font-semibold box-border">
              {{ item["past participle"] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.tableWraper {
  height: calc(100% - 86px);
  min-height: 265px;
  scrollbar-width: thin;
}

tbody > :nth-child(even) {
  background-color: #f3f4f6;
}
</style>
