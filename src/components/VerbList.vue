<template>
  <div class="hello">
    <button @click="sortList">sort (a-z)</button>
    <table>
      <thead>
        <tr>
          <th>Base form</th>
          <th>Past simple</th>
          <th>Past participle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item">
          <td>{{ item["base form"] }}</td>
          <td>{{ item["past simple"] }}</td>
          <td>{{ item["past participle"] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import json from '../jsonData/verbsData.json'
import {ref} from 'vue'

export default {
  name: 'VerbList',
  setup() {

    const list = ref(json.hard)

    function sortList() {
      list.value.sort((a, b) => {
        if (a["base form"] > b["base form"]) {
          return 1;
        }
        if (a["base form"] < b["base form"]) {
          return -1;
        }
        return 0;
      })
    }
    
    return {
      list,
      sortList
    }
  }
}
</script>

<style scoped></style>
