<template>
  <div class="hello">
    <div class="title">
      <h2>Verb catalog</h2>
      <button @click="sortList">sort (a-z)</button>
    </div>
    
    <table>
      <thead>
        <tr>
          <th>Base form</th>
          <th>Past simple</th>
          <th>Past participle</th>
        </tr>
      </thead>
      <!-- <div class="table-div"> -->
      <tbody>
        <div class="isolated-div">
        <tr v-for="item in list" :key="item" class="table-row">
          <td>{{ item["base form"] }}</td>
          <td>{{ item["past simple"] }}</td>
          <td>{{ item["past participle"] }}</td>
        </tr>
      </div>
      </tbody>
    <!-- </div> -->
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

<style scoped>

.title{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

table{
  width: 100%;
  position: relative;
  border-collapse: collapse;
  table-layout: fixed;
}
thead{
  border-bottom: 2px solid black;
}
tbody{
  width: 100%;
  height: 75vh;
  overflow: hidden;
  overflow-y: scroll;
  position: absolute;
}
.isolated-div{
  width: 100%;
  position: relative;
}

td{
  width: 33vw;
}
th{
  text-align: start;
}

.isolated-div>:nth-child(odd){
  background-color: lightgreen;
}


</style>
