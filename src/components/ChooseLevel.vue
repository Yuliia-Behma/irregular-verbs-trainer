<template>
  <div v-if="!allow" class="choose-level-container">
    <fieldset @keyup.enter="startGameBtn">
      <legend>Choose level</legend>
      <div class="variant-box">
        <input
          type="radio"
          name="gameLevel"
          value="easy"
          id="easyLevel"
          v-model="level"
        />
        <label for="easyLevel">Easy</label>
      </div>
      <div class="variant-box">
        <input
          type="radio"
          name="gameLevel"
          value="medium"
          id="mediumLevel"
          v-model="level"
        />
        <label for="easyLevel">Medium</label>
      </div>
      <div class="variant-box">
        <input
          type="radio"
          name="gameLevel"
          value="hard"
          id="hardLevel"
          v-model="level"
        />
        <label for="easyLevel">Hard</label>
      </div>
    </fieldset>

    <button @click="startGameBtn">Start</button>
  </div>
  <div v-else class="main-content">
    <div class="card-container" @keyup.enter="checkAnswer">
      <p>
        What is the <span>{{ currentFormForComparison }}</span> of
        <span>{{ currentWord.value["base form"] }}</span
        >?
      </p>
      <div class="counter-display">{{ index + 1 }} of 20</div>
      <input type="text" v-model.trim="answer" />
      <div class="check-container">
        <div v-if="isAnswer" class="answerIsTrue">Greate!</div>
        <div v-if="isAnswer === false" class="answerIsFalse">
          No... The right answer is
          {{ currentWord.value[currentFormForComparison] }}
        </div>
        <button @click="checkAnswer">Check</button><br />
        <Result v-if="showResult" :errorsArr="errorsArr"></Result>
        <button @click="restartGame">Restart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import { useVerbsStore } from "@/store";
import Result from "./Result.vue";

export default defineComponent({
  name: "ChooseLevel",
  components: { Result },

  setup() {
    const verbsStore = ref(useVerbsStore());
    const level = ref("");
    const allow = ref(false);
    const index = ref(0);
    const currentWord = reactive({});
    const answer = ref("");
    const isAnswer = ref(null);
    const currentFormForComparison = ref("");
    let errorsArr = ref([]);
    let showResult = ref(false);

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

    function startGameBtn() {
      allow.value = true;
      verbsStore.value.getCurrentGameVerbsList(level);
      currentWord.value = verbsStore.value.currentVerbs[index.value];
      identifyForm();
    }

    function checkAnswer() {
      // перевірка
      if (answer.value == currentWord.value[currentFormForComparison.value]) {
        isAnswer.value = true;
        console.log(isAnswer.value);
        setTimeout(() => {
          isAnswer.value = null;
          if (index.value > verbsStore.value.currentVerbs.length - 1) {
            endGame();
            return;
          } else if (index.value < verbsStore.value.currentVerbs.length) {
            index.value++;
            answer.value = "";
            currentWord.value = verbsStore.value.currentVerbs[index.value];
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
        console.log(verbsStore.value.currentVerbs.length);
        setTimeout(() => {
          isAnswer.value = null;
          if (index.value == verbsStore.value.currentVerbs.length - 1) {
            endGame();
            return;
          } else if (index.value < verbsStore.value.currentVerbs.length) {
            index.value++;
            answer.value = "";
            currentWord.value = verbsStore.value.currentVerbs[index.value];
            identifyForm();
          }
        }, 1000);
      }
    }

    function endGame() {
      console.log("end game work");
      showResult.value = true;
      // кнопка чек дісейбл
    }

    function restartGame() {
      allow.value = false;
      level.value = "";
      index.value = 0;
      answer.value = "";
      errorsArr.value = [];
      showResult.value = false;
    }

    return {
      verbsStore,
      allow,
      level,
      startGameBtn,
      index,
      currentWord,
      answer,
      checkAnswer,
      restartGame,
      identifyForm,
      isAnswer,
      currentFormForComparison,
      showResult,
      errorsArr,
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
</style>
