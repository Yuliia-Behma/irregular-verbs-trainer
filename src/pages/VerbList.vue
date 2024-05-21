<template>
  <div
    class="wraper px-6 pb-4 pt-6 flex flex-col justify-start w-full max-w-md my-0 mx-auto relative"
  >
    <div class="flex flex-row justify-between items-baseline">
      <h3 class="text-2xl text-gray-900 font-bold dark:text-white pb-0 pt-2">
        Verb catalog
      </h3>
      <button
        type="button"
        @click="sortList"
        class="text-gray-700 border border-gray-700 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-2 text-center inline-flex justify-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
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

    <!-- <table class="main-table">
      <tr>
        <td>
          <table class="header-table">
            <tr>
              <th>Base form</th>
              <th>Past simple</th>
              <th>Past participle</th>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <div class="isolated-div">
            <table class="body-table">
              <tr v-for="item in list" :key="item" class="table-row">
                <td>{{ item["base form"] }}</td>
                <td>{{ item["past simple"] }}</td>
                <td>{{ item["past participle"] }}</td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table> -->
    <div class="tableWraper mt-10 rounded-lg overflow-y-auto">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-500 uppercase text-center bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0"
        >
          <tr class="border-b">
            <th scope="col" class="p-4 bg-yellow-50">Base form</th>
            <th scope="col" class="p-4 bg-green-50">Past simple</th>
            <th scope="col" class="p-4 bg-blue-50">Past participle</th>
          </tr>
        </thead>
        <tbody class="text-sm text-gray-900 overflow-y-auto">
          <tr v-for="item in list" :key="item">
            <td class="p-4">{{ item["base form"] }}</td>
            <td class="p-4 font-medium">{{ item["past simple"] }}</td>
            <td class="p-4 font-semibold">{{ item["past participle"] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import json from "../jsonData/verbsData.json";
import { ref } from "vue";

export default {
  name: "VerbList",
  setup() {
    const list = ref(json.hard);

    function sortList() {
      list.value.sort((a, b) => {
        if (a["base form"] > b["base form"]) {
          return 1;
        }
        if (a["base form"] < b["base form"]) {
          return -1;
        }
        return 0;
      });
    }

    return {
      list,
      sortList,
    };
  },
};
</script>

<style scoped>
.tableWraper {
  height: calc(100% - 86px);
  scrollbar-width: none;
}
::-webkit-scrollbar {
  width: 0;
}

tbody > :nth-child(even) {
  background-color:  #f3f4f6;
}
</style>
