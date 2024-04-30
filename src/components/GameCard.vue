<template>
  <div class="card-container" @keyup.enter="checkAnswer">
    <div class="progress-bar-wraper">
      <div class="percent-progress">{{ calculateProgress(index) }}</div>
      <div class="progress-bar">
        <div class="progress" :style="{ width: progress,}"></div>
      </div>
    </div>
    <p>
      What is the <span>{{ currentFormForComparison }}</span> form for the verb
      <span>"to {{ currentWord.value["base form"] }}"</span>?
    </p>
    <div class="counter-display">{{ index + 1 }} out of 20</div>
    <input type="text" v-model.trim="answer" placeholder="Your answer" />
    <div class="check-container">
      <div v-if="isAnswer" class="answerIsTrue">Right answer, greate!</div>
      
      <div v-else-if="isAnswer === false" class="answerIsFalse">
        Wrong<br />
        The right answer is
        <span> "{{ currentWord.value[currentFormForComparison] }}"</span>
      </div>
      <div
        v-else-if="answer === ''"
        class="haveNoAnswer"
      >
        Wright the answer and push "Check"
      </div>
      <button @click="checkAnswer">Check</button><br />
      <Result v-if="showResult" :errorsArr="errorsArr"></Result>
      <button @click="restartGame">Restart</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onBeforeMount } from "vue";
import { useVerbsStore } from "@/store/verbs";
import Result from "./Result.vue";

export default defineComponent({
  name: "GameCard",
  components: { Result },
  props: {
    level: String,
  },
  setup(props) {
    const verbsStore = useVerbsStore();
    const currentWord = reactive({});
    const index = ref(0);
    const answer = ref("");
    const isAnswer = ref(null);
    const currentFormForComparison = ref("");
    let errorsArr = ref([]);
    let showResult = ref(false);
    const currentLevel = ref(props.level);

    const progress = ref("");

    onBeforeMount(() => {
      console.log(currentLevel.value);
      verbsStore.getCurrentGameVerbsList(currentLevel.value);
      currentWord.value = verbsStore.currentVerbs[index.value];
      identifyForm();
    });

    function calculateProgress(index) {
      let percent = (index + 1) / 0.2;
      percent += "%";
      progress.value = percent;
      return percent;
    }

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function identifyForm() {
      const num = randomNumber(1, 2);
      if (num == 1) {
        return (currentFormForComparison.value = "past simple");
      } else if (num == 2) {
        return (currentFormForComparison.value = "past participle");
      }
    }

    function endGame() {
      console.log("end game work");
      showResult.value = true;
    }

    function checkAnswer() {
      // перевірка
      if (answer.value == currentWord.value[currentFormForComparison.value]) {
        isAnswer.value = true;
        console.log(isAnswer.value);
        setTimeout(() => {
          isAnswer.value = null;
          if (index.value == verbsStore.currentVerbs.length - 1) {
            endGame();
            return;
          } else if (index.value < verbsStore.currentVerbs.length - 1) {
            index.value++;
            answer.value = "";
            currentWord.value = verbsStore.currentVerbs[index.value];
            identifyForm();
          }
        }, 1000);
      } else {
        isAnswer.value = false;
        console.log(isAnswer.value);
        const errorObj = {
          "base form": currentWord.value["base form"],
          "comparison form": currentFormForComparison.value,
          "my answer": answer.value,
          "correct answer": currentWord.value[currentFormForComparison.value],
        };
        errorsArr.value.push(errorObj);
        console.log(errorObj);
        console.log(verbsStore.currentVerbs.length);
        setTimeout(() => {
          isAnswer.value = null;
          if (index.value == verbsStore.currentVerbs.length - 1) {
            endGame();
            return;
          } else if (index.value < verbsStore.currentVerbs.length - 1) {
            index.value++;
            answer.value = "";
            currentWord.value = verbsStore.currentVerbs[index.value];
            identifyForm();
          }
        }, 1000);
      }
    }

    function restartGame() {
      this.$emit("restart");
      index.value = 0;
      answer.value = "";
      errorsArr.value = [];
      showResult.value = false;
    }

    return {
      verbsStore,
      currentWord,
      index,
      answer,
      isAnswer,
      currentFormForComparison,
      errorsArr,
      showResult,
      restartGame,
      checkAnswer,
      progress,
      calculateProgress
    };
  },
});
</script>

<style scoped>
span {
  color: rgb(6, 133, 91);
  font-weight: 800;
}
button {
  margin: 10px;
}
.percent-progress{
  text-align: end;
}

.progress-bar{
  width: 100%;
  height: 5px;
  border: 1px solid black;
  border-radius: 3px;
  box-sizing: border-box;
}
.progress{
  height: 3px;
  background-color: rgb(1, 179, 120);
}
</style>
