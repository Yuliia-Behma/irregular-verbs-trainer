<template>
  <div class="hello">
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

export default {
  name: 'VerbList',
  setup() {

    const list = json.hard
  
    return {
      list
    }
  }
}
</script>

<style scoped>

</style>
