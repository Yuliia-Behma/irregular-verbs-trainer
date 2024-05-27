<template>
  <div
    class="wraper px-6 flex flex-col justify-between w-full max-w-md my-0 mx-auto overflow-y-auto"
    @keyup.enter="checkAnswer"
  >
    <div>
      <!-- Progress Bar start -->
      <div
        class="mb-1 font-medium text-gray-500 dark:text-gray-500 text-right text-xs mt-6"
      >
        {{ progress }}
      </div>
      <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div
          class="bg-green-400 h-1.5 rounded-full dark:bg-green-500"
          :style="{ width: progress }"
        ></div>
      </div>
      <!-- Progress Bar end -->
      <h4 class="text-xl font-bold dark:text-white text-gray-800">
        What is the
        <span class="text-blue-600">{{ currentFormForComparison }}</span> form
        for the verb
        <span class="text-green-600"
          >"to {{ currentWord.value["base form"] }}"</span
        >?
      </h4>
      <p class="text-sm text-orange-500 dark:text-white text-center mt-2 mb-4">
        {{ index + 1 }} out of 20
      </p>

      <input
        type="text"
        id="answer"
        v-model.trim="answer"
        @input="validateInput"
        autocomplete="off"
        maxlength="15"
        lang="en"
        class="border font-medium text-base rounded-lg block w-full py-3.5 px-4 placeholder-gray-500 placehoder:font-normal dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :class="{
          'bg-gray-50': isValid === true,
          'border-gray-300': isValid === true,
          'focus:border-blue-500': isValid === true,
          'focus:ring-blue-500': isValid === true,
          'text-gray-900': isValid === true,
          'bg-red-50': isValid === false || isAnswer === false,
          'border-red-500': isAnswer === false || isValid === false,
          'focus:border-red-500': isAnswer === false || isValid === false,
          'focus:ring-red-500': isAnswer === false || isValid === false,
          'text-red-700': isAnswer === false || isValid === false,
          'bg-green-50': isAnswer,
          'border-green-500': isAnswer,
          'text-green-700': isAnswer,
          'focus:border-green-500': isAnswer,
          'focus:ring-green-500': isAnswer,
        }"
        placeholder="Your answer"
      />

      <div class="check-container">
        <div v-if="isAnswer" class="answerIsTrue">
          <p class="text-sm text-green-600 dark:text-white mt-2 mb-4">Right</p>
          <p class="text-xl text-gray-900 dark:text-white font-bold">
            Right answer,
            <span class="text-green-500"> greate</span>!
          </p>
        </div>

        <div v-else-if="isAnswer === false" class="answerIsFalse">
          <p class="text-sm text-red-600 dark:text-white mt-2 mb-4">Wrong</p>
          <p class="text-xl text-gray-900 dark:text-white font-bold">
            The right answer is
            <span class="text-green-500">
              "{{ currentWord.value[currentFormForComparison] }}"</span
            >
          </p>
        </div>
        <p
          v-else-if="answer === ''"
          class="text-sm text-gray-500 dark:text-white mt-2"
        >
          Write the answer and push "Check"
        </p>
        <p v-if="!isValid" class="text-sm text-red-500 dark:text-white mt-2">
          The answer should contain only lowercase English letters and
          optionally the '/' character.
        </p>
      </div>
    </div>

    <div class="flex flex-col">
      <video
        v-if="isAnswer === true"
        class="place-self-center"
        muted
        autoplay
        type="video/mp4"
        loop
        width="224"
        height="224"
        playsinline
        webkit-playsinline
        src="../assets/video/answerTrue.mp4"
      ></video>
      <video
        v-else-if="isAnswer === false"
        class="place-self-center"
        muted
        autoplay
        type="video/mp4"
        loop
        width="224"
        height="224"
        playsinline
        webkit-playsinline
        src="../assets/video/answerFalse.mp4"
      ></video>
      <video
        v-else
        class="place-self-center"
        muted
        autoplay
        type="video/mp4"
        loop
        width="224"
        height="224"
        playsinline
        webkit-playsinline
        src="../assets/video/laptopCat.mp4"
      ></video>

      <div class="pb-4 flex">
        <!-- <button
          type="button"
          @click="restartGame"
          class="text-blue-700 flex-none border border-blue-700 py-3.5 px-6 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center inline-flex items-center me-4 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
        >
          <svg
            class="w-6 h-6 text-currentColor dark:text-white hover:text-white focus:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
            />
          </svg>
        </button> -->

        <button
          type="button"
          @click="checkAnswer"
          :disabled="isButtonDisabled"
          class="text-white grow w-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center inline-flex justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          :class="{
            'bg-blue-700': isButtonDisabled === false,
            'cursor-not-allowed': isButtonDisabled === true,
            'bg-blue-400': isButtonDisabled === true,
          }"
        >
          <svg
            class="w-6 h-6 me-2 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 11.917 9.724 16.5 19 7.5"
            />
          </svg>
          Check
          <svg
            class="w-6 h-6 text-white dark:text-white ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onBeforeMount } from "vue";
import router from "@/router";
import { useVerbsStore } from "@/store/verbs";
import { useErrorsStore } from "@/store/errors";

export default defineComponent({
  name: "GameCard",
  props: {
    level: String,
  },
  setup(props) {
    const verbsStore = useVerbsStore();
    const errorsStore = useErrorsStore();

    const currentWord = reactive({});
    const index = ref(0);
    const answer = ref("");
    const isAnswer = ref(null);
    const currentFormForComparison = ref("");
    const currentLevel = ref(props.level);

    const progress = ref("0%");
    let isButtonDisabled = ref(false);
    let isValid = ref(true);
    const regexForInput = /^[a-z/]*$/;

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
      return progress;
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
      router.replace("/results");
    }

    function checkAnswer() {
      calculateProgress(index.value);
      isButtonDisabled.value = true;
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
            isButtonDisabled.value = false;
          }
        }, 2000);
      } else {
        isAnswer.value = false;
        console.log(isAnswer.value);
        const errorObj = {
          "base form": currentWord.value["base form"],
          "comparison form": currentFormForComparison.value,
          "my answer": answer.value,
          "correct answer": currentWord.value[currentFormForComparison.value],
        };
        errorsStore.addError(errorObj);
        console.log(errorsStore.errorsArray);
        // console.log(verbsStore.currentVerbs.length);
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
            isButtonDisabled.value = false;
          }
        }, 2000);
      }
    }

    function restartGame() {
      this.$emit("restart");
      index.value = 0;
      answer.value = "";
      errorsStore.$reset();
    }

    function validateInput() {
      answer.value = answer.value.toLowerCase();
      isValid.value = regexForInput.test(answer.value);
      isButtonDisabled.value = isValid.value ? false : true;
    }

    return {
      verbsStore,
      currentWord,
      index,
      answer,
      isAnswer,
      currentFormForComparison,
      restartGame,
      checkAnswer,
      progress,
      calculateProgress,
      isButtonDisabled,
      isValid,
      validateInput,
    };
  },
});
</script>

<style scoped>
video {
  pointer-events: none;
}
</style>
