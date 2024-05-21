import { defineStore } from "pinia";

export const useErrorsStore = defineStore({
  id: "errors",
  state: () => ({
    errorsArray: [],
    countOfMistakes: 0,
    score: 0,
    message: "",
    color: "",
  }),
  actions: {
    addError(err) {
      this.errorsArray.push(err);
    },
    getAllValues() {
      this.countOfMistakes = this.errorsArray.length;
      // 5 - відсоток 1 помилки
      this.score = 100 - this.countOfMistakes * 5;

      if (this.score === 100) {
        this.message = "Excellent!";
        this.color = "green";
      } else if (this.score < 100 && this.score > 70) {
        this.message = "Good job!";
        this.color = "green";
      } else if (this.score <= 70 && this.score > 30) {
        this.message = "You can do better!";
        this.color = "orange";
      } else {
        this.message = "Do not upset the Cat, practice more!";
        this.color = "red";
      }
    },
  },
});
