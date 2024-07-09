import { defineStore } from "pinia";
import { ref } from "vue";

export const useErrorsStore = defineStore("errors", () => {
  const errorsArray = ref([]);
  const countOfMistakes = ref(0);
  const score = ref(0);
  const message = ref("");
  const color = ref("");

  const addError = (err) => {
    errorsArray.value.push(err);
  };

  const getAllValues = () => {
    countOfMistakes.value = errorsArray.value.length;
    // 5 - відсоток 1 помилки
    score.value = 100 - countOfMistakes.value * 5;

    if (score.value === 100) {
      message.value = "Excellent!";
      color.value = "green";
    } else if (score.value < 100 && score.value > 70) {
      message.value = "Good job!";
      color.value = "green";
    } else if (score.value <= 70 && score.value > 30) {
      message.value = "You can do better!";
      color.value = "orange";
    } else {
      message.value = "Do not upset the Cat, practice more!";
      color.value = "red";
    }
  }

  const $reset = () => {
    errorsArray.value = [];
    countOfMistakes.value = 0;
    score.value = 0;
    message.value = "";
    color.value = "";
  }

  return {errorsArray, countOfMistakes, score, message, color, addError, getAllValues, $reset}
});

