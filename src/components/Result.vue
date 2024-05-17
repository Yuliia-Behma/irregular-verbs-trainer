<template>
  <div
    class="wraper flex flex-col w-full max-w-md justify-between my-0 mx-auto px-6 pt-6 pb-4"
  >
    <div>
      <p
        class="text-xl text-center mb-2 text-gray-900 font-bold dark:text-white"
      >
        Your result
      </p>
      <p
        class="text-xl text-center mb-2 font-bold dark:text-white"
        :class="{
          'text-green-600': color === 'green',
          'text-orange-500': color === 'orange',
          'text-red-600': color == 'red',
        }"
      >
        {{ score }}% {{ message }}
      </p>
      <p class="text-sm text-orange-600 dark:text-white text-center">
        {{ 20 - countOfMistakes }} out of 20 correct answers
      </p>
    </div>

    <video 
        v-if="score === 100"
        class="mb-1 place-self-center"
        loading="lazy"
        muted="muted"
        autoplay="autoplay"
        type="video/mp4"
        loop="loop"
        width="224"
        height="224"
        src="../assets/video/excellent.mp4"
      ></video>
        <video 
        v-else-if="score < 100 && score > 70"
        class="mb-1 place-self-center"
        loading="lazy"
        muted="muted"
        autoplay="autoplay"
        type="video/mp4"
        loop="loop"
        width="224"
        height="224"
        src="../assets/video/green.mp4"
      ></video>
        <video 
        v-else-if="color === 'orange' || color === 'red'"
        class="mb-1 place-self-center"
        loading="lazy"
        muted="muted"
        autoplay="autoplay"
        type="video/mp4"
        loop="loop"
        width="224"
        height="224"
        src="../assets/video/redOrange.mp4"
      ></video>

    <div>
      <button
        type="button"
        class="text-white grow w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center inline-flex justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          class="w-6 h-6 text-white dark:text-white mr-2"
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
            d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
          />
        </svg>

        Start again
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
</template>

<script>
import { onMounted, ref } from "vue";
import { useErrorsStore } from "@/store/errors";

export default {
  name: "Result",

  setup() {
    const countOfMistakes = ref(0);
    const errorsArray = ref([]);
    let score = ref(100);
    let message = ref("");
    let color = ref("");

    onMounted(() => {
      const errorStore = useErrorsStore();
      console.log(errorStore);
      errorsArray.value = errorStore.errorsArray;
      console.log(errorsArray.value);
      countOfMistakes.value = errorsArray.value.length;
      // 5 - відсоток 1 помилки
      score.value -= countOfMistakes.value * 5;

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
    });

    return {
      countOfMistakes,
      errorsArray,
      score,
      message,
      color,
    };
  },
};
</script>

<style scoped></style>
