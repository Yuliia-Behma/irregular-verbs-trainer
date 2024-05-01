<template>
  <div class="result">
    Your result is {{ 20 - countOfMistakes }} / 20 
  </div>
  <table>
    <thead>
      <tr>
        <th v-for="(value, name) in errorsArray[0]" :key="value">{{ name }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="error in errorsArray" :key="error">
        <td v-for="value in error" :key="value">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { onMounted, ref } from "vue";
import { useErrorsStore } from "@/store/errors";

export default {
  name: 'Result',
  
  setup() {
    const countOfMistakes = ref(0);
    const errorsArray = ref([]);

    onMounted(() => {
      const errorStore = useErrorsStore();
      console.log(errorStore)
      errorsArray.value = errorStore.errorsArray;
      console.log(errorsArray.value)
      countOfMistakes.value = errorsArray.value.length;
    })
    

    return {
      countOfMistakes,
      errorsArray
    }
  }
}
</script>

<style scoped>
th, td{
  border: 1px solid black;
}
</style>
