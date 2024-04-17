<template>
  <div class="hello">
    <div class="title">
      <h2>Verb catalog</h2>
      <button @click="sortList">sort (a-z)</button>
    </div>

    <table class="main-table">
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
    </table>
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
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-table {
  width: 100%;
  border-collapse: collapse;
}

.header-table {
  width: 100%;
  border-bottom: 1px solid black;
}

.isolated-div {
  width: 100%;
  height: 75vh;
  overflow-y: scroll;
}

.body-table > :nth-child(odd) {
  background-color: lightgreen;
}

.body-table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  width: 33.33%;
}
th {
  text-align: start;
}
</style>
