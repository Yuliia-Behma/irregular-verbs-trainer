<template>
  <div class="result">
    Your result is {{ 20 - countOfMistakes }} / 20 
  </div>
  <table>
    <thead>
      <tr>
        <th v-for="(value, name) in errorsArr[0]" :key="value">{{ name }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="error in errorsArr" :key="error">
        <td v-for="value in error" :key="value">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {ref} from "vue"

export default {
  name: 'Result',
  props: {
    errorsArr: Array
  },
  setup(props) {
    const countOfMistakes = ref(props.errorsArr.length);

    return {
      countOfMistakes
    }
  }
}
</script>

<style scoped>
th, td{
  border: 1px solid black;
}
</style>
